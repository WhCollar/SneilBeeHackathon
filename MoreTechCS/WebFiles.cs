namespace MoreTechCS;

public static class WebFiles
{
    private static IWebHostEnvironment _webHostEnvironment;

    private static string _rootPath;
    private static string _productsImagesPath = "ProductsImages";
    
    public static void Initialize(IWebHostEnvironment webHostEnvironment)
    {
        _webHostEnvironment = webHostEnvironment;

        _rootPath = _webHostEnvironment.WebRootPath;
        _productsImagesPath = Path.Combine(_rootPath, _productsImagesPath);
    }

    public static string GetRootDirectory() => _rootPath;
}