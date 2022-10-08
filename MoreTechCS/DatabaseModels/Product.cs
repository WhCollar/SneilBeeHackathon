using System.ComponentModel.DataAnnotations;

namespace MoreTechCS.DatabaseModels;

public class Product : DatabaseModelBase
{
    [Required] public string Name { get; set; }
    
    [Required] public SubCategory SubCategory { get; set; }
    
    [Required] public string Description { get; set; }

    [Required] public decimal Price { get; set; }

    [Required] public int Count { get; set; }
    
    [Required] public string ImagePath { get; set; }
    
    public bool IsActive { get; set; }
}