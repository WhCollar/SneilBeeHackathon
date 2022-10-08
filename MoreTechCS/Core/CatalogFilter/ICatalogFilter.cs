using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Core.CatalogFilter;

public interface ICatalogFilter
{
    public IQueryable<Product> GetFilteredQuery(IQueryable<Product> queryable, QueryFiltering queryFiltering);
}