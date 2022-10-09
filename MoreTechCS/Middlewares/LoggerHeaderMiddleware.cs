namespace MoreTechCS.Middlewares;

public class LoggerHeaderMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;
    
    public LoggerHeaderMiddleware(RequestDelegate next, ILoggerFactory loggerFactory)
    {
        _next = next;
        _logger = loggerFactory.CreateLogger<LoggerHeaderMiddleware>();
    }

    public async Task InvokeAsync(HttpContext context)
    {
        foreach (var header in context.Response.Headers)
        {
            Console.WriteLine($"{header.Key} | {header.Value}");
        }
        
        await _next.Invoke(context);
    }
}