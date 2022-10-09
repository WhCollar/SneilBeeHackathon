using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace MoreTechCS.Controllers.Mock;

[ApiController]
[Route("Auth/[controller]")]
public class MockEcho : ControllerBase
{
    [HttpPost]
    public async Task Post()
    {
        var bodyString = "";
        var httpRequest = HttpContext.Request;

        using (StreamReader reader = new StreamReader(httpRequest.Body, Encoding.UTF8))
        {
            bodyString = await reader.ReadToEndAsync();
        }

        Response.Headers.Add("Content-type", "application/json");
        await Response.Body.WriteAsync(Encoding.ASCII.GetBytes(bodyString), 0, bodyString.Length);
    }
}