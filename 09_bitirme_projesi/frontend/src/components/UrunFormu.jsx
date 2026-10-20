/**
 UrunFormu - hem yeni ürün eklemek hem de var olanı düzenlemek için tek form 

 Tek bir state nesnesi bütün alanları tutar. Her input'un name'i state'teki alanın adıyla aynı;
 böylece dört input için tek bir handleChange yeterli: [e.target.name]: e.target.value

 düzenlenen prop'u doluysa form o ürünün bilgileriyle başlar, boşsa boş başlar.
 */

import { useState } from "react";

const BOS_FORM = {ad: "", kategori: "", fiyat: "", stok: ""};

function UrunFormu ({duzenlenen, onKaydet, onVazgec}){
    const[form, setForm] = useState(duzenlenen ?? BOS_FORM);
    const[hata, setHata] = useState(null);
    const[kaydediliyor, setKaydediliyor] = useState(false);

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault(); // Sayfanın değişiklikte yenilenmesini engeller.
        setKaydediliyor(true);

        try{
            // Input'lar her zaman metin verir; sayı alanlarını Number ile çeviriyoruz.
            await onKaydet({...form, fiyat: Number(form.fiyat), stok: Number(form.stok)});
            setForm(BOS_FORM);
            setHata(null);
        }catch(err) {
            setHata(err.message); // Sunucunun doğrulama mesajı (örn: "Ürün adı zorunludur.")
        }finally{
            setKaydediliyor(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="ad" value={form.ad} onChange={handleChange} required placeholder="Ürün adı" />
            <input name="kategori" value={form.kategori} onChange={handleChange} required placeholder="Kategori" />
            <input name="fiyat" type="number" step="0.01" value={form.fiyat} onChange={handleChange} required placeholder="Fiyat" />
            <input name="stok" type="number" value={form.stok} onChange={handleChange} required placeholder="Stok" />

            <button type="submit" disabled={kaydediliyor}>
                {kaydediliyor ? "Kaydediliyor..." : duzenlenen ? "Güncelle" : "Ekle"}
            </button>
            {duzenlenen && <button type="button" onClick={onVazgec}>Vazgeç</button>}

            {hata && <p className="hata">{hata}</p>}
        </form>
    );
}

export default UrunFormu;