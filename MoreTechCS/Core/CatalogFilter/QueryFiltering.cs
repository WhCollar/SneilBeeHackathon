namespace MoreTechCS.Core.CatalogFilter;

public class QueryFiltering
{
    public decimal MinimumPrice { get; set; }
    
    public decimal MaximumPrice { get; set; }

    public int SubCategoryId { get; set; }

    public QueryFiltering()
    {
        SubCategoryId = -1;
    }
}