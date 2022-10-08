using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Core.CatalogFilter;

public class PriceFilter : ICatalogFilter
{
    public IQueryable<Product> GetFilteredQuery(IQueryable<Product> queryable, QueryFiltering queryFiltering)
    {
        return queryable.Where(p => p.Price >= queryFiltering.MinimumPrice && p.Price <= queryFiltering.MaximumPrice);
    }
}