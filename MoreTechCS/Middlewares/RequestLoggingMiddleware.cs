namespace MoreTechCS.Middlewares;

public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;
    
    public RequestLoggingMiddleware(RequestDelegate next, ILoggerFactory loggerFactory)
    {
        _next = next;
        _logger = loggerFactory.CreateLogger<RequestLoggingMiddleware>();
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _logger.LogInformation(
            "Request {method} {url} => {statusCode}",
            context.Request?.Method, 
            context.Request?.Path.Value,
            context.Response?.StatusCode);
        
        await _next.Invoke(context);
    }
}