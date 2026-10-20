/* 
 PROJE 9 - Bitirme Projesi: Stok Yönetimi (React + ASP.NET Core Web API + SQL Server)

 React(5173) -fetch -> Web API(5000) - EF Core -> SQL Server(StokDB)
*/

import { useState, useEffect } from "react";
import { urunEkle, urunGuncelle, urunleriGetir, urunSil } from "./api.js";
import Yukleniyor from "./components/Yukleniyor.jsx";
import UrunFormu from "./components/UrunFormu.jsx";
import UrunListesi from "./components/UrunListesi.jsx";

function App() {
    const[urunler, setUrunler] = useState([]);
    const[yukleniyor, setYukleniyor] = useState(true);
    const[hata, setHata] = useState(null);
    const[duzenlenen, setDuzenlenen] = useState(null); // null -> form "yeni ürün" modunda
    const[arama, setArama] = useState("");

    // Sayfa açılınca ürünleri bir kez çek(Proje 8'deki kalıp)
    useEffect(() => {
    async function veriGetir() {
        try{
            setUrunler(await urunleriGetir());
        }catch(err){
            setHata(err.message);
        }finally{
            setYukleniyor(false);
        }
    } 

    veriGetir();
    }, []);

    // Form gönderilince çağrılır. Hatayı burada yakalamıyoruz; UrunFormu yakalayıp kendisi gösterir.
    async function handleKaydet(bilgi) {
        if(duzenlenen){
            const guncel = await urunGuncelle(duzenlenen.id, bilgi);
            setUrunler(urunler.map((u) => (u.id === guncel.id ? guncel : u)));
            setDuzenlenen(null);
        }else {
            const yeni = await urunEkle(bilgi);
            setUrunler([yeni,...urunler]);
        }
    }

    async function handleSil(urun) {
        if(!confirm(`"${urun.ad}" silinsin mi?`)) return;
        try{
            await urunSil(urun.id);
            setUrunler(urunler.filter((u) => u.id !== urun.id));
            if(duzenlenen?.id === urun.id) setDuzenlenen(null);
        }catch(err){
            alert("Silinemedi: " + err.message);
        }
    }

    // Hesaplanan değer: aramaya uyan ürünler(state değil, her çizimde hesaplanır.)
    const gosterilecek = urunler.filter((u) => 
    u.ad.toLowerCase("tr").includes(arama.trim().toLocaleLowerCase("tr"))
    );


    return(
        <div className="sayfa">
            <header className="sayfa-basligi">
                <small>Proje 9 Bitirme</small>
                <h1>Stok Yönetimi</h1>
                <p>React + ASP.NET Core Web API + SQL Server ile ürün ekle, listele, güncelle ve sil</p>
            </header>

            <section className="ornek">
                <h2>{duzenlenen ? `${duzenlenen.ad}` : "Yeni ürün ekle"}</h2>
                <div>
                    {/* key değişince React formu silip yeniden oluşturur -> from, seçilen ürünün bilgileriyle açılır */}
                    <UrunFormu
                    key={duzenlenen?.id ?? "yeni"}
                    duzenlenen = {duzenlenen}
                    onKaydet={handleKaydet}
                    onVazgec = {() => setDuzenlenen(null)}
                    />
                </div>
            </section>

            <section className="ornek">
            <h2>Ürünler ({urunler.length})</h2>
            {/*
             <> </> (Fragment): koymamızın sebebi bir bileşenin(Component) geriye döndürdüğü(return ettiği)
             JSX kodunun tek bir ana eleman(parent) tarafından sarmalanması gerekir. Eğer kodumuzu 
             fazladan bir div içine alıp HTML yapısını bozmak veya gereksiz DOM düğümleri(nodes) eklemek istemiyorsak, bu boş etiketleri kullanırız.
             İşlevsiz div etiketleri eklenmesini engeller.
             CSS tarafında da gereksiz bir div düzenlemesinin önüne geçer. 
            */}
            <div>
                {yukleniyor && <Yukleniyor />}
                {hata && <p className="hata">Ürünler yüklenemedi: {hata}. Web API çalışıyor mu ?</p>}
                {!yukleniyor && !hata && (
                    <> 
                     <input value={arama} onChange={(e) => setArama(e.target.value)} placeholder="Ürün ara..." />
                     <UrunListesi urunler = {gosterilecek} onDuzenle = {setDuzenlenen} onSil={handleSil} />
                    </>
                )}
            </div>
            </section>
        </div>
    );
}

export default App;

