/**
 * DİZİ STATE'İ — en önemli kural: diziyi DEĞİŞTİRME, yeni bir KOPYA oluştur.
 *
 * NEDEN?
 *   React, state'in değişip değişmediğini dizinin içine tek tek bakarak anlamaz.
 *   Sadece şunu sorar: "Bu hâlâ AYNI dizi mi?" (referans karşılaştırması)
 *
 *   liste.push("kiraz") aynı diziye eleman ekler. Dizi hâlâ aynı dizidir.
 *   setListe(liste) dediğinde React "aynı dizi, değişiklik yok" der ve ekranı GÜNCELLEMEZ.
 *
 *   [...liste, "kiraz"] ise YENİ bir dizi oluşturur (eski elemanları kopyalar, sona kiraz ekler).
 *   React yeni diziyi görür, ekranı günceller.
 *
 * DOĞRU YAZIMLAR (hepsi yeni dizi döndürür):
 *   Ekleme:     setListe([...liste, yeni])                           → spread
 *   Silme:      setListe(liste.filter(m => m !== "elma"))            → filter yeni dizi döndürür
 *   Güncelleme: setListe(liste.map(m => m === "elma" ? "ELMA" : m))  → map yeni dizi döndürür
 *
 * YANLIŞ YAZIMLAR (aynı diziyi değiştirir, KULLANMA):
 *   liste.push(...), liste.pop(), liste.splice(...), liste[0] = ..., liste.sort()
 */

import { useSyncExternalStore } from "react";
import { useState } from "react";

function MeyveListesi(){
    const[liste, setListe] = useState(["elma","armut"])

    return(
        <div>
            {/* join: diziyi aralarına ", "koyarak tek metine çevirir. */}
            <p>Meyveler: <strong>{liste.join(", ")}</strong></p>
        
            {/* Ekleme: eski elemanlar + kiraz -> yeni dizi */}
            <button onClick={() => setListe([...liste, "kiraz"])}>Kiraz Ekle</button>

            {/* Silme: "elma" olmayanlar tut -> yeni dizi */}
            <button onClick={() => setListe(liste.filter(m => m !== "elma"))}>Elmaları sil</button>
        
             {/* Tamamen yeni bir dizi vermek de geçerli bir güncellemedir. */}
            <button onClick={() => setListe(["elma","armut"])}>Başa dön</button>
        </div>
    );
}

export default MeyveListesi;
