namespace MoreTechCS.DatabaseModels;

public class NewsPost : DatabaseModelBase
{
    public DateTime PostDate { get; set; }
    
    public string ImagePath { get; set; }

    public string Content { get; set; }
    
    public int LikesCount { get; set; }
}