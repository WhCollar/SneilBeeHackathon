using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.CatalogFilter;
using MoreTechCS.Core.Pagination;
using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Controllers.Mock;

[ApiController]
[Route("[controller]")]
public class MockCatalogController : ControllerBase
{
    private readonly DatabaseContext _databaseContext;
    private readonly CatalogFilterCollection _filterCollection;
    
    public MockCatalogController(DatabaseContext databaseContext, CatalogFilterCollection filterCollection)
    {
        _databaseContext = databaseContext;
        _filterCollection = filterCollection;
    }

    [HttpPost] 
    public IActionResult Filtered([FromQuery] PaginationQuery paginationQuery, [FromBody] QueryFiltering queryFiltering)
    {
        IQueryable<Product> source = _databaseContext.Products.Include(p => p.SubCategory).AsNoTracking();

        foreach (ICatalogFilter catalogFilter in _filterCollection.Filters)
        {
            source = catalogFilter.GetFilteredQuery(source, queryFiltering);
        }

        int pageNumber = paginationQuery?.PageNumber ?? 1;
        int pageSize = paginationQuery?.PageSize ?? 20;
        
        var paginatedList = new PaginatedList<Product>(source, pageNumber, pageSize);

        return Ok(paginatedList);
    }
}