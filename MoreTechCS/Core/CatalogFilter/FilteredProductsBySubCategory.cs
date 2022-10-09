using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Core.CatalogFilter;

public class FilteredProductsBySubCategory
{
    public SubCategory Owner { get; set; }
    
    public IQueryable<Product> Products { get; set; }

    public FilteredProductsBySubCategory(SubCategory owner, IQueryable<Product> products)
    {
        Owner = owner;
        Products = products;
    }
}