using Microsoft.EntityFrameworkCore;
using MoreTechCS.DatabaseModels;

namespace MoreTechCS;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
        
    }
    
    public DbSet<User> Users { get; private set; }
    
    public DbSet<Product> Products { get; private set; }
    
    public DbSet<Cart> Carts { get; private set; }
    
    public DbSet<CartItem> CartItems { get; private set; }
    
    public DbSet<Category> Categories { get; private set; }
    
    public DbSet<SubCategory> SubCategories { get; private set; }
    
    public DbSet<Order> Orders { get; private set; }
    
    public DbSet<OrderItem> OrderItems { get; private set; }

    public DbSet<NewsPost> NewsPosts { get; private set; }
}