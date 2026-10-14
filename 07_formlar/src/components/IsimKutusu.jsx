/**
 * IsimKutusu — controlled input'un en basit hali
 *
 * İKİ YÖNLÜ BAĞ
 *   Kullanıcı → State:  onChange ile. Kullanıcı yazınca state güncellenir.
 *   State → Kullanıcı:  value ile. State değişince input onu gösterir.
 *
 * İkinci yönü "Temizle" butonu gösteriyor: input'a hiç dokunmadan sadece state'i
 * boşaltıyoruz (setIsim("")), input da kendiliğinden boşalıyor.
 * Düz JS'de bunun için input.value = "" yazmamız gerekirdi.
 */

import { useState } from "react";

function IsimKutusu(){
    const[isim, setIsim] = useState(""); // Başlangıçta boş metin

    return(
        <div>
            <input 
            value={isim}                            // 1. Input, state'teki değeri gösterir.
            onChange={e => setIsim(e.target.value)} // 2ç Yazılınca state güncellenir.
            placeholder="Adınız..."
            />
            {/* 3. State değiştiği için bu satır her tuşta anında güncellenir. */}
            <p>Merhaba <strong>{isim}</strong></p>

            {/* State'i koddan değiştirince input da değişir(ters yön) */}
            <button onClick={() => setIsim("")}>Temizle</button>
        </div>
    );
}

export default IsimKutusu;