/* 
 Yukleniyor - veri beklerken gösterilen dönen animasyon

 Birden fazla component'te "Yükleniyor..." gösteriyoruz. Aynı kodu her yere yazmak yerine
 küçük bir component yapıp her yerde <Yukleniyor /> diyoruz. (Proje 3: Component'e ayırma)

 RESİM KULLANMAK:
 Resim dosyası src/assets klasöründe. JS'te import edince Vite bize dosyanın adresini verir;
 bu adresi <img src={...}> içine yazarız. GIF veya PNG de aynı şekilde kullanılır.
*/

import yukleniyorResmi from "../assets/yukleniyor.svg";

function Yukleniyor(){
    return(
        <div className="yukleniyor">
            <img src={yukleniyorResmi} alt="" width="32" height="32"/>
            <span>Yükleniyor...</span>
        </div>
    );
}

export default Yukleniyor;