/**
 * ALIŞTIRMA ÇÖZÜMÜ: Seçilen kullanıcının yazıları
 * Görev: Bir kullanıcıya tıklanınca o kişinin yazıları gelsin.
 *
 * ÇÖZÜMÜN MANTIĞI
 *   1) Hangi kullanıcının seçili olduğunu state'te tut: seciliId (başta null = kimse)
 *   2) Butona tıklanınca sadece seciliId'yi değiştir. Veri çekmeyi butonda YAPMA.
 *   3) Veri çekme işini useEffect'e bırak ve bağımlılık dizisine [seciliId] yaz.
 *      Böylece seciliId her değiştiğinde effect kendiliğinden yeniden çalışır ve
 *      yeni kullanıcının yazılarını çeker.
 *
 * AKIŞ
 *   Leanne'e tıkla → setSeciliId(1) → yeniden çizim → seciliId değişti (null → 1)
 *   → useEffect çalışır → /users/1/posts isteği → yazılar gelir → setYazilar → yeniden çizim
 *
 *   Ervin'e tıkla → setSeciliId(2) → ... → /users/2/posts → yeni yazılar
 *
 * Bu yaklaşımın güzelliği: "seçim değişince ne olacak?" sorusunu tek bir yerde (effect) cevaplıyoruz.
 * İleride seciliId'yi değiştiren başka bir yol eklesen (örn. bir açılır liste), yine çalışır.
 */
import { useState, useEffect } from "react";
import Yukleniyor from "./Yukleniyor.jsx"


// Kullanıcı butonları için sabit liste(API'deki ilk 4 kullanıcı)
const kullanicilar = [
    {id: 1, ad:"Leanne"},
    {id: 2, ad:"Ervin"},
    {id: 3, ad:"Clementine"},
    {id: 4, ad:"Partricia"},
];

function KullaniciYazilari(){
    const[seciliId, setSeciliId] = useState(null); // Başta kimse seçili değil
    const[yazilar, setYazilar] = useState([]); 
    const[yukleniyor, setYukleniyor] = useState(false); // Başta bir şey yüklenmiyor

    useEffect(() => {
        // İlk çizimde seciliId null -> henüz seçim yok, bir şey yapma
        if(seciliId === null) return;
        
        async function yazilariGetir() {
            setYukleniyor(true);
            // Template literal ile aderse seçili Id'yi yerleştiriyoruz: /users/1/posts, users/2/posts
            const cevap = await fetch(`https://jsonplaceholder.typicode.com/users/${seciliId}/posts`);
            const veri = await cevap.json();
            setYazilar(veri);
            setYukleniyor(false);
        }

        yazilariGetir();
    },[seciliId]); // seciliId her değiştiğinde yeniden çalış
    
    return(
        <div>
            {/* Butonlar sadece seçimi değiştiriyor; veri çekme işi useEffect'te */}
            {kullanicilar.map(k => (
                <button key={k.id} onClick={() => setSeciliId(k.id)} className={k.id === seciliId ? "secili" : ""}>
                    {k.ad}
                </button>
            ))}
            {/* Üç farklı durum için üç ayrı koşul */}
            {seciliId === null && <p className="soluk">Bir kullanıcı seç.</p>}
            {yukleniyor && <Yukleniyor />}

            {!yukleniyor && seciliId !== null && (
                <ol>
                    {yazilar.map(y => (
                        <li key={y.id}>{y.title}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default KullaniciYazilari;