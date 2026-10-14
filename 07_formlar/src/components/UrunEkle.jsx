/**
 * ALIŞTIRMA ÇÖZÜMÜ: Ürün ekleme formu
 * Görev: Ad + fiyat girilen bir form. Eklenen ürünler altta listelensin, toplam fiyat gösterilsin.
 *
 * ÇÖZÜMÜN MANTIĞI
 *   1) İki controlled input: ad ve fiyat
 *   2) Form gönderilince ürün listeye eklenir, alanlar temizlenir
 *   3) Toplam fiyat STATE DEĞİL: her çizimde listeden hesaplanır.
 *      Ürün eklenince liste değişir → yeniden çizim → toplam kendiliğinden güncellenir.
 *
 * DİKKAT: INPUT'TAN GELEN DEĞER HER ZAMAN METİNDİR
 *   type="number" olsa bile e.target.value "40" gibi bir METİN verir, 40 sayısını değil.
 *   Metinlerle toplama yaparsan birleştirme olur: "10" + "40" = "1040"
 *   Bu yüzden listeye eklerken Number(fiyat) ile sayıya çeviriyoruz.
 */

import { useState } from "react";

function UrunEkle(){
    const[ad, setAd] = useState("");
    const[fiyat, setFiyat] = useState(""); // Input'la bağlı olduğu için metin olarak tutuluyor.
    const[urunler, setUrunler] = useState([]);

    function handleSubmit(e) {
        e.preventDefault(); 
        // fiyat metnini sayıya çevirerek kaydet
        setUrunler([...urunler, {id: Date.now(), ad, fiyat: Number(fiyat)}]);
        setAd("");
        setFiyat("");
    }

    // Toplam state değil, listeden hesaplanıyor.
    // (İleride aynı işi tek satırda yapan reduce metodunu da görebilirsiniz.)
    let toplam = 0; 
    for(const u of urunler){
        toplam += u.fiyat;
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={ad} onChange={e => setAd(e.target.value)} placeholder="Ürün adı"/>
                <input value={fiyat} onChange={e => setFiyat(e.target.value)} placeholder="Fiyat" type="number"/>
                {/* İki alandan biri boşsa buton pasif */}
                <button type="submit" disabled={!ad || !fiyat}>Ekle</button>
            </form>

            <ul>
                {urunler.map(u => (
                    <li key={u.id}>{u.ad}: {u.fiyat} ₺</li>
                ))}
            </ul>
            <p><strong>Toplam: {toplam}</strong>₺</p>
        </div>
    );
}

export default UrunEkle;