/**
 * YaziKutusu — onChange ve event nesnesi (e)
 *
 * onChange, input'un içeriği her değiştiğinde (her tuş vuruşunda) çalışır.
 *
 * EVENT NESNESİ
 *   React olay fonksiyonunu çağırırken ona otomatik olarak bir nesne gönderir.
 *   Genelde "e" (event) diye adlandırılır. İçinde olayla ilgili her şey vardır:
 *
 *     e.target         → olayı tetikleyen HTML elemanı (burada <input>)
 *     e.target.value   → input'un içindeki güncel metin
 *     e.key            → basılan tuş (onKeyDown olayında; örn. "Enter")
 *
 *   Fonksiyonu yazarken parametre olarak e'yi tanımlaman yeterli: function yazildi(e) { ... }
 *   Çağırma işini React yapar.
 *
 * AKIŞ
 *   kullanıcı "a" yazar → onChange çalışır → e.target.value = "a" → setYazi("a")
 *   → component yeniden çizilir → ekranda "Yazdığın: a"
 *
 * C# BENZETMESİ: TextBox.TextChanged olayı; e ≈ EventArgs, e.target ≈ sender
 */
import { useState } from "react";

function YaziKutusu() {
    const [yazi, setYazi] = useState("");

    function yazildi(e) {
        setYazi(e.target.value); // Input'taki metni state'e kopyala
    }

    return (
        <div>
            {/* yazildi fonksiyonunun kendisini veriyoruz; React onu e ile çağıracak.*/}
            <input onChange={yazildi} placeholder="Bir şey yaz..." />

            <p>Yazdığın: <strong>{yazi}</strong></p>

            {/* State'ten hesaplanan bir değer: metnin uzunluğu */}
            <p className="soluk">Karakter sayısı: {yazi.length}</p>
        </div>
    );
}

export default YaziKutusu;