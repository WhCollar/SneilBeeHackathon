using Newtonsoft.Json;

namespace MoreTechCS.Extensions;

public static class HttpContextExtensions
{
    public static bool QueryContainsKey(this HttpContext httpContext, string key)
    {
        return httpContext.Request.Query.ContainsKey(key);
    }

    public static HttpContext AddItem(this HttpContext httpContext, string key, object value)
    {
        httpContext.Items.Add(key, value);
        return httpContext;
    }

    public static T GetItem<T>(this HttpContext httpContext, string key)
    {
        return (T) httpContext.Items[key]!;
    }
    
    public static T? GetItemFromJson<T>(this HttpContext httpContext, string key)
    {
        string? json = httpContext.Items[key] as string;
        return JsonConvert.DeserializeObject<T>(json!);
    }
    
    public static IFormFileCollection FormFiles(this HttpContext httpContext)
    {
        return httpContext.Request.Form.Files;
    }

    public static IFormFile? GetFile(this HttpContext httpContext, string name)
    {
        return httpContext.FormFiles()[name];
    }

    public static T? GetForm<T>(this HttpContext httpContext, string name) where T : class
    {
        string json = httpContext.Request.Form[name]!;
        return JsonConvert.DeserializeObject<T>(json);
    }

    public static T GetFromHeader<T>(this HttpContext httpContext, string key) where T : class
    {
        string json = httpContext.Request.Headers[key]!;
        return JsonConvert.DeserializeObject<T>(json)!;
    }
}