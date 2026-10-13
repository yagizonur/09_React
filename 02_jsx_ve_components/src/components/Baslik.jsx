/*
 Baslik - sayfanın üst başlığı 

 Ayrı bir dosyada duran en basit component örneği. Bir component dosyası 3 parçadan oluşur:

    1) (varsa) import satırları      -> başka dosyalardan ihtiyaç duyulanlar
    2) function Baslik() {...}       -> JSX döndüren fonksiyon
    3) export default Baslik;        -> "Bu dosyanın ana çıktısı component"

App.jsx bu component'i şöyle kullanıyor:
    import Baslik from "./components/Baslik.jsx"   -> içeri al
    <Baslik/>                                      -> ekrana çiz

NEDEN AYRI DOSYA ?

- Her component kendi dosyasında olursa kod düzenli kalır, aranan şey kolay bulunur,
  aynı component başka sayfalarda da kullanılabilir. (C#'ta her class'ın ayrı .cs dosyası gibi)
  Gelenek: dosya adı component adıyla aynıdır -> Baslik.jsx Baslik component'i 
*/

function Baslik(){
    return(
        // <header>, <small>, <h1>, <p> küçük harfle başladığı için normal HTML etiketi olarak çizilir.
        <header className="sayfa-basligi">
            <small>Proje 1</small>
            <h1>JSX ve Component</h1>
            <p>React'in iki temel taşı: JSX ile arayüz yazmak ve arayüzü parçalara bölmek.</p>
        </header>
    );
}

export default Baslik;