/**
 * Kutu — "children" prop'u
 *
 * Normal props'lar attribute olarak gönderilir:   <Kutu baslik="Duyuru" />
 * children ise açılış ve kapanış etiketinin ARASINA yazılan içeriktir:
 *
 *   <Kutu baslik="Duyuru">
 *     <p>Yarın ders yok.</p>        ← bu kısım "children" olarak gelir
 *   </Kutu>
 *
 * React bunu otomatik olarak children adıyla gönderir; ayrıca bir şey yazmana gerek yok.
 *
 * NE İŞE YARAR?
 *   Kutu içeriğin ne olduğunu bilmek zorunda değil. Sadece çerçeveyi ve başlığı çizer,
 *   içine ne verilirse onu koyar. Bu sayede aynı Kutu'yu duyuru, form, resim, buton...
 *   ne olursa olsun sarmak için kullanabilirsin.
 *
 *   Kart, modal (açılır pencere), panel, sayfa düzeni gibi "kap" görevi gören
 *   component'ler hep böyle yazılır.
 *
 * C# BENZETMESİ: Razor'daki layout sayfasının @RenderBody() satırı gibi düşün.
 */
function Kutu({baslik, children}){
    return(
        <div className="kart" style={{marginBottom: 10}}>
            <h3>{baslik}</h3>
            {/* İçeriğin yerleşeceği yer */}
            {children}
        </div>
    );
}

export default Kutu;