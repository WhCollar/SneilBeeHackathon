using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.Authentication;
using MoreTechCS.Core.FileUploader;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;
using MoreTechCS.Helpers;

namespace MoreTechCS.Controllers.NewsFeed;

[ApiController]
[Route("Auth/[controller]")]
public class NewsFeedController : ControllerBase
{
    private readonly IFileUploader _fileUploader;
    private readonly DatabaseContext _databaseContext;

    public NewsFeedController(DatabaseContext databaseContext, NewsFeedFileUploader fileUploader)
    {
        _databaseContext = databaseContext;
        _fileUploader = fileUploader;
    }

    [HttpGet]
    public IActionResult Get()
    {
        IQueryable<NewsPost> newsPosts = _databaseContext.NewsPosts.AsNoTracking();
        return Ok(newsPosts);
    }
    
    [HttpPost]
    public async Task<IActionResult> Upload()
    {
        if (AuthorizationHelper.HasPermission(HttpContext, UserRole.Redactor, UserRole.Administrator) == false)
            return Unauthorized();
        
        NewsPost newNewsPost = new();
        
        IFormFile image = HttpContext.GetFile("image")!;
        string postContent = HttpContext.Request.Form["content"]!;

        newNewsPost.PostDate = DateTime.UtcNow.AddHours(3);
        newNewsPost.ImagePath = await _fileUploader.UploadAsync(image);
        newNewsPost.Content = postContent;

        await _databaseContext.AddAsync(newNewsPost);
        await _databaseContext.SaveChangesAsync();
        
        return Ok(newNewsPost);
    }
    
    //TODO Add exception description 
    [HttpPut("Likes")]
    public async Task<IActionResult> EditLikes([FromQuery] int postId, int likesCount)
    {
        NewsPost newsPost = await _databaseContext.NewsPosts.FirstOrDefaultAsync(n => n.Id == postId) ??
                            throw new NullReferenceException();

        newsPost.LikesCount = likesCount;
        _databaseContext.Update(newsPost);
        await _databaseContext.SaveChangesAsync();

        return Ok(newsPost);
    }

    //TODO Add exception description 
    [HttpPut("Post")]
    public async Task<IActionResult> EditPost([FromBody] NewsPost newsPost)
    {
        if (AuthorizationHelper.HasPermission(HttpContext, UserRole.Redactor, UserRole.Administrator) == false)
            return Unauthorized();
        
        NewsPost dbNewsPost = await _databaseContext.NewsPosts.FirstOrDefaultAsync(n => n.Id == newsPost.Id) ??
                              throw new NullReferenceException();
        
        _databaseContext.NewsPosts.Update(newsPost);
        await _databaseContext.SaveChangesAsync();

        return Ok(newsPost);
    }

    //TODO Add exception description 
    [HttpDelete]
    public async Task<IActionResult> DeletePost([FromQuery] int postId)
    {
        if (AuthorizationHelper.HasPermission(HttpContext, UserRole.Redactor, UserRole.Administrator) == false)
            return Unauthorized();
        
        NewsPost? newsPost = await _databaseContext.NewsPosts.FirstOrDefaultAsync(n => n.Id == postId) ??
                             throw new NullReferenceException("");

        _databaseContext.Remove(newsPost);
        await _databaseContext.SaveChangesAsync();

        return Ok();
    }
}