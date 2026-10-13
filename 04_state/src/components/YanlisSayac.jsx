/**
 * YANLIŞ ÖRNEK (bilerek hatalı yazıldı): normal değişkenle sayaç
 *
 * NE OLUYOR?
 *   Butona basınca konsolda (F12) sayı artıyor: 1, 2, 3...
 *   Ama EKRANDA HEP 0 yazıyor.
 *
 * NEDEN? İki ayrı sebep var:
 *
 *   1) React'in haberi yok.
 *      "sayi++" sadece bir JavaScript değişkenini değiştirir. React bunu izlemez.
 *      React ekranı yalnızca bir state değiştiğinde (set fonksiyonu çağrıldığında) yeniden çizer.
 *      Burada set fonksiyonu yok → yeniden çizim yok → ekran eski hâlinde kalır.
 *
 *   2) Çizilse bile değer kaybolurdu.
 *      Component bir fonksiyondur ve her çizimde BAŞTAN çalışır.
 *      Fonksiyon baştan çalışınca "let sayi = 0" satırı da tekrar çalışır ve değer sıfırlanır.
 *      Yani yerel değişken, çizimler arasında değer SAKLAYAMAZ.
 *
 * ÇÖZÜM: useState. Hem değeri çizimler arasında saklar, hem de değişince React'e haber verir.
 *        (Sayac.jsx dosyasına bak.)
 */

function YanlisSayac(){
    let sayi = 0; // Her çizimde yeniden oluşur ve 0 olur.

    function artir()
    {
        sayi++; // Değişken artıyor ama React'in bundan haberi yok!
        console.log("YanlisSayac içindeki sayı:",sayi) // Konsolda artıyor...
    }

    return <button onClick={artir}>Yanlış Sayaç: {sayi}</button>; // ...ama ekranda hep 0
}

export default YanlisSayac;