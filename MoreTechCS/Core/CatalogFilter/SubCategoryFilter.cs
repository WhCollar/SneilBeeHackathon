using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Core.CatalogFilter;

public class SubCategoryFilter : ICatalogFilter
{
    public IQueryable<Product> GetFilteredQuery(IQueryable<Product> queryable, QueryFiltering queryFiltering)
    {
        return queryFiltering.SubCategoryId < 0 ? queryable : queryable.Where(p => p.SubCategory.Id == queryFiltering.SubCategoryId);
    }
}