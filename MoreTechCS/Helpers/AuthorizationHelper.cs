using MoreTechCS.Core.Authentication;
using MoreTechCS.Extensions;

namespace MoreTechCS.Helpers;

public static class AuthorizationHelper
{
    public static bool HasPermission(HttpContext httpContext, params UserRole[] validRoles)
    {
        UserRole userRole = httpContext.GetItem<UserRole>(nameof(UserRole));
        return validRoles.Contains(userRole);
    }
}