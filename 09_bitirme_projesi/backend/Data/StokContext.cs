using System;
using Microsoft.EntityFrameworkCore;
using StokApi.Models;

namespace StokApi.Data;

public class StokContext(DbContextOptions<StokContext> options) : DbContext(options)
{
    public DbSet<Urun> Urunler => Set<Urun>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Urun>().Property(u => u.Fiyat).HasPrecision(18,2);

        // Örnek veri: veritabanı ilk oluşturulurken tabloya eklenir.
        modelBuilder.Entity<Urun>().HasData(
        new Urun {Id = 1, Ad = "Kurşun Kalem", Kategori = "Kırtasiye", Fiyat = 12.5m, Stok = 120},
        new Urun {Id = 2, Ad = "A4 Kağıt", Kategori = "Kırtasiye", Fiyat = 185, Stok = 100},
        new Urun {Id = 3, Ad = "Kablosuz Mouse", Kategori = "Elektronik", Fiyat = 350, Stok = 15},
        new Urun {Id = 4, Ad = "Mekanik Klavye", Kategori = "Elektronik", Fiyat = 1450, Stok = 0},
        new Urun {Id = 5, Ad = "Ofis Sandalyesi", Kategori = "Mobilya", Fiyat = 2800, Stok = 2}
        );
    }
}
