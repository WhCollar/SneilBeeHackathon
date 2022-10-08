namespace MoreTechCS.Core.CatalogFilter;

public class CatalogFilterCollection
{
    private readonly List<ICatalogFilter> _filters = new();
    
    public CatalogFilterCollection()
    {
        _filters.Add(new PriceFilter());
        _filters.Add(new SubCategoryFilter());
    }
    
    public IReadOnlyList<ICatalogFilter> Filters => _filters;
}