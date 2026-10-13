/**
 * ÖNCEKİ DEĞERE GÖRE GÜNCELLEME: setSayi(onceki => onceki + 1)
 *
 * Bir önceki örneğin (AnlikDeger.jsx) doğal sonucu:
 * "sayi" bir çizim boyunca sabit olduğuna göre, aşağıdaki üç satırın üçü de AYNI şeyi söyler:
 *
 *     // sayi = 0 iken:
 *     setSayi(sayi + 1);   // setSayi(0 + 1) → "değer 1 olsun"
 *     setSayi(sayi + 1);   // setSayi(0 + 1) → "değer 1 olsun"
 *     setSayi(sayi + 1);   // setSayi(0 + 1) → "değer 1 olsun"
 *     // Sonuç: 3 değil, 1
 *
 * ÇÖZÜM: set fonksiyonuna bir DEĞER yerine bir FONKSİYON ver.
 * React bu fonksiyonu sıraya koyar ve her birine bir öncekinin SONUCUNU verir:
 *
 *     setSayi(onceki => onceki + 1);   // 0 → 1
 *     setSayi(onceki => onceki + 1);   // 1 → 2
 *     setSayi(onceki => onceki + 1);   // 2 → 3
 *
 * KURAL: Yeni değer ESKİ değere dayanıyorsa (artırmak, tersine çevirmek, listeye eklemek)
 * fonksiyonlu yazım daha güvenlidir. Günlük kodda tek satırlık setSayi(sayi + 1) da çalışır;
 * sorun sadece aynı anda birden fazla güncelleme yapıldığında çıkar.
 */
import { useState } from "react";

function UcKezArtir() {
  const [sayi, setSayi] = useState(0);

  function yanlisUcArtir() {
    setSayi(sayi + 1);
    setSayi(sayi + 1);
    setSayi(sayi + 1);
  }

  function dogruUcArtir() {
    setSayi(onceki => onceki + 1);
    setSayi(onceki => onceki + 1);
    setSayi(onceki => onceki + 1);
  }

  return (
    <div>
      <p style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>{sayi}</p>
      <button onClick={yanlisUcArtir}>+3 (yanlış yol: sadece 1 artar)</button>
      <button onClick={dogruUcArtir}>+3 (doğru yol)</button>
      <button onClick={() => setSayi(0)}>Sıfırla</button>
    </div>
  );
}

export default UcKezArtir;