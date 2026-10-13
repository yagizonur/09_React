/* 
Görev: Ad, numara ve bölüm alan bir kart yazıp App içinde 4 kez kullanmak. 
 * ÇÖZÜMÜN MANTIĞI
 *   1) Proje 2'deki Kartvizit'te değişkenler component'in İÇİNDEYDİ → hep aynı kişi.
 *   2) Burada değişkenleri component'in DIŞINA taşıdık: props olarak geliyorlar.
 *   3) App.jsx'te aynı component'i 4 kez, her seferinde farklı props ile kullanıyoruz.
 *
 * Dikkat: numara bir sayı olduğu için App.jsx'te numara={101} şeklinde { } ile gönderildi.
*/

function OgrenciKarti({ad, numara, bolum}){
    return(
        <div className="kart">
            <h3>{ad}</h3>
            <p style={{margin: "0 0 8px"}}>No: {numara} ₺</p>
            <span className="rozet">
                {bolum}
            </span>
        </div>
    );
}

export default OgrenciKarti;
