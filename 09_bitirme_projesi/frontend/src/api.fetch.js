// ESKİ SÜRÜM (fetch ile). Proje artık api.js'deki axios sürümünü kullanıyor;
// bu dosya hiçbir yerden import edilmiyor, karşılaştırma için duruyor.
// Geri dönmek için içeriğini api.js'e kopyalaman yeterli.
//
// Backend (ASP.NET Core Web API) ile konuşan fetch çağrıları.
// "/api/..." istekleri vite.config.js'deki proxy ile http://localhost:5000'e gider.
//
// 08. projeden farkı: veri GÖNDERMEK için method, headers ve body kullanılır.
//   method  → "POST", "PUT", "DELETE" (yazılmazsa GET)
//   headers → sunucuya "gövdede JSON var" deriz
//   body    → JSON.stringify(nesne): nesne metne çevrilerek gönderilir

const ADRES = "/api/urunler";

async function istek(adres, method = "GET", veri) {
  const cevap = await fetch(adres, {
    method,
    headers: { "Content-Type": "application/json" },
    body: veri ? JSON.stringify(veri) : undefined,
  });

  if (!cevap.ok) {
    // Doğrulama hatasında .NET şöyle cevap verir: { errors: { Ad: ["Ürün adı zorunludur."] } }
    const hata = await cevap.json().catch(() => null);
    const mesajlar = hata?.errors ? Object.values(hata.errors).flat().join(" ") : null;
    throw new Error(mesajlar ?? `Sunucu hatası (${cevap.status})`);
  }

  // Silmede sunucu 204 döner ve gövde boştur
  return cevap.status === 204 ? null : cevap.json();
}

export const urunleriGetir = () => istek(ADRES);
export const urunEkle = (urun) => istek(ADRES, "POST", urun);
export const urunGuncelle = (id, urun) => istek(`${ADRES}/${id}`, "PUT", urun);
export const urunSil = (id) => istek(`${ADRES}/${id}`, "DELETE");
