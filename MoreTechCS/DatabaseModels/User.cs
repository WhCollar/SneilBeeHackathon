namespace MoreTechCS.DatabaseModels;

public class User : DatabaseModelBase
{
    public string UniversallyUniqueIdentifier { get; set; }
    
    public string Role { get; set; }
    
    public List<NewsPost> LikePosts { get; set; }
}