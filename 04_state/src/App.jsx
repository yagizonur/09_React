/**
 * PROJE 4 — State (useState)
 *
 * ═══════════════════════════════════════════════════════════════════
 *  STATE NEDİR?
 * ═══════════════════════════════════════════════════════════════════
 *  Component'in kendi içinde tuttuğu ve zamanla DEĞİŞEN veridir.
 *  Örnekler: sayaçtaki sayı, menünün açık/kapalı olması, sepetteki ürünler, input'a yazılan metin.
 *
 *  React'in temel kuralı:  EKRAN = f(STATE)
 *    Ekran, state'in bir sonucudur. State değişince React ekranı yeniden hesaplar.
 *    Sen ekranı DEĞİL, state'i değiştirirsin. (Düz JS'deki getElementById / innerText yok.)
 *
 * ═══════════════════════════════════════════════════════════════════
 *  YAZIMI
 * ═══════════════════════════════════════════════════════════════════
 *    import { useState } from "react";
 *    const [deger, setDeger] = useState(baslangicDegeri);
 *
 *    deger     → şu anki değer (okumak için)
 *    setDeger  → değeri değiştirmek için TEK yol; çağrılınca component yeniden çizilir
 *
 * ═══════════════════════════════════════════════════════════════════
 *  5 ALTIN KURAL
 * ═══════════════════════════════════════════════════════════════════
 *  1. State'i sadece set fonksiyonuyla değiştir.      sayi = 5  ✗      setSayi(5)  ✓
 *  2. set HEMEN değiştirmez; yeni değer bir sonraki çizimde gelir.           (AnlikDeger.jsx)
 *  3. Yeni değer eskisine dayanıyorsa fonksiyon ver: setSayi(o => o + 1)    (UcKezArtir.jsx)
 *  4. Dizi/nesneyi değiştirme, KOPYALA: [...liste, yeni], { ...kisi, yas: 21 }
 *                                                        (MeyveListesi.jsx, NesneState.jsx)
 *  5. useState'i component'in EN ÜSTÜNDE çağır; if, for veya iç fonksiyon içinde çağırma.
 *     (React, state'leri çağrılma SIRASINA göre tanır; sıra her çizimde aynı olmalı.)
 *
 * ═══════════════════════════════════════════════════════════════════
 *  PROPS İLE FARKI
 * ═══════════════════════════════════════════════════════════════════
 *    Props → dışarıdan gelir, SADECE OKUNUR (fonksiyon parametresi gibi)
 *    State → component'in kendi içindedir, set ile DEĞİŞTİRİLİR (private field gibi)
 *
 * ═══════════════════════════════════════════════════════════════════
 *  NE STATE OLMALI, NE OLMAMALI?
 * ═══════════════════════════════════════════════════════════════════
 *    ✓ Zamanla değişen ve ekranı etkileyen veri → state
 *    ✗ Hiç değişmeyen veri → normal const
 *    ✗ Başka state'lerden hesaplanabilen veri (toplam, filtrelenmiş liste) → her çizimde hesapla
 
 */

import YanlisSayac from "./components/YanlisSayac.jsx";
import Sayac from "./components/Sayac.jsx";
import AnlikDeger from "./components/AnlikDeger.jsx";
import UcKezArtir from "./components/UcKezArtir.jsx";
import AcKapa from "./components/AcKapa.jsx";
import MeyveListesi from "./components/MeyveListesi.jsx";
import NesneState from "./components/NesneState.jsx";
import BegeniButonu from "./components/BegeniButonu.jsx";

function App() {
  return (
    <div className="sayfa">
      <header className="sayfa-basligi">
        <small>Proje 3</small>
        <h1>State (useState)</h1>
        <p>Değişen veriyi tutmak ve değişince ekranı otomatik güncellemek.</p>
      </header>

      <section className="ornek">
        <h2>1. Neden normal değişken yetmiyor? (F12 ile konsolu aç)</h2>
        <div><YanlisSayac /></div>
      </section>

      <section className="ornek">
        <h2>2. useState ile sayaç (4 adımlık döngü)</h2>
        <div><Sayac /></div>
      </section>

      <section className="ornek">
        <h2>3. set hemen değiştirmez: state bir anlık görüntüdür</h2>
        <div><AnlikDeger /></div>
      </section>

      <section className="ornek">
        <h2>4. Önceki değere göre güncelleme</h2>
        <div><UcKezArtir /></div>
      </section>

      <section className="ornek">
        <h2>5. true / false state: göster ve gizle</h2>
        <div><AcKapa /></div>
      </section>

      <section className="ornek">
        <h2>6. Dizi state'i: ekle ve sil</h2>
        <div><MeyveListesi /></div>
      </section>

      <section className="ornek">
        <h2>7. Nesne state'i: kopyalayarak güncelle</h2>
        <div><NesneState /></div>
      </section>

      <section className="ornek cozum">
        <h2>Alıştırma çözümü: Beğeni butonu</h2>
        <div><BegeniButonu /></div>
      </section>

      <p className="sonraki">Sonraki proje: 04-olaylar</p>
    </div>
  );
}

export default App;
