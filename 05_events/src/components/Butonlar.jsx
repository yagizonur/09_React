/**
 * Butonlar — onClick'in iki kullanımı
 *
 *  1) PARAMETRESİZ: fonksiyonun adını ver.
 *       onClick={selamVer}
 *
 *  2) PARAMETRELİ: arrow function ile sar.
 *       onClick={() => sec("Pizza")}
 *
 * NEDEN İKİNCİSİNDE SARMAK ZORUNDAYIZ?
 *   onClick bir FONKSİYON bekler. sec("Pizza") yazarsan fonksiyonu ÇAĞIRMIŞ olursun
 *   ve onClick'e fonksiyon değil, çağrının sonucu (burada undefined) gider.
 *   Üstelik çağrı sayfa çizilirken hemen yapılır, tıklamayı beklemez.
 *
 *   () => sec("Pizza") ise yeni, küçük bir fonksiyondur. React onu saklar ve
 *   tıklandığında çalıştırır; o da içeride sec("Pizza")'yı çağırır.
 *
 * Bu component ayrıca olay + state birlikteliğini gösteriyor:
 *   tıklama → setSecim(...) → yeniden çizim → ekranda yeni seçim
 */

import { useState} from "react";

function Butonlar(){
    const[secim, setSecim] = useState("Henüz seçilmedi");

    // Parametresiz fonksiyon
    function selamVer(){
        alert("Merhaba");
    }

    // Parametreli fonksiyon: hangi yemeğin seçildiğini alır.
    function sec(yemek){
        setSecim(yemek);
    }

    return(
        <div>
            {/* 1) Parametre yok -> sadece adı(parantez YOK) */}
            <button onClick={selamVer}>Selam Ver</button>

                {/* 2) Parametre var -> arrow functin ile sar */}
            <button onClick={() => sec("Pizza")}>🍕 Pizza</button>
            <button onClick={() =>sec("Makarna")}>🍝 Makarna</button>

            <p>Seçimin: <strong>{secim}</strong></p>
        </div>
    );
}

export default Butonlar;