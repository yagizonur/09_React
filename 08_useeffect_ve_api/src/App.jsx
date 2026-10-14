/**
 * PROJE 8 — useEffect ve API
 *
 * ═══════════════════════════════════════════════════════════════════
 *  PROBLEM: SONSUZ DÖNGÜ
 * ═══════════════════════════════════════════════════════════════════
 *  Sayfa açılınca internetten kullanıcı listesini çekmek istiyoruz. İlk akla gelen:
 *
 *    function KullaniciListesi() {
 *      const [liste, setListe] = useState([]);
 *      fetch(...).then(veri => setListe(veri));   // ✗ YANLIŞ
 *      ...
 *    }
 *
 *  Ne olur? Component çizilir → fetch çalışır → veri gelir → setListe → yeniden çizim
 *  → fetch YİNE çalışır → veri gelir → setListe → yeniden çizim → ... SONSUZA KADAR.
 *
 *  Sebep: component fonksiyonu her çizimde baştan çalışır (Proje 4). İçine yazılan her şey
 *  her çizimde tekrar yapılır. Bize "bunu sadece bir kez yap" diyebileceğimiz bir yer lazım.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  ÇÖZÜM: useEffect
 * ═══════════════════════════════════════════════════════════════════
 *    useEffect(() => {
 *      // yapılacak iş
 *    }, [bagimliliklar]);
 *
 *  useEffect, içindeki kodu component EKRANA ÇİZİLDİKTEN SONRA çalıştırır.
 *  NE ZAMAN tekrar çalışacağını ikinci parametre (bağımlılık dizisi) belirler:
 *
 *    useEffect(fn, [])      → sadece ilk çizimden sonra, BİR KEZ
 *                             "Sayfa açılınca veri çek" için kullanılır.
 *    useEffect(fn, [x])     → ilk çizimden sonra ve x HER DEĞİŞTİĞİNDE
 *                             "Seçilen kullanıcı değişince onun yazılarını çek" gibi.
 *    useEffect(fn)          → her çizimden sonra (nadiren gerekir, dikkatli kullan)
 *
 *  Bu tür işlere "yan etki" (side effect) denir: React'in dışındaki dünyaya dokunan işler.
 *  API'den veri çekmek, sekme başlığını değiştirmek, zamanlayıcı kurmak, tarayıcıya kaydetmek.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  VERİ ÇEKMENİN ÜÇ DURUMU
 * ═══════════════════════════════════════════════════════════════════
 *  İnternetten veri anında gelmez ve her zaman gelmeyebilir. Bu yüzden her zaman üç durum vardır:
 *    yükleniyor  → "Yükleniyor..." göster
 *    hata        → hata mesajı göster
 *    başarılı    → veriyi göster
 *  Her durum için bir state tutulur. KullaniciListesi.jsx bu kalıbı adım adım gösteriyor.
 *  Öğrencilere bu kalıbı ezberlet; gerçek projelerde sürekli karşılarına çıkacak.
 *
 * C# BENZETMESİ
 *   useEffect(fn, []) ≈ Form_Load / OnInitializedAsync
 *   fetch + await     ≈ HttpClient.GetAsync + await
 *   try / catch / finally → C#'takiyle birebir aynı
 *
 * NOTLAR
 *   • Test API'si: https://jsonplaceholder.typicode.com (ücretsiz, kayıt gerektirmez). İnternet gerekir.
 *   • Geliştirme sırasında React effect'leri bilerek İKİ KEZ çalıştırır (StrictMode).
 *     F12 → Network'te iki istek görürsen bu hata değil. Canlı sürümde bir kez çalışır.
 */

import KullaniciListesi from "./components/KullaniciListesi.jsx";
import SekmeBasligi from "./components/SekmeBasligi.jsx";
import KullaniciYazilari from "./components/KullaniciYazilari.jsx";

function App() {
  return (
    <div className="sayfa">
      <header className="sayfa-basligi">
        <small>Proje 7</small>
        <h1>useEffect ve API</h1>
        <p>Sayfa açılınca internetten veri çekmek.</p>
      </header>

      <section className="ornek">
        <h2>1. Sayfa açılınca veri çekmek: []</h2>
        <div><KullaniciListesi /></div>
      </section>

      <section className="ornek">
        <h2>2. Bir değer değişince çalışmak: [sayi]</h2>
        <div><SekmeBasligi /></div>
      </section>

      <section className="ornek cozum">
        <h2>Alıştırma çözümü: Seçilen kullanıcının yazıları</h2>
        <div><KullaniciYazilari /></div>
      </section>

      <p className="sonraki">Sonraki proje: 08-bitirme-projesi</p>
    </div>
  );
}

export default App;