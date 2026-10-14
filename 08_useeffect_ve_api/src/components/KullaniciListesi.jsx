/**
 * KullaniciListesi — sayfa açılınca API'den veri çekmek
 *
 * Bu component, React'te veri çekmenin STANDART KALIBIDIR: 3 state + 1 useEffect.
 * Başka bir API'den başka bir veri çekerken de aynı iskeleti kullanırsın.
 *
 * ZAMAN ÇİZELGESİ
 *   1) İlk çizim: yukleniyor = true → ekranda "Yükleniyor..."
 *   2) Çizimden sonra useEffect çalışır → fetch ile istek gönderilir
 *   3) Cevap gelir (birkaç yüz milisaniye sonra):
 *        başarılıysa → setKullanicilar(veri)
 *        hata varsa  → setHata(mesaj)
 *      her iki durumda → setYukleniyor(false)
 *   4) State değişti → yeniden çizim → bu sefer liste (veya hata) görünür
 *   5) Bağımlılık dizisi [] olduğu için useEffect bir daha çalışmaz → döngü yok
 *
 * async / await
 *   fetch bir Promise döndürür (C#'taki Task gibi): "cevap gelince haber vereceğim."
 *   await, cevap gelene kadar bekler. C#'taki async/await ile aynı mantık.
 */

import { useState, useEffect } from "react";
import Yukleniyor from "./Yukleniyor.jsx";

function KullaniciListesi(){
    const[kullanicilar, setKullanicilar] = useState([]); // Gelen veri(başta boş liste)
    const[yukleniyor, setYukleniyor] = useState(true); // Başta true; sayfa açılır açılmaz yükleniyor.
    const[hata, setHata] = useState(null); // Hata mesajı(yoksa null)

    useEffect(() => {
        // useEffect'e verilen fonksiyonun KENDİSİ async olamaz(React buna izin vermez)
        // Bu yüzden içeride async bir fonksiyon tanımlayıp hemen altında çağırıyoruz.

        async function veriGetir(){
            try{
                // 1. İsteği gönder ve cevabı bekle.
                const cevap = await fetch("https://jsonplaceholder.typicode.com/users");

                // 2) Sunucu hata kodu döndürdüyse(404, 500...) kendimiz hata fırlatarız.
                // (fetch sadece bağlantı koparsa kendiliğinden hata verir.)
                if(!cevap.ok) throw new Error("Sunucu hatası");

                // 3) Cevabın gövdesindeki JSON metnini JavaScript dizisine çevir.
                const veri = await cevap.json();

                // 4) Veriyi state'e koy -> yeniden çizim -> liste ekranda
                setKullanicilar(veri);
            }catch(err){
                // İnternet yoksa, adres yanlışsa veya yukarıda hata fırlattıysak buraya gelir.
                setHata(err.message);
            }finally {
                // Başarılı da olsa, hata da olsa yükleme bitti.
                setYukleniyor(false);
            }
        }
        veriGetir();
    }, []); // Boş dizi -> sadece sayfa açılınca bir kez çalış

    // Üç durumu sırayla kontrol et(erken return, Proje 6)
    if(yukleniyor) return <Yukleniyor/>;
    if(hata) return <p className="hata">Hata: {hata}</p>;

    // Buraya geldiysek veri başarıyla gelmiş demektir.
    return(
        <ul>
            {kullanicilar.map(k => (
                <li key={k.id}>
                    {k.name} <span className="soluk">({k.email})</span>
                </li>
            ))}
        </ul>
    );
}

export default KullaniciListesi;