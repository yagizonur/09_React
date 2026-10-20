/* 
 ÜrünListesi - ürünleri tablo olarak gösterir. 

 Kendi state'i yok: listeyi ve olay fonksiyonlarını App'ten props ile alır. 
 Düzenle / Sil'e basılınca App'e haber verir(onDuzenle, onSil)
*/

function UrunListesi({urunler, onDuzenle, onSil}){
    if(urunler.length === 0) return <p className="soluk">Ürün bulunamadı.</p>

    return(
        <table>
            <thead>
                <tr>
                    <th>Ürün</th>
                    <th>Kategori</th>
                    <th>Fiyat</th>
                    <th>Stok</th>
                </tr>
            </thead>
            <tbody>
                {urunler.map((u) => (
                <tr key={u.id}>
                    <td>{u.ad}</td>
                    <td><span className="rozet">{u.kategori}</span></td>
                    <td>{u.fiyat.toLocaleString("tr-TR")} ₺</td>
                    <td>
                        {/* Koşullu className: stok bittiyse kırmızı, 5 ve altındaysa normal, fazlaysa yeşil*/}
                        <span className={u.stok === 0 ? "rozet kirmizi" : u.stok <= 5 ? "rozet" : "rozet yesil"}>
                            {u.stok === 0 ? "Tükendi" : `${u.stok} adet`}
                        </span>
                    </td>
                    <td>
                        <button onClick={() => onDuzenle(u)}>Düzenle</button>
                        <button onClick={() => onSil(u)}>Sil</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}
export default UrunListesi;