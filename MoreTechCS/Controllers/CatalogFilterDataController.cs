using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.CatalogFilter;
using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Controllers;

[ApiController]
[Route("Auth/[controller]")]
public class CatalogFilterDataController : ControllerBase
{
    private readonly DatabaseContext _databaseContext;

    public CatalogFilterDataController(DatabaseContext databaseContext)
    {
        _databaseContext = databaseContext;
    }
    
    [HttpGet]
    [ResponseCache(Duration = 120)]
    public async Task<IActionResult> Get()
    {
        CatalogFilterData catalogFilterData = new();

        IQueryable<SubCategory> subCategories = _databaseContext.SubCategories.AsNoTracking();
        IQueryable<Product> products = _databaseContext.Products;
        
        catalogFilterData.SubCategories = subCategories;
        catalogFilterData.ProductsBySubCategories = new();

        foreach (SubCategory subCategory in subCategories)
        {
            IQueryable<Product> productsBySub = _databaseContext.Products.Where(p => p.SubCategory == subCategory);
            catalogFilterData.ProductsBySubCategories.Add(new (subCategory, productsBySub));
        }
        
        catalogFilterData.MinimumPrice = await products.MinAsync(p => p.Price);
        catalogFilterData.MaximumPrice = await products.MaxAsync(p => p.Price);

        return Ok(catalogFilterData);
    }
}