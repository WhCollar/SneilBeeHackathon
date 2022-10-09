using MoreTechCS.Middlewares;

namespace MoreTechCS.Extensions.Middlewares;

public static class UserAuthenticationExtensions
{
    public static IApplicationBuilder UseUserAuthentication(this  IApplicationBuilder applicationBuilder)
    {
        return applicationBuilder.UseMiddleware<UserAuthenticationMiddleware>();
    }
}