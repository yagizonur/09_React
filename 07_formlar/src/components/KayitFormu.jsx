/**
 * KayitFormu — form gönderme + gönderilen kayıtları listede göstermek
 *
 * Bu component'te 3 state var:
 *   ad, email  → formdaki alanların anlık değeri (controlled input)
 *   kayitlar   → gönderilmiş kayıtların listesi
 *
 * FORM GÖNDERİLİNCE NE OLUYOR? (handleSubmit)
 *   1) e.preventDefault()          → sayfa yenilenmesin
 *   2) Yeni kaydı listeye ekle     → [...kayitlar, yeniKayit]  (diziyi KOPYALA, Proje 3)
 *   3) Alanları temizle            → setAd(""), setEmail("")
 *   → Component yeniden çizilir: liste bir satır uzar, input'lar boşalır.
 *
 * BASİT DOĞRULAMA
 *   "gecerli" bir state değil, her çizimde ad'dan HESAPLANIYOR.
 *   Ad boşsa buton disabled (tıklanamaz) oluyor. Kullanıcı yazmaya başladığı anda
 *   yeniden çizim olur, gecerli true olur, buton aktifleşir.
 *
 * Date.now(): o anın zamanını milisaniye cinsinden bir sayı olarak verir.
 * Her kayıt farklı anda oluştuğu için basit bir benzersiz id olarak kullanılabilir
 * (listede key olarak lazım, Proje 5).
 */

import { useState } from "react";

function KayitFormu(){
    // HEr form alanı için ayrı state
    const[ad, setAd] = useState("");
    const[email, setEmail] = useState("");
    // Gönderilen kayıtların listesi(başta boş liste)
    const[kayitlar, setKayitlar] = useState([]);

    function handleSubmit(e) {
        e.preventDefault(); // Sayfanın yenilenmesini engelle! (unutulursa tüm state kaybolur)

        // {id:..., ad, email} kısa yazımı -> {id:..., ad: ad, email: email} ile aynı
        setKayitlar([...kayitlar, {id: Date.now(), ad, email}]);

        // Formu temizle: state boşalınca input'lar da boşalır(value={ad} sayesinde)
        setAd("");
        setEmail("");
    }

    // Hesaplanan değer: ad boş değilse form geçerli
    // trim(): baştaki/sondaki boşlukları siler; sadece boşluk yazılmışsa da geçersiz sayılır.
    const gecerli = ad.trim() !== "";

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={ad} onChange={e => setAd(e.target.value)} placeholder="Adınız..." />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-Posta" type="email" />
                {/* type="submit": tıklanınca veya bir input'ta Enter'a basılınca formun onSubmit'i çalışır */}
                <button type="submit" disabled={!gecerli}>Kaydet</button>
            </form>

            <h3 style={{marginBottom: 4}}>Kayıtlar ({kayitlar.length})</h3>

            {kayitlar.length === 0 ? (
                <p className="soluk">Henüz kayıt yok.</p>
            ): (
                <ul>
                    {kayitlar.map(k => (
                        // E-Posta girildiyse parantez içinde göster.
                        <li key={k.id}>{k.ad} {k.email && `(${k.email})`}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default KayitFormu;