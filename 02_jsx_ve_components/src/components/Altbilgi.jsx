/* 
Altbilgi - sayfanın alt kısmı

Baslik.jsx ile aynı yapıda: fonksiyon -> JSX -> export

JSX tek satıra sığıyorsa () parantezine gerek yoktur:
 return <footer>...</footer>;
Birden fazla satır olacaksa ( ) içine alınır ki JavaScript "return"den sonra satırın bittiğini sanmasın.
*/
function AltBilgi(){
    return <footer className="sonraki">Sonraki proje: 02-props</footer>
}

export default AltBilgi;