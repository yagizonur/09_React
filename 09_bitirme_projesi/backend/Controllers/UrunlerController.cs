using System.Drawing;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StokApi.Data;
using StokApi.Models;

namespace StokApi.Controllers;

    // [ApiController]: Gelen modeli otomatik doğrular. [Required], [Range] kurallarına uymayan istek 
    // action'a hiç girmeden 400 Bad Request ile geri döner.
    [ApiController]
    [Route("api/urunler")]
    public class UrunlerController(StokContext db) : ControllerBase
    {
        // GET api/urunler
        [HttpGet]
        public async Task<List<Urun>> Listele()=> 
        await db.Urunler.OrderByDescending(u => u.Id).ToListAsync();

        // POST api/urunler
        [HttpPost]
        public async Task<ActionResult<Urun>> Ekle(Urun urun)
        {
            urun.Id = 0; // Id'yi veritabanı verir.
            db.Urunler.Add(urun);
            await db.SaveChangesAsync();
            return Created($"api/urunler/{urun.Id}", urun);
        }

        // PUT api/urunler/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Urun>> Guncelle(int id, Urun yeni)
        {
            var urun = await db.Urunler.FindAsync(id);
            if(urun is null) return NotFound();

            urun.Ad = yeni.Ad;
            urun.Kategori = yeni.Kategori;
            urun.Fiyat = yeni.Fiyat;
            urun.Stok = yeni.Stok;
            await db.SaveChangesAsync();
            return urun;
        }

        // DELETE api/urunler/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Sil(int id)
        {
            var urun = await db.Urunler.FindAsync(id);
            if(urun is null) return NotFound();

            db.Urunler.Remove(urun);
            await db.SaveChangesAsync();
            return NoContent();
        }
    }

