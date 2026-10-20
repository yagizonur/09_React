// Backend (ASP.NET Core Web API) ile konuşan axios çağrıları
// "/api/..." istekleri vite.config.js'deki proxy ile http://localhost:5000'e gider. 

// fetch'e göre axios'un biizm yerimize yaptıkları:
// - Gönderilen nesneyi JSON'a çevirir ve "Content-Type: application/json" başlığını ekler.
// - Gelen JSON'u kendisi okur veri doğrudan cevap.data içindedir.
// - 2xx dışındaki cevaplarda (400, 404, 500...) kendisi hata fırlatır, cevap.ok kontrolü gerekmez.

import axios from "axios";

// Ortak ayarlar bir kez yazılır, her istek bu adresin üzerine eklenir.
const api = axios.create({baseURL : "/api/urunler"});

// Interceptor: her cevap/hata bileşenlere ulaşmadan önce buradan geçer.
// Doğrulama hatasında .NET şöyle cevap verir: {errors: {Ad: ["ürün adı zorunludur"]}}
// Bu mesajları birleştirip bileşenlerin err.message ile okuyabileceği tek bir hataya çeviriyoruz.
api.interceptors.response.use(
    (cevap) => cevap,
    (hata) => {
        const errors = hata.response?.data?.errors;
        const mesajlar = errors ? Object.values(errors).flat().join(" ") : null;
        const durum = hata.response?.status ?? "bağlantı yok";
        return Promise.reject(new Error(mesajlar ?? `Sunucu hatası (${durum})`))
    }
);

export const urunleriGetir = () => api.get("").then((cevap) => cevap.data);
export const urunEkle = (urun) => api.post("",urun).then((cevap) => cevap.data);
export const urunGuncelle = (id, urun) => api.put(`/${id}`, urun).then((cevap) => cevap.data);
// Silmede sunucu 204 döner ve gövde boştur.
export  const urunSil = (id) => api.delete(`/${id}`).then(() => null);