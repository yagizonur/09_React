/* 
  JSX VE COMPONENT 

  ==========================================================
  JSX NEDİR ? 
  ==========================================================
  JavaScript dosyanın içinde HTML'e benzeyen kod yazmamızı sağlayan bir yazım şeklidir. 
  JSX, HTML DEĞİLDİR. Tarayıcı JSX'i anlamaz; Vite onu çalıştırmadan önce düz JavaScript'e çevirir:

    Yazdığın:  <h1 className="baslik">Merhaba</h1>
    Çevrilen:  React.createElement("h1", {className:"baslik"},"Merhaba")
  
  Yani JSX sadece daha okunaklı bir yazımdır. Razor'daki .cshtml dosyalarının derlenip C# koduna dönüşmesine benzer.

  ==========================================================
  SÜSLÜ PARANTEZ { }
  ==========================================================
  JSX içinde { } arasına yazılan her şey JavaScript olarak çalışır.
  Ama sadece DEĞER ÜRETEN İFADE yazılabilir:
  ✓ {ad} {yas + 1} {ad.toUpperCase()} {yas >= 18 ? "Reşit" : "Değil"}
  ✗ {if (...) {...}} {for (...) {...}} -> bunlar değer üretmez, komuttur. 

  ==========================================================
  COMPONENT NEDİR?
  ==========================================================
  JSX döndüren bir JavaScript fonksiyonudur. Arayüzün bir parçasını temsil eder:
  başlık, kart, buton, menü...Bir kez yazılır, istenildiği kadar kullanılır.

  İki kural:
    1) Adı BÜYÜK harfle başlar: Selamla ✓ selamla ✗
      (React küçük harfle başlayan etiketleri HTML etiketi sanar: <div>, <p>)
    2) JSX döndürür(veya hiçbir şey göstermeyecekse null)

    Kullanırken HTML etiketi gibi yazılır: <Selamla />
*/

// Başka dosyalardaki component'leri içeri aldık. C#'taki using gibi.
// "./components/Baslik.jsx" -> bu dosyanın bulunduğu yerden components klasörüne git.
import Baslik from "./components/Baslik";
import AltBilgi from "./components/Altbilgi";
import Kartvizit from "./components/Kartvizit";

// Aynı dosya içinde tanımlanmış küçük bir component.
// Sadece bu dosyada kullanılacağı için export edilmedi.
function Selamla() {
  return <p>👋 Merhaba! Ben bir component'im.</p>
}


// App: uygulamanın ana component'i. main.jsx bunu alıp sayfaya çizer.
// Diğer bütün component'ler App'in içinde (ya da onların içinde) kullanılır -> bir ağaç yapısı oluşur.
function App() {
  // Normal JS değişkenleri. JSX içinde { } ile kullanacağız.
  const ad = "Fatih";
  const yas = 21;

  return (
    <div className="sayfa">
      {/* Başka dosyadan gelen component, HTML etiketi gibi kullanılır */}
      <Baslik />
      <section className="ornek">
        <h2>1. Süslü parantez ile JavaScript</h2>
        <div>
          {/* Değişkenin değeri ekrana yazılır. */}
          <p>Merhaba {ad}</p>
          <p>Gelecek yıl {yas + 1} yaşında olacaksın.</p>
          <p>Durum: {yas >= 18 ? "Reşit" : "Reşit Değil"}</p>
        </div>
      </section>
      
      <section className="ornek">
      <h2>2. HTML'den farklı kurallar</h2>
      <div>
        {/* 1) class yerine className yazılır.
            Sebep: "class" JavaScript'te ayrılmış bir kelime(class tanımlamak için)
        */}
        <p className="soluk">Bu paragrafın rengi className ile verildi</p>

        {/* 2) style bir NESNEDİR, metin değil.
          Dıştaki { } -> "JavaScript başlıyor"
          İçteki { } -> Bir JavaScript nesnesi
          Özellik adları camelCase yazılır: background-color -> backgroundColor
          Sayı yazılırsa "px" kabul edilir: padding: 8 -> "8px"
        */}
        <p style={{backgroundColor: "#0e7490", color: "white", padding: 8, borderRadius: 6}}>
          Bu paragrafın stili style nesnesiyle verildi.
        </p>
          {/* Tek etiketler mutlaka kapatılır: <br/> vs gibi */}
        <input placeholder="Etiket <input/> şeklinde kapatıldı" />
      </div>
      </section>

      <section className="ornek">
            <h2>3. Bir kez yaz, çok kez kullan</h2>
            <div>
              {/* Aynı component üç kez kullanılıyor. Kodu bir kez yazdık, üç kopya çizildi. */}
              <Selamla/>
              <Selamla/>
              <Selamla/>
            </div>
      </section>

      <section className="ornek cozum">
        <h2>Alıştırma çözümü: Kartvizit</h2>
        <div>
          <Kartvizit/>
        </div>
      </section>
      <AltBilgi/>
    </div>
  );
}
// Bu dosyanın dışarıya verdiği şey App component'i.
// main.jsx'teki "import App from /.App.jsx" satırı bunu alır.
// default: dosyanın ana çıktısı; import ederken { } kullanılmaz ve istenen isim verilebilir.
export default App;
