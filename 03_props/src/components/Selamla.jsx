/**
 * Selamla — props almanın iki yolu ve varsayılan değer
 *
 * App.jsx şunu yazdığında:   <Selamla isim="Ali" yas={20} />
 * React, Selamla fonksiyonunu şu nesneyle çağırır:   Selamla({ isim: "Ali", yas: 20 })
 *
 * YOL 1 — Tek nesne olarak almak:
 *     function Selamla(props) {
 *       return <p>Merhaba {props.isim}, {props.yas} yaşındasın.</p>;
 *     }
 *
 * YOL 2 — Destructuring ile almak (STANDART YOL, aşağıda kullanılan):
 *     function Selamla({ isim, yas }) {
 *       return <p>Merhaba {isim}, {yas} yaşındasın.</p>;
 *     }
 *   Gelen nesneden isim ve yas alanlarını doğrudan değişkene çıkarır (00-modern-javascript, konu 4).
 *   Hem daha kısa hem de component'in hangi props'ları beklediği ilk satırda görünür.
 *
 * VARSAYILAN DEĞER
 *   { yas = 18 } → yas gönderilmezse 18 kabul edilir.
 *   C#'taki opsiyonel parametre ile aynı:  void Selamla(string isim, int yas = 18)
 */

function Selamla({isim, yas = 18}){
    return(
        <p>
            Merhaba <strong>{isim}</strong>, {yas} yaşındasın.
        </p>
    );
}

// YANLIŞ: props değiştirilemez. Aşağıdaki gibi bir satır yazılmaz:
// isim = "Veli";
// Değişmesi gereken bir değer varsa, o değer props değil state olmalıdır. (Proje 4)

export default Selamla;