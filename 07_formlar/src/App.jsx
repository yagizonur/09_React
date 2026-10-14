/**
 * PROJE 7 — Formlar
 *
 * ═══════════════════════════════════════════════════════════════════
 *  PROBLEM
 * ═══════════════════════════════════════════════════════════════════
 *  Düz HTML'de input kendi değerini kendisi tutar; okumak için getElementById(...).value yazarız.
 *  React'te ise "ekran = state'in sonucu" kuralı var. Input'un değeri de state'te olmalı ki
 *  React onu bilsin, başka yerlerde kullanabilsin, gerektiğinde temizleyebilsin.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  CONTROLLED INPUT (kontrollü alan)
 * ═══════════════════════════════════════════════════════════════════
 *    const [isim, setIsim] = useState("");
 *    <input value={isim} onChange={e => setIsim(e.target.value)} />
 *
 *    value    → input HER ZAMAN state'teki değeri gösterir
 *    onChange → kullanıcı yazınca state güncellenir
 *
 *  DÖNGÜ (her tuş vuruşunda):
 *    kullanıcı "A" yazar → onChange çalışır → setIsim("A") → component yeniden çizilir
 *    → input value={isim} ile "A"yı gösterir
 *
 *  Tek doğruluk kaynağı state'tir. Input sadece state'i gösteren bir ayna gibidir.
 *  Bu yüzden value verip onChange VERMEZSEN input kilitlenir: kullanıcı yazsa bile
 *  state değişmez, input da hep eski değeri gösterir.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  FORM GÖNDERME
 * ═══════════════════════════════════════════════════════════════════
 *    <form onSubmit={handleSubmit}> ... <button type="submit">Kaydet</button> </form>
 *
 *    function handleSubmit(e) {
 *      e.preventDefault();   // ← İLK SATIR
 *      ...
 *    }
 *
 *  Tarayıcı, form gönderilince varsayılan olarak SAYFAYI YENİLER (eski usul sunucuya gönderme).
 *  Sayfa yenilenirse bütün React state'i sıfırlanır. e.preventDefault() bunu engeller.
 *
 *  onSubmit hem butona tıklanınca hem de input'ta Enter'a basılınca çalışır.
 *  Bu yüzden butona onClick yerine forma onSubmit vermek daha doğrudur.
 *
 * C# BENZETMESİ
 *   Controlled input ≈ WPF'teki TwoWay binding'in elle yapılmış hali.
 *   e.preventDefault() ≈ olayın varsayılan davranışını iptal etmek (e.Cancel = true gibi).
 */

import IsimKutusu from "./components/IsimKutusu.jsx";
import KayitFormu from "./components/KayitFormu.jsx";
import UrunEkle from "./components/UrunEkle.jsx";

function App() {
  return (
    <div className="sayfa">
      <header className="sayfa-basligi">
        <small>Proje 6</small>
        <h1>Formlar</h1>
        <p>Form alanlarını state ile yönetmek ve formu göndermek.</p>
      </header>

      <section className="ornek">
        <h2>1. Controlled input</h2>
        <div><IsimKutusu /></div>
      </section>

      <section className="ornek">
        <h2>2. Form gönderme ve listeye ekleme</h2>
        <div><KayitFormu /></div>
      </section>

      <section className="ornek cozum">
        <h2>Alıştırma çözümü: Ürün ekleme formu</h2>
        <div><UrunEkle /></div>
      </section>

      <p className="sonraki">Sonraki proje: 07-useeffect-ve-api</p>
    </div>
  );
}

export default App;
