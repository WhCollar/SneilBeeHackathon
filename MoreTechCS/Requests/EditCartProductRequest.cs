namespace MoreTechCS.Requests;

public class EditCartProductRequest
{
    public string UUId { get; set; }
    
    public int ProductId { get; set; }
    
    public int ProductCount { get; set; }
}