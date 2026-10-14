/**
 * PROJE 6 — Koşullar ve listeler
 *
 * ═══════════════════════════════════════════════════════════════════
 *  PROBLEM
 * ═══════════════════════════════════════════════════════════════════
 *  JSX içindeki { } sadece DEĞER ÜRETEN ifadeleri kabul eder. if ve for değer üretmez,
 *  bu yüzden JSX içine yazılamaz. Peki "giriş yaptıysa şunu göster" ya da
 *  "her ürün için bir kart çiz" nasıl yapılır?
 *
 * ═══════════════════════════════════════════════════════════════════
 *  KOŞUL: if yerine ternary ve &&
 * ═══════════════════════════════════════════════════════════════════
 *    kosul ? <A /> : <B />     → iki seçenekten BİRİ mutlaka gösterilir (if-else gibi)
 *    kosul && <A />            → koşul doğruysa A, yanlışsa HİÇBİR ŞEY (sadece if gibi)
 *
 *    && TUZAĞI: Soldaki değer 0 ise React ekrana "0" yazar.
 *      {liste.length && <p>...</p>}       ✗  liste boşken ekranda "0" görünür
 *      {liste.length > 0 && <p>...</p>}   ✓  her zaman karşılaştırma yaz
 *
 *    Not: JSX'in DIŞINDA, fonksiyonun gövdesinde normal if kullanılabilir (erken return):
 *      if (liste.length === 0) return <p>Liste boş</p>;
 *
 * ═══════════════════════════════════════════════════════════════════
 *  LİSTE: for yerine map
 * ═══════════════════════════════════════════════════════════════════
 *    {dizi.map(eleman => <li key={eleman.id}>{eleman.ad}</li>)}
 *
 *  map her elemanı bir JSX elemanına dönüştürür ve yeni bir dizi döndürür.
 *  React, JSX elemanlarından oluşan bir diziyi görünce hepsini sırayla ekrana basar.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  key NEDİR, NEDEN ŞART?
 * ═══════════════════════════════════════════════════════════════════
 *  Liste değiştiğinde (eleman eklenince, silinince, sıralanınca) React hangi satırın
 *  hangisi olduğunu anlamak zorundadır; yoksa bütün listeyi baştan çizer ya da
 *  satırları karıştırır. key, her satırın KİMLİK KARTIDIR.
 *
 *    ✓ Verideki benzersiz id:     key={urun.id}
 *    ~ Benzersizse değerin kendisi: key={meyve}  (aynı değer iki kez yoksa)
 *    ✗ Math.random()               (her çizimde değişir, kimlik olmaz)
 *    ~ Dizi sırası (index)         (liste hiç değişmiyorsa olur, değişiyorsa hataya yol açar)
 *
 *  key unutulursa konsolda "Each child in a list should have a unique key prop" uyarısı çıkar.
 *
 * C# BENZETMESİ
 *   map ≈ LINQ Select · filter ≈ Where · key ≈ veritabanındaki primary key
 *   Razor'daki @foreach ile aynı işi görür, sadece bir ifade olarak yazılır.
 */

import GirisDurumu from "./components/GirisDurumu.jsx";
import NotTablosu from "./components/NotTablosu.jsx";
import UrunFiltresi from "./components/UrunFiltresi.jsx";

// Basit liste örneği için veri. Component'in dışında tanımlandı çünkü hiç değişmiyor
// (her çizimde yeniden oluşturmaya gerek yok, state olmasına da gerek yok).
const meyveler = ["Elma", "Armut", "Kiraz"];

function App() {
  return (
    <div className="sayfa">
      <header className="sayfa-basligi">
        <small>Proje 6</small>
        <h1>Koşullar ve listeler</h1>
        <p>Duruma göre farklı içerik göstermek ve dizileri ekrana basmak.</p>
      </header>

      <section className="ornek">
        <h2>1. Koşullu gösterim</h2>
        <div><GirisDurumu /></div>
      </section>

      <section className="ornek">
        <h2>2. Basit liste: map</h2>
        <div>
          <ul>
            {/* map: ["Elma", "Armut", "Kiraz"] → [<li>Elma</li>, <li>Armut</li>, <li>Kiraz</li>]
                Meyve adları benzersiz olduğu için key olarak adın kendisi kullanılabilir. */}
            {meyveler.map(meyve => (
              <li key={meyve}>{meyve}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ornek">
        <h2>3. Nesne listesi + koşul + filtre</h2>
        <div><NotTablosu /></div>
      </section>

      <section className="ornek cozum">
        <h2>Alıştırma çözümü: Kategoriye göre ürün filtresi</h2>
        <div><UrunFiltresi /></div>
      </section>

      <p className="sonraki">Sonraki proje: 07_formlar</p>
    </div>
  );
}

export default App;
