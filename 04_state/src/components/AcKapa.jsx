/**
 * true / false STATE: göster ve gizle
 *
 * State sadece sayı olmak zorunda değil. Her türlü değer tutabilir:
 *   useState(0)          → sayı
 *   useState("")         → metin
 *   useState(false)      → true/false (açık mı, seçili mi, giriş yaptı mı...)
 *   useState([])         → dizi (liste)
 *   useState({ ... })    → nesne
 *
 * true/false state'ler arayüzde çok sık kullanılır:
 *   menü açık mı, modal görünüyor mu, şifre gösteriliyor mu, karanlık mod açık mı...
 *
 * NASIL ÇALIŞIYOR?
 *   1) Başta acik = false → paragraf görünmez, butonda "Göster" yazar.
 *   2) Butona basılınca setAcik(!acik) → setAcik(true) çağrılır.
 *   3) Component yeniden çizilir; bu sefer acik = true → paragraf görünür, butonda "Gizle" yazar.
 *
 *   "!" işareti değeri tersine çevirir:  !false → true,  !true → false
 *   Buna "toggle" (aç/kapa) denir.
 *
 * DİKKAT: Paragrafı gizlemek için CSS ile uğraşmıyoruz. State'e göre JSX'te ya var ya yok.
 *         Ekranı değil state'i değiştiriyoruz; ekran state'e göre kendiliğinden şekilleniyor.
 */
import { useState } from "react";

function AcKapa(){
    const[acik, setAcik] = useState(false); // Başlangıçta kapalı 

    return(
        <div>
            {/* Buton yazısı da state'e göre değişiyor(ternary: koşul ? doğruysa : yanlışsa) */}
            <button onClick={() => setAcik(!acik)}>{acik ? "Gizle" : "Göster"}</button>
            {/* acik true ise paragrafı göster, false ise hiçbir şey gösterme.
            Bu "&&" yazımını Proje 6'da detaylı göreceğiz.
            */}
            {acik && <p>Merhaba! Bu paragraf state ile gösteriliyor.</p>}
        </div>
    );
}

export default AcKapa;