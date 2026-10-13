/**
 * PROJE 5 — Olaylar (events)
 *
 * ═══════════════════════════════════════════════════════════════════
 *  OLAY NEDİR?
 * ═══════════════════════════════════════════════════════════════════
 *  Kullanıcının yaptığı her eylem bir olaydır: tıklamak, yazmak, fareyi üzerine getirmek,
 *  formu göndermek... React'te olaylara JSX üzerinden tepki verilir.
 *
 *  Düz JavaScript'te:   buton.addEventListener("click", tiklandi);
 *  React'te:            <button onClick={tiklandi}>
 *
 *  Olay adları camelCase yazılır: onclick değil onClick, onchange değil onChange.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  EN ÖNEMLİ KURAL: FONKSİYONUN KENDİSİNİ VER, ÇAĞIRMA
 * ═══════════════════════════════════════════════════════════════════
 *    onClick={tiklandi}     ✓  "Tıklanınca bu fonksiyonu çalıştır" (fonksiyonu teslim ediyorsun)
 *    onClick={tiklandi()}   ✗  Fonksiyon SAYFA ÇİZİLİRKEN hemen çalışır, dönüş değeri onClick'e verilir.
 *                              İçinde state güncellemesi varsa: çizim → state değişir → yine çizim →
 *                              yine state değişir... "Too many re-renders" hatası.
 *
 *  Parametre gerekiyorsa fonksiyonu bir arrow function ile SAR:
 *    onClick={() => sec("Pizza")}
 *  Burada verilen şey "() => sec('Pizza')" fonksiyonudur; sec ancak tıklanınca çalışır.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  EVENT NESNESİ (e)
 * ═══════════════════════════════════════════════════════════════════
 *  React her olay fonksiyonuna otomatik olarak olayla ilgili bilgiler taşıyan bir nesne gönderir:
 *    e.target          → olayı tetikleyen HTML elemanı (input, buton...)
 *    e.target.value    → input'a yazılan metin
 *    e.preventDefault()→ tarayıcının varsayılan davranışını engeller (formlarda, Proje 7)
 *
 * ═══════════════════════════════════════════════════════════════════
 *  ALTTAN ÜSTE HABER VERMEK
 * ═══════════════════════════════════════════════════════════════════
 *  Props ile veri sadece yukarıdan aşağı gider. Peki alt component üst component'e
 *  "bana tıklandı" nasıl der? Üst component ona bir FONKSİYON gönderir (props ile),
 *  alt component de gerektiğinde o fonksiyonu çağırır. Aşağıdaki 3. örnek bunu gösteriyor.
 *
 *  Gelenek: prop adı "on" ile başlar (onSil, onEkle),
 *           üst component'teki fonksiyon adı "handle" ile başlar (handleSil, handleEkle).
 *
 * C# BENZETMESİ
 *   onClick={tiklandi}   ≈  button.Click += Tiklandi;
 *   e                    ≈  EventArgs     ·   e.target ≈ sender
 *   Fonksiyonu props ile göndermek ≈ event / delegate
 */

import { useState } from "react";
import Butonlar from "./components/Butonlar.jsx";
import YaziKutusu from "./components/YaziKutusu.jsx";
import SilButonu from "./components/SilButonu.jsx";
import KaranlikMod from "./components/KaranlikMod.jsx";

function App() {
  // 3. örnek için: SilButonu'na basılınca bu mesaj değişecek.
  // State App'te duruyor; SilButonu sadece "bana basıldı" diye haber veriyor.
  const [mesaj, setMesaj] = useState("Henüz silinmedi.");

  // Bu fonksiyonu SilButonu'na props olarak göndereceğiz.
  // SilButonu bunu çağırdığında App'in state'i değişir, App yeniden çizilir.
  function handleSil() {
    setMesaj("Silindi! (SilButonu, App'e haber verdi)");
  }

  return (
    <div className="sayfa">
      <header className="sayfa-basligi">
        <small>Proje 5</small>
        <h1>Olaylar (events)</h1>
        <p>Tıklama ve yazma gibi kullanıcı eylemlerine tepki vermek.</p>
      </header>

      <section className="ornek">
        <h2>1. onClick ve parametre geçmek</h2>
        <div><Butonlar /></div>
      </section>

      <section className="ornek">
        <h2>2. onChange ve event nesnesi</h2>
        <div><YaziKutusu /></div>
      </section>

      <section className="ornek">
        <h2>3. Fonksiyonu props ile göndermek</h2>
        <div>
          {/* handleSil fonksiyonunun KENDİSİNİ gönderiyoruz (parantez yok!).
              handleSil() yazsaydık sayfa açılır açılmaz çalışırdı. */}
          <SilButonu onSil={handleSil} />
          <p>{mesaj}</p>
        </div>
      </section>

      <section className="ornek cozum">
        <h2>Alıştırma çözümü: Karanlık mod</h2>
        <div><KaranlikMod /></div>
      </section>

      <p className="sonraki">Sonraki proje: 06_kosullar_ve_listeler</p>
    </div>
  );
}

export default App;
