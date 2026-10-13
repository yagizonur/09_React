/*
    REACT'TEN ÖNCE BİLİNMESİ GEREKEN JAVASCRIPT
    ---------------------------------------------------------------------------
    - Bu dosya React içermez. React kodunda her gün kullanılan 6 Javascript özelliğini gösterir. 

    ÇALIŞTIRMA(VS Code terminalinde, bu klasördeyken):
    node ornekler.js

    https://nodejs.org/en/download node.js download linki

    . Kurulum gerekmez. İsterseniz örnekleri tarayıcı konsoluna(F12) da yapıştırabilirsiniz.

*/

// ___________________________________ 1. let ve const ___________________________________
// const: değişmeyecek değer(C#'taki readonly gibi). React'te neredeyse her şey const'tur.
// let: değişebilecek değer. Artık "var" kullanılmıyor.

// Aşağıdaki ve diğer kodları, tarayıcıyı açıp F12 ile Console gelip "allow pasting" enter dedikten sonra yapıştırabilirsiniz.
const isim = "Ercan";
let yas = 49;
yas = 46; // let değiştirilebilir.
//isim = "Fatih" // HATA: const değiştirilemez.
console.log("1.const/let:",isim,yas);

// ______________________ 2.Arrow function(ok fonksiyonu) _____________________
// C#'taki lambda ifadesinin aynısı(a,b) => a + b
function toplaKlasik(a,b){
    return a + b
}

const topla = (a,b) => a + b // Tek satırsa {} ve return yazılmaz
console.log("2.Arrow function:",toplaKlasik(2,3), topla(2,3))

// ______________________ 3.Template Literal _____________________
// C#'aki $"Merhaba {isim} ile aynı. Ters tırnak (`) ve ${} kullanılır"
console.log(`3.Template literal: Merhaba ${isim}, yaşın ${yas}`);

// ______________________ 4. Destructuring(parçalama) _____________________
// Nesnenin alanlarını tek satırda değişkenlere çıkarmak. React'te props'u böyle alırız.
const ogrenci = {ad:"Ercan", bolum:"Bilgisayar"};
const {ad,bolum} = ogrenci; // ad = ogrenci.ad, bolum = ogrenci.bolum
console.log("4. Nesne destructuring:",ad,bolum)

// Dizilerde sıraya göre çalışır. useState tam olarak böyle kullanılır.
// const[sayi,setSayi] = useState(0);
const[ilk,ikinci] = ["kırmızı","mavi"];
console.log("4.Dizi destructuring:",ilk,ikinci);


// ______________________ 5.Spread operatörü(...) _____________________
// Bir dizinin/nesnenin içini yeni bir diziye/nesneye kopyalar.
// React'te veriyi DEĞİŞTİRMEK yerine KOPYASINI oluşturmak için kullanılır.
const eskiListe = [1,2,3];
const yeniListe = [...eskiListe,4]; // eskiListe değişmedi.
console.log("5. Dizi Spread:",eskiListe,yeniListe);

const guncelOgrenci = {...ogrenci, bolum:"Elektronik"}; // Tüm alanları kopyala, bolum'u değiştir.
console.log("5. Nesne Spread:",guncelOgrenci);

// ______________________ 6. map ve filter _____________________
// C#'taki LINQ: map ≈ Select, filter ≈ Where
// React'te listeleri ekrana basmak için map kullanılır.
const sayilar = [1, 2, 3, 4];
console.log("6. map(her sayının karesi):",sayilar.map(s => s * s));
console.log("6. filter(çift sayılar):",sayilar.filter(s => s % 2 === 0)); 

// ______________________ Bonus: Ternary ve && _____________________ 
// React'te "koşula göre göster" için kullanılır.
console.log("Bonus Ternary:",yas >= 18 ? "Reşit" : "Reşit değil");
console.log("Bonus &&:",yas >= 18 && "Ehliyet alabilir");


// ________________________ ALIŞTIRMA ÇÖZÜMÜ __________________________
// Görev: Aşağıdaki ürün dizisiyle
//   (1) fiyatı 20'den büyük ürünleri bul
//   (2) sadece ürün adlarından oluşan bir dizi oluştur
//   (3) spread ile yeni bir ürün ekle
const urunler = [
  { ad: "Kalem", fiyat: 10 },
  { ad: "Defter", fiyat: 40 },
  { ad: "Silgi", fiyat: 5 },
];

console.log("\nAlıştırma 1:",urunler.filter(u => u.fiyat > 20));
console.log("Alıştırma 2:",urunler.map(u => u.ad));
console.log("Alıştırma 3:",[...urunler, { ad: "Cetvel", fiyat: 15 }]);
