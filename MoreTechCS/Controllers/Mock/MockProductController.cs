using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.FileUploader;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;

namespace MoreTechCS.Controllers.Mock;

[ApiController]
[Route("[controller]")]
public class MockProductController : ControllerBase
{
    private readonly IFileUploader _fileUploader;
    private readonly DatabaseContext _databaseContext;

    public MockProductController(IFileUploader fileUploader, DatabaseContext databaseContext)
    {
        _fileUploader = fileUploader;
        _databaseContext = databaseContext;
    }
    
    [HttpGet]
    public IActionResult Get(Product product)
    {
        return Ok();
    }

    //TODO Add exception description
    [HttpPost]
    public async Task<IActionResult> Post(IFormFile productImage)
    {
        Product product = HttpContext.GetForm<Product>("productJson") ??
                          throw new NullReferenceException("json product is not passed to form data");
        string subCategoryName = HttpContext.Request.Form["subCategoryName"]!; 
        
        product.ImagePath = await _fileUploader.UploadAsync(productImage);
        SubCategory subCategory = await _databaseContext.SubCategories.FirstOrDefaultAsync(s => s.Name == subCategoryName) ?? 
                                  throw new NullReferenceException("");

        product.SubCategory = subCategory;
        
        await _databaseContext.AddAsync(product);
        await _databaseContext.SaveChangesAsync();

        return Ok();
    }
}