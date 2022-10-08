namespace MoreTechCS.DatabaseModels;

public class CartItem : DatabaseModelBase
{
    public Cart OwnerCart { get; set; }
    
    public int Quantity { get; set; }

    public virtual Product Product { get; set; }
}