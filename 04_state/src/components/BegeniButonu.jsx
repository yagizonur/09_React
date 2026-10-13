/*
Görev: Her tıklamada artan bir sayaç. Sayı 10'u geçince yazı kırmızı olsun.

 * ÇÖZÜMÜN MANTIĞI
 *   1) Beğeni sayısı zamanla değişiyor → state olmalı: useState(0)
 *   2) Tıklanınca bir artmalı → setBegeni(begeni + 1)
 *   3) Renk için AYRI bir state GEREKMEZ.
 *      Renk, beğeni sayısından hesaplanabiliyor: begeni > 10 ? "red" : "black"
 *      Her çizimde bu hesap yeniden yapılır, sayı değişince renk de kendiliğinden değişir.
 *
 * ÖNEMLİ FİKİR: Başka bir state'ten hesaplanabilen şeyi state'te tutma.
 *   Yanlış: const [renk, setRenk] = useState("black");  ve her tıklamada renk kontrolü
 *   Doğru:  renk her çizimde begeni'den hesaplanır. Tek bilgi kaynağı: begeni.
 */

import { useState } from "react";

function BegeniButonu(){
    const[begeni, setBegeni] = useState(0);

    return(
        <button 
        onClick={() => setBegeni(begeni + 1)}
        // Renk state'den HESAPLANIYOR; ayrı bir state değil 
        style={{color: begeni > 10 ? "red" : "black"}}
        >
            ❤️{begeni} beğeni
        </button>
    );
}

export default BegeniButonu;