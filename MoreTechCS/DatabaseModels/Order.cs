namespace MoreTechCS.DatabaseModels;

public class Order : DatabaseModelBase
{
    public User Owner { get; set; }
}