/**
 * GirisDurumu — koşullu gösterimin iki yolu
 *
 *  TERNARY  ( kosul ? A : B )
 *    İki seçenek var ve biri MUTLAKA gösterilecekse.
 *    Örnek: giriş yaptıysa "Hoş geldiniz", yapmadıysa "Lütfen giriş yapın".
 *    if-else'in JSX'teki karşılığı.
 *
 *  VE OPERATÖRÜ  ( kosul && A )
 *    Ya göster ya da hiçbir şey gösterme.
 *    Örnek: bildirim varsa rozet göster, yoksa hiçbir şey.
 *
 *    NASIL ÇALIŞIR? JavaScript'te "a && b":
 *      a yanlışsa (false, 0, "", null) → a'yı döndürür
 *      a doğruysa                      → b'yi döndürür
 *    React false, null ve undefined'ı ekrana basmaz, ama 0'ı BASAR.
 *    İşte && tuzağının sebebi bu: bildirimSayisi && ... yazarsan, sayı 0 iken ekrana "0" çıkar.
 *    Bu yüzden solda her zaman gerçek bir true/false olsun: bildirimSayisi > 0 && ...
 */

import { useState } from "react";

function GirisDurumu(){
    const[girisYapti, setGirisYapti] = useState(false);
    const[bildirimSayisi, setBildirimSayisi] = useState(0);

    return(
        <div>
            {/* Buton yazısı da koşula göre değişiyor */}
            <button onClick={() => setGirisYapti(!girisYapti)}>
                {girisYapti ? "Çıkış Yap" : "Giriş Yap"}
            </button>
            <button onClick={() => setBildirimSayisi(bildirimSayisi + 1)}>Bildirim gönder</button>

            {/* Ternary iki seçenekten biri mutlaka gösterilir */}
            {girisYapti ? <h3>Hoş geldiniz 🎉</h3> : <p>Lütfen giriş yapın.</p>}

            {bildirimSayisi > 0 && <p className="rozet yesil">{bildirimSayisi} yeni bildirim</p>}
        </div>
    );
}

export default GirisDurumu;