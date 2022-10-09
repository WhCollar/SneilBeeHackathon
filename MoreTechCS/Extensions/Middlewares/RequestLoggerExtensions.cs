using MoreTechCS.Middlewares;

namespace MoreTechCS.Extensions.Middlewares;

public static class RequestLoggerExtensions
{
    public static IApplicationBuilder UseRequestLogging(this  IApplicationBuilder applicationBuilder)
    {
        return applicationBuilder.UseMiddleware<RequestLoggingMiddleware>();
    }
}