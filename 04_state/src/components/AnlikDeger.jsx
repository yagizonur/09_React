/**
 * "set" HEMEN DEĞİŞTİRMEZ — state bir ANLIK GÖRÜNTÜDÜR (snapshot)
 *
 * Öğrencilerin en çok şaşırdığı durum:
 *
 *     setSayi(sayi + 1);
 *     console.log(sayi);   // ← hâlâ ESKİ değeri yazar!
 *
 * NEDEN?
 *   Her çizimde "sayi" SABİT bir değerdir; o çizimin fotoğrafı gibi düşün.
 *   setSayi, bu fotoğrafı değiştirmez. React'ten BİR SONRAKİ çizim için yeni bir fotoğraf ister.
 *   Yeni değeri ancak component yeniden çizildiğinde (fonksiyon baştan çalıştığında) görürsün.
 *
 *   Yani "sayi" bir değişken gibi değil, o anki ekranın bir parçası gibi davranır.
 *
 * NE YAPMALI?
 *   Yeni değere hemen ihtiyacın varsa onu önce bir değişkende hesapla:
 *
 *     const yeniDeger = sayi + 1;
 *     setSayi(yeniDeger);
 *     console.log(yeniDeger);   // ← doğru değer
 */
import { useState } from "react";

function AnlikDeger(){
    const[sayi, setSayi] = useState(0);
    const[mesaj, setMesaj] = useState("Butona bas ve açıklamayı oku.");

    function artir(){
        setSayi(sayi + 1);

        setMesaj(`setSayi(${sayi + 1}) çağrıldı. Ama bu satırda "sayi" hala ${sayi}. Yani değer bir sonraki çizimde gelir.`);
    }

    return(
        <div>
            <p style={{fontSize: 28, fontWeight: 700, margin: "0 0 8px"}}>{sayi}</p>
            <button onClick={artir}>Artır</button>
            <p className="soluk">{mesaj}</p>
        </div>
    );
}

export default AnlikDeger;