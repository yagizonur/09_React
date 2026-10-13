/**
 * SilButonu — alt component'ten üst component'e haber vermek
 *
 * PROBLEM
 *   Veri props ile sadece YUKARIDAN AŞAĞI akar. SilButonu, App'teki "mesaj" state'ini
 *   doğrudan değiştiremez; o state App'e aittir.
 *
 * ÇÖZÜM
 *   App, SilButonu'na bir FONKSİYON gönderir (onSil prop'u).
 *   SilButonu tıklanınca o fonksiyonu çağırır. Fonksiyon App'in içinde tanımlı olduğu için
 *   App'in state'ini değiştirebilir.
 *
 *   App:        <SilButonu onSil={handleSil} />         → "Bir şey olursa bunu çağır"
 *   SilButonu:  <button onClick={onSil}>                → Tıklanınca App'in fonksiyonu çalışır
 *
 * NEDEN BÖYLE?
 *   SilButonu neyin silineceğini, silince ne olacağını bilmek zorunda değil.
 *   Sadece "bana basıldı" diye haber veriyor. Bu sayede aynı buton her yerde kullanılabilir:
 *   ürün silmek, görev silmek, yorum silmek... Kararı hep üst component veriyor.
 *
 * C# BENZETMESİ
 *   SilButonu'nun bir "Sil" event'i var; App bu event'e abone oluyor (onSil={handleSil}).
 *
 * Props:
 *   onSil — tıklanınca çağrılacak fonksiyon (App.jsx'ten geliyor)
 */

function SilButonu({onSil}) {
    // onSil zaten bir fonksiyon; onClick'e doğrudan verebiliriz.
    return <button onClick={onSil}>🗑️ Sil</button>
}

export default SilButonu;