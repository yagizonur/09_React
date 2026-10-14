/**
 * NotTablosu — nesne dizisini tabloya çevirmek + filtre
 *
 * Bu örnek üç fikri birleştiriyor:
 *
 *  1) map ile her öğrenciyi bir tablo satırına (<tr>) çevirmek
 *  2) Her satırda koşula göre farklı rozet göstermek (Geçti / Kaldı)
 *  3) Bir butonla listeyi filtrelemek
 *
 * ÖNEMLİ FİKİR: Filtrelenmiş liste STATE DEĞİL
 *   State'te sadece "sadece geçenler mi gösterilsin?" bilgisi (true/false) duruyor.
 *   Gösterilecek liste bu bilgiden ve öğrenci verisinden HER ÇİZİMDE yeniden hesaplanıyor.
 *
 *   Neden filtrelenmiş listeyi de state'te tutmuyoruz?
 *   Çünkü o zaman aynı bilgi iki yerde olurdu. Öğrenci verisi değişince filtrelenmiş listeyi
 *   de güncellemeyi unutursan ikisi birbirini tutmaz. Hesaplanabilen şeyi hesapla, saklama.
 */

import { useState } from "react";

// Her öğrencinin benzersiz id'si var -> key olarak bunu kullanacağız
// Gerçek projede bu veri API'den gelir. Veya DB'den gelir.
const ogrenciler = [
    {id: 1, ad: "Ercan", not: 85},
    {id: 2, ad: "Fatih", not: 45},
    {id: 3, ad: "Onur", not: 72},
    {id: 4, ad: "Arda", not: 39},
];

function NotTablosu(){
    const[sadeceGecenler, setSadeceGecenler] = useState(false);

    // Her çizimde(render) yeniden hesaplanıyor.
    // sadeceGecenler true ise   -> notu 50 ve üstü olanlar
    // false ise                 -> hepsi 
    const gosterilecek = sadeceGecenler ? ogrenciler.filter(o => o.not >= 50) : ogrenciler;

    return(
        <div>
            <button onClick={() => setSadeceGecenler(!sadeceGecenler)}>
            {sadeceGecenler ? "Hepsini göster" : "Sadece geçenleri göster"}
            </button>

            <table style={{marginTop: 10}}>
                <thead>
                    <tr><th>Ad</th><th>Not</th><th>Durum</th></tr>
                </thead>
                <tbody>
                    {/* Her öğrenci bir <tr> satırına dönüşüyor. 
                        key, map'in döndürdüğü EN DIŞTAKİ elemana (<tr>) yazılır
                    */}
                    {gosterilecek.map(o => (
                    <tr key={o.id}>
                        <td>{o.ad}</td>
                        <td>{o.not}</td>
                        <td>
                            {/* Her satırda ayrı koşul: nota göre rozet rengi ve yazısı */}
                            <span className={o.not >= 50 ? "rozet yesil" : "rozet kirmizi"}>
                                {o.not >= 50 ? "Geçti" : "Kaldı"}
                            </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NotTablosu;