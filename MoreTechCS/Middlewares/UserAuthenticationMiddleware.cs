using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.Authentication;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;

namespace MoreTechCS.Middlewares;

public class UserAuthenticationMiddleware 
{
    private readonly RequestDelegate _next;

    public UserAuthenticationMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context, DatabaseContext databaseContext)
    {
        bool hasDataHeader = context.Request.Headers.ContainsKey("User-Data");
        
        Console.WriteLine(hasDataHeader);

        if (hasDataHeader == true)
        {
            User user = context.GetFromHeader<User>("User-Data");
            context.AddItem("UserRole", Enum.Parse<UserRole>(user.Role.FirstCharToUpper()));
            context.AddItem("User", user);
            await AddUserData(user, databaseContext);
        }

        await _next.Invoke(context);
    }
    
    private async Task AddUserData(User user, DatabaseContext databaseContext)
    {
        User? userFromDatabase = await databaseContext.Users.FirstOrDefaultAsync(u =>
            u.UniversallyUniqueIdentifier == user.UniversallyUniqueIdentifier);

        if (userFromDatabase == null)
            await databaseContext.AddAsync(user);
        else
            userFromDatabase.Role = user.Role;
        
        await databaseContext.SaveChangesAsync();
    }
}