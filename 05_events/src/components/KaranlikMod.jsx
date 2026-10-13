/*
Görev: Butona basınca kutunun arka planı siyah, yazısı beyaz olsun; tekrar basınca eski haline dönsün.

 *
 * ÇÖZÜMÜN MANTIĞI
 *   1) Tek bir bilgi yeterli: karanlık mod açık mı? → true/false state
 *   2) Buton tıklanınca bu bilgiyi tersine çevir: setKaranlik(!karanlik)
 *   3) Renkleri, buton yazısını state'e göre HESAPLA (ternary ile).
 *      Arka plan rengi, yazı rengi, buton yazısı için ayrı state'ler TUTMA;
 *      hepsi tek bir "karanlik" değerinden türetilebilir.
 *
 * Bu, React'in temel düşünce şeklidir: "Ekranın hangi hâlleri var?" diye sor,
 * o hâlleri state ile ifade et, gerisini JSX'te state'e göre hesapla.
*/

import { useState } from "react";

function KaranlikMod(){
    const[karanlik, setKaranlik] = useState(false);

    return(
        <div 
        style={{
            // Renkler state'e göre seçiliyor; state değişince yeniden hesaplanıyor.
            background: karanlik ? "#0f172a" : "white",
            color: karanlik ? "white" : "black",
            padding: 24,
            borderRadius: 10,
            border: "1px solid #e2e8f0",
        }}
        >
            <p style={{marginTop: 0}}>Bu kutunun teması butona göre değişir.</p>
            <button onClick={() => setKaranlik(!karanlik)}>
                {karanlik ? "☀️ Aydınlık mod" : "🌙 Karanlık Mod"}
            </button>
        </div>
    );
}

export default KaranlikMod;