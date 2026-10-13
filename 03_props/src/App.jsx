/**
 * PROJE 4 — Props
 *
 * ═══════════════════════════════════════════════════════════════════
 *  PROBLEM
 * ═══════════════════════════════════════════════════════════════════
 *  Proje 2'deki Kartvizit hep aynı kişiyi gösteriyordu. 20 farklı kişi için
 *  20 ayrı component mi yazacağız? Hayır. Aynı component'e farklı VERİ göndeririz.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  PROPS NEDİR?
 * ═══════════════════════════════════════════════════════════════════
 *  Props (properties), üst component'ten alt component'e veri göndermenin yoludur.
 *  Bir fonksiyona parametre geçmekle aynı fikirdir. Component bir fonksiyonsa,
 *  props da onun parametreleridir.
 *
 *  GÖNDERMEK (üst component'te) — HTML attribute gibi yazılır:
 *    <UrunKarti ad="Kalem" fiyat={10} stokta={true} />
 *      - Metin  → tırnak ile:       ad="Kalem"
 *      - Diğer her şey → { } ile:   fiyat={10}  stokta={true}  liste={[1, 2]}  kisi={{ ad: "Ali" }}
 *        (fiyat="10" yazarsan sayı değil METİN gider!)
 *
 *  ALMAK (alt component'te) — tek bir nesne olarak gelir:
 *    function UrunKarti(props)               → props.ad, props.fiyat
 *    function UrunKarti({ ad, fiyat })       → destructuring ile, STANDART yol
 *
 * ═══════════════════════════════════════════════════════════════════
 *  EN ÖNEMLİ KURAL: PROPS SADECE OKUNUR
 * ═══════════════════════════════════════════════════════════════════
 *  Alt component, aldığı props'u DEĞİŞTİREMEZ. Veri TEK YÖNDE akar: yukarıdan aşağı.
 *  Bir değerin değişmesi gerekiyorsa o değer props değil STATE olmalıdır (Proje 3).
 *
 *  Bu kural sayesinde "bu veri nereden geldi, kim değiştirdi?" sorusunun cevabı hep bellidir:
 *  veriyi kim gönderdiyse o değiştirir.
 *
 * C# BENZETMESİ
 *   <UrunKarti ad="Kalem" fiyat={10} />  ≈  new UrunKarti(ad: "Kalem", fiyat: 10)
 *   Props ≈ constructor parametreleri / readonly property'ler
 *   Farkı: C#'ta parametre sırası önemli; props'ta isimle gönderildiği için sıra önemsiz.
 */

import Selamla from "./components/Selamla";
import UrunKarti from "./components/UrunKarti";
import Kutu from "./components/Kutu";
import OgrenciKarti from "./components/OgrenciKarti";

function App(){
  return(

    <div className="sayfa">
      <header className="sayfa-basligi">
        <small>Proje 3</small>
        <h1>Props</h1>
        <p>Üst component'ten alt component'e veri göndermek.</p>
      </header>

      <section className="ornek">
        <h2>1. Aynı component, farklı veri</h2>
        {/*
        Aynı Selamla component'i, her seferinde farklı props ile.
        Kod bir kez yazıldı; .çıktı gönderilen veriye göre değişiyor.
        */}
        <Selamla isim="Fatih" yas={21} />
        <Selamla isim="Ercan" yas={49} />
       
       {/* yas gönderilmedi -> Selamla içindeki varsayılan değer(18) kullanılır. */}
        <Selamla isim="Onur" />
      </section>

      <section className="ornek">
          <h2>2. Ürün kartı</h2>
          {/* izgara: kartları yan yana dizen ortak CSS sınıfı(index.css) */}
          <div className="izgara">
            <UrunKarti ad="Kalem" fiyat={10} stokta={true}/>
            <UrunKarti ad="Defter" fiyat={40} stokta={false}/>
            <UrunKarti ad="Silgi" fiyat={5} stokta={true}/>
          </div>
      </section>

      <section className="ornek">
            <h2>3. children</h2>
            <div>
              {/* Kutu ile </Kutu> arasında yazılan her şey Kutu'ya "children" adlı özel prop olarak gider.
              Kutu içeriği bilmez; sadece çerçeveyi çizer ve ne verildiyse onu koyar. */}
              <Kutu baslik="Duyuru">
              <p>Yarın ders yok.</p>
              </Kutu>
              <Kutu baslik="Hatırlatma">
                  <p>Ödev teslimi Cuma günü</p>
                  <button>Tamam</button>
              </Kutu>
            </div>
      </section>

      <section className="ornek cozum">
              <h2>Alıştırma çözümü: OgrenciKarti (4 kez)</h2>
              <div className="izgara">
                <OgrenciKarti ad="Onur Yağız" numara={101} bolum="Bilgisayar" />
                <OgrenciKarti ad="Ercan Yürümez" numara={102} bolum="Elektronik" />
                <OgrenciKarti ad="Fatih Özçelik" numara={103} bolum="Bilgisayar" />
                <OgrenciKarti ad="Altan Emre" numara={104} bolum="Makine" />
              </div>
      </section>

      <p className="sonraki">Sonraki proje: 04 - state</p>
    </div>
  );
}

export default App;