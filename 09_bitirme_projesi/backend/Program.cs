using Microsoft.EntityFrameworkCore;
using StokApi.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<StokContext>(o => 
    o.UseSqlServer(builder.Configuration.GetConnectionString("StokDB")));

var app = builder.Build();

// Veritabanı yoksa tabloları ve örnek veriyi oluşturur(migration'a gerek kalmaz)
using(var scope = app.Services.CreateScope())
{
    scope.ServiceProvider.GetRequiredService<StokContext>().Database.EnsureCreated();
}

app.MapControllers();
app.Run();

