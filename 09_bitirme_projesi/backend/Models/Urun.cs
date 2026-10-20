using System.ComponentModel.DataAnnotations;

namespace StokApi.Models;

// Veritabanındaki Urunler tablosu. React'e JSON olarak gider: {id, ad, kategori, fiyat, stok}
public class Urun
{
    public int Id {get; set;}

    [Required(ErrorMessage = "Ürün adı zorunludur.")]
    [StringLength(100)]
    public string Ad {get; set;} = "";

    [Required(ErrorMessage = "Kategori zorunludur.")]
    [StringLength(50)]
    public string Kategori {get; set;} = "";

    [Range(0, 1_000_000, ErrorMessage = "Fiyat 0 veya daha büyük olmalıdır. Ve en fazla 1.000.000 olabilir.")]
    public decimal Fiyat { get; set;}

    [Range(0, int.MaxValue, ErrorMessage = "Stok 0 veya daha büyük olmalıdır.")]
    public int Stok {get; set;}
}