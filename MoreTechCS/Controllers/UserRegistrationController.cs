using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;

namespace MoreTechCS.Controllers;

[ApiController]
[Route("[controller]")]
public class UserRegistrationController : ControllerBase
{
    private readonly DatabaseContext _databaseContext;
    
    [HttpPost]
    public async Task<IActionResult> Register()
    {
        User userFromHeader = HttpContext.GetFromHeader<User>("User-Data");
        
        if (await _databaseContext.Users.ContainsAsync(userFromHeader) == true)
            throw new InvalidOperationException("Trying to register a user twice");

        Console.WriteLine(userFromHeader.Role);
        
        await _databaseContext.Users.AddAsync(userFromHeader);
        await _databaseContext.SaveChangesAsync();

        return Ok(userFromHeader);
    }
}