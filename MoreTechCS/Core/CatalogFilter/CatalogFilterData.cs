using MoreTechCS.DatabaseModels;

namespace MoreTechCS.Core.CatalogFilter;

public class CatalogFilterData
{
    public IQueryable<SubCategory> SubCategories { get; set; }
    
    public List<FilteredProductsBySubCategory> ProductsBySubCategories { get; set; }

    public decimal MinimumPrice { get; set; }
    
    public decimal MaximumPrice { get; set; }
}