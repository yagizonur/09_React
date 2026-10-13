/* 
 UrunKarti - farklı türde props alan gerçekçi bir ürün

Props: 
ad      -> metin         (gönderirken: ad = "Kalem")
fiyat   -> sayı          (gönderirken: fiyat={10})
stokta  -> true/false    (gönderirken:stokta={true})

Aynı component, gelen props'a göre FARKLI görünüyor: 
    stokta true ise  -> yeşil "Stokta var" rozeti
    stokta false ise -> kırmızı "Tükendi" rozeti

Gerçek projelerde ürün listesi bir DB'den veya API'den gelir.
Her ürün için bu component bir kez kullanılır(Proje 6'ta map ile otomatik yapacağız) 
*/
function UrunKarti({ad, fiyat, stokta}){
    return(
        <div className="kart">
            <h3>{ad}</h3>
            <p style={{margin: "0 0 8px"}}>{fiyat} ₺</p>
            {/* Props'a göre farklı sınıf ve farklı yazı(ternary ile)
                className'e de { } ile hesaplanmış bir değer verilebilir.
            */}
            <span className= { stokta ? "rozet yeşil" : "rozet kirmizi"}>
                {stokta ? "Stokta var" : "Tükendi"}
            </span>
        </div>
    );
}

export default UrunKarti;
