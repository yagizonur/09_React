/**
 * ALIŞTIRMA ÇÖZÜMÜ: Kategoriye göre ürün filtresi
 * Görev: Ürünleri kart olarak listele, kategori butonlarıyla filtrele, sonuç yoksa mesaj göster.
 *
 * ÇÖZÜMÜN MANTIĞI
 *   1) State'te tek bilgi: hangi kategori seçili? ("Tümü" ile başlar)
 *   2) Gösterilecek ürünler her çizimde bu seçime göre HESAPLANIR (state değil).
 *   3) Kategori butonları elle tek tek yazılmaz; kategoriler dizisinden map ile üretilir.
 *   4) Seçili buton, koşullu className ile vurgulanır.
 *   5) Liste boşsa ternary ile mesaj, doluysa kartlar gösterilir.
 *
 * Bu çözümde projenin bütün konuları var: map, key, ternary, koşullu className, filter.
 */

import { useState } from "react";

const urunler = [
    { id: 1, ad: "Kalem", fiyat: 100, kategori: "Kırtasiye" },
    { id: 2, ad: "Defter", fiyat: 40, kategori: "Kırtasiye" },
    { id: 3, ad: "Kulaklık", fiyat: 450, kategori: "Elektronik" },
    { id: 4, ad: "Fare", fiyat: 560, kategori: "Elektronik" },
];

// "Giyim" kategorisinde ürün yok -> "ürün bulunamadı" mesajını görmek için eklendi.
const kategoriler = ["Tümü", "Kırtasiye", "Elektronik", "Giyim"];

function UrunFiltresi() {
    const [secili, setSecili] = useState("Tümü");

    // Hesaplanan değer: seçili kategoriye göre filtrelenmiş liste. Seçili yoksa tümünü göster
    const gosterilecek = secili === "Tümü" ? urunler : urunler.filter(u => u.kategori === secili);

    return (
        <div>
            {/* Butonlar da bir diziden map ile üretiliyor
                Kategori adları benzersiz olduğu için key olarak adın kendisi kullanıldı.
            */}
            {kategoriler.map(k => (
                <button
                    key={k}
                    onClick={() => setSecili(k)}
                    // Koşulu className: secili butona "secili" sınıfı(index.css'te vurgulu görünüm)
                    className={k === secili ? "secili" : ""}
                >
                    {k}
                </button>
            ))}

            {/* Liste boşsa mesaj, değilse kartlar(ternary) */}
            {gosterilecek.length === 0 ? (
                <p className="soluk">Ürün bulunamadı.</p>
            ) : (
                <div className="izgara" style={{ marginTop: 12 }}>
                    {gosterilecek.map(u => (
                        <div key={u.id} className="kart">
                            <h3>{u.ad}</h3>
                            <p style={{ margin: "0 0 8px" }}>{u.fiyat} ₺</p>
                            <span className="rozet">{u.kategori}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UrunFiltresi;