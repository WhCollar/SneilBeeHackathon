namespace MoreTechCS.DatabaseModels;

public class OrderItem : DatabaseModelBase
{
    public Order OwnerOrder { get; set; }
    
    public int Quantity { get; set; }
    
    public virtual Product Product { get; set; }
}