/* 
 Görev: Ad, meslek ve yaşı değişkenlerden gelen bir kartvizit component'i yazmak.

ÇÖZÜMÜN MANTIĞI:
 1) Bilgileri fonksiyonun içinde normal değişken olarak tanımla.
 2) JSX içide { } ile ekrana yaz
 3) Görünüm için className (ortak CSS'teki "kart" sınıfı) ve style nesnesi kullandık.

 BİR SONRAKİ ADIM(Proje 3)
  Bu kartvizit her zaman "Onur Yağız"'ı gösteriyor. Farklı kişiler için kullanmak istersek bilgileri dışarıdan göndermemiz gerekir.
  Bunun yolu PROPS'tur.

*/

function Kartvizit(){
    const ad = "Onur Yağız";
    const meslek = "Yazılım Geliştirici";
    const yas = 32;

    return(
        <div className="kart" style={{maxWidth:320}}>
         {/* { } içinde değişkenler */}
        <h3>{ad}</h3>
        <p className="soluk" style={{margin: 0}}>{meslek}</p>
        <p style={{margin: 0}}>{yas} yaşında</p>
        </div>
    );
}

export default Kartvizit;