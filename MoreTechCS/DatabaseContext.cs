using MarketplaceDataLibrary;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.DatabaseModels;

namespace MoreTechCS;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
        
    }
    
    public DbSet<User> Users { get; private set; }
}