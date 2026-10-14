/**
 * SekmeBasligi — bağımlılık dizisi: [sayi]
 *
 * Tarayıcı sekmesinin başlığı (document.title) React'in çizdiği sayfanın bir parçası değildir;
 * React'in DIŞINDA kalır. Onu değiştirmek bir "yan etki"dir, bu yüzden useEffect içinde yapılır.
 *
 * BAĞIMLILIK DİZİSİ NASIL ÇALIŞIR?
 *   React her çizimden sonra dizideki değerlere bakar ve bir öncekiyle karşılaştırır:
 *     [sayi] önceki çizimde 2, şimdi 3  → değişmiş  → effect'i ÇALIŞTIR
 *     [sayi] önceki çizimde 3, şimdi 3  → aynı      → effect'i ATLA
 *
 *   [] boş dizide karşılaştırılacak bir şey olmadığı için hiçbir zaman "değişmiş" olmaz;
 *   bu yüzden effect sadece ilk çizimde bir kez çalışır.
 *
 * KURAL: Effect'in içinde kullandığın ve değişebilen her değeri (state, props) diziye yaz.
 *   Burada effect "sayi"yı kullanıyor → [sayi]
 */
import { useState, useEffect } from "react";

function SekmeBasligi(){
    const[sayi, setSayi] = useState(0);

    useEffect(() => {
        document.title = `${sayi} kez tıklandı`;
    }, [sayi]); // Sadece "sayi" değiştiğinde çalış

    return(
        <div>
            <button onClick={() => setSayi(sayi + 1)}>Tıkla ({sayi})</button>
            <p className="soluk">Tarayıcı sekmesinin başlığına bak.</p>
        </div>
    );
}

export default SekmeBasligi;