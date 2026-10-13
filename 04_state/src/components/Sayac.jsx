/**
 * DOĞRU ÖRNEK: useState ile sayaç
 *
 * ═══════════════════════════════════════════════════════════════════
 *  useState NASIL ÇALIŞIR? — ADIM ADIM
 * ═══════════════════════════════════════════════════════════════════
 *
 *  ADIM 1 — İLK ÇİZİM
 *    React, Sayac fonksiyonunu çalıştırır.
 *    useState(0) satırına gelince React der ki:
 *      "Bu component için henüz bir değer saklamadım. Başlangıç değeri 0, onu saklıyorum."
 *    ve [0, setSayi] döndürür. Ekranda 0 görünür.
 *
 *  ADIM 2 — KULLANICI BUTONA BASAR
 *    setSayi(1) çağrılır. Bu satır "sayi" değişkenini DEĞİŞTİRMEZ!
 *    Sadece React'e bir not bırakır: "Bu component'in değeri artık 1. Onu yeniden çiz."
 *
 *  ADIM 3 — YENİDEN ÇİZİM (re-render)
 *    React, Sayac fonksiyonunu BAŞTAN çalıştırır.
 *    useState(0) satırına tekrar gelinir. Ama React bu sefer 0'ı YOK SAYAR,
 *    çünkü bu component için sakladığı bir değer var: 1. [1, setSayi] döndürür.
 *    → Başlangıç değeri SADECE ilk çizimde kullanılır.
 *
 *  ADIM 4 — EKRAN GÜNCELLENİR
 *    Yeni JSX'te {sayi} artık 1. React eski ve yeni görüntüyü karşılaştırır,
 *    sayfada sadece değişen yazıyı günceller.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  NEDEN NORMAL DEĞİŞKEN İŞE YARAMIYOR?
 * ═══════════════════════════════════════════════════════════════════
 *  "let sayi = 0" fonksiyonun İÇİNDE yaşar. Fonksiyon her çalıştığında sıfırdan oluşur.
 *  useState'in değeri ise fonksiyonun DIŞINDA, React'in hafızasında durur.
 *  Fonksiyon kaç kez çalışırsa çalışsın, değer kaybolmaz.
 *
 *  C# ile düşün: component fonksiyonu her çizimde baştan çalışan bir METOT gibidir.
 *  Metodun içindeki yerel değişkenler her çağrıda sıfırlanır.
 *  useState ise React'in bu component için sakladığı bir FIELD (alan) gibidir.
 * 
 */
 
import { useState } from "react"; // useState, React'in hazır bir fonksiyonu(hook)

function Sayac() {
    const[sayi, setSayi] = useState(0);
//        ⬆️     ⬆️               ⬆️  
//       mevcut  değiştirme       başlangıç değeri
//       değer   fonksiyonu       (sadece ilk çizimde kullanılır)

// useState iki elemanlı bir dizi döndürür: [değer, değiştirici].
// Dizi destructuring ile bunlara istediğimiz ismi veriyoruz.
// Gelenek: [x, setX] - örn: [isim, setIsim], [acik, setAcik]

// Bu satır her çizimde çalışır, Konsolda fonksiyonun kaç kez çalıştığını görürsün
console.log("Sayaç render edildi. sayi=",sayi);

return(
    <div>
        <p style={{fontSize: 28, fontWeight: 700, margin: "0 0 8px"}}>{sayi}</p>

        <button onClick={() => setSayi(sayi + 1)}>Artır</button>
        <button onClick={() => setSayi(sayi - 1)}>Azalt</button>
        <button onClick={() => setSayi(0)}>Sıfırla</button>
    </div>
);
}

export default Sayac;
