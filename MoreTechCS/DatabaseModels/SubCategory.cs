namespace MoreTechCS.DatabaseModels;

public class SubCategory : DatabaseModelBase
{
    public Category Owner { get; set; }
    
    public string Name { get; set; }
}