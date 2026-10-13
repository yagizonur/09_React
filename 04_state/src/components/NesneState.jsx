/**
 * NESNE STATE'İ — dizilerdeki kural nesneler için de geçerli: DEĞİŞTİRME, KOPYALA.
 *
 *   YANLIŞ:  kisi.yas = 21;  setKisi(kisi);
 *     → Aynı nesne. React "bu hâlâ aynı nesne" der, ekranı güncellemez.
 *
 *   DOĞRU:   setKisi({ ...kisi, yas: 21 });
 *     → { ...kisi } eski nesnenin tüm alanlarını YENİ bir nesneye kopyalar,
 *       ardından yas alanının üzerine yazılır. React yeni nesneyi görür, ekranı günceller.
 *
 * NEDEN BÖYLE?
 *   React, state'in değişip değişmediğini içine tek tek bakarak değil,
 *   "bu hâlâ aynı nesne/dizi mi?" diye (referansa bakarak) anlar. Bu çok hızlıdır.
 *   Bu yüzden değişiklik yapmak istediğinde her zaman YENİ bir nesne/dizi vermelisin.
 *
 *   C# ile düşün: iki değişken aynı nesneyi gösteriyorsa, nesnenin içini değiştirmek
 *   referansı değiştirmez. React sadece referansa baktığı için farkı göremez.
 */

import { useState } from "react";

function NesneState(){
    const[kisi, setKisi] = useState({ad: "Onur", yas: 32, sehir:"Sivas"});

    return(
        <div>
            <p>
                <strong>{kisi.ad}</strong>, {kisi.yas} yaşında, {kisi.sehir}
            </p>

            <button onClick={() => setKisi({...kisi, yas: kisi.yas + 1})}>Yaş + 1</button>
            <button onClick={() => setKisi({...kisi, sehir: "İstanbul"})}>İstanbul'a taşın</button>
            <button onClick={() => setKisi({ad:"Onur", yas: 32, sehir: "Sivas"})}>Başa Dön</button>
        </div>
    );
}

export default NesneState;