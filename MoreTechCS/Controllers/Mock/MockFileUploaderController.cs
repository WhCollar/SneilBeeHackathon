using Microsoft.AspNetCore.Mvc;
using MoreTechCS.Core.FileUploader;

namespace MoreTechCS.Controllers.Mock;

[ApiController]
[Route("Auth/[controller]")]
public class MockFileUploaderController : ControllerBase
{
    private readonly IFileUploader _fileUploader;

    public MockFileUploaderController(IFileUploader fileUploader)
    {
        _fileUploader = fileUploader;
    }
    
    [HttpPost]
    public async Task<IActionResult> Post(IFormFile image)
    {
        await _fileUploader.UploadAsync(image);
        return Ok();
    }

    [HttpDelete]
    public IActionResult Delete([FromQuery] string name)
    {
        _fileUploader.Delete(name);
        return Ok();
    }
}