namespace MoreTechCS.Core.FileUploader;

public class NewsFeedFileUploader : IFileUploader
{
    private const string SaveFolder = "NewsFeedFiles";
    
    private void CheckFile(IFormFile? file)
    {
        if (file != null && file.Length != 0)
            return;

        throw new IOException("Файл пуст или не выбран.");
    }

    public async Task<string> UploadAsync(IFormFile file)
    {
        CheckFile(file);

        string extension = Path.GetExtension(file.FileName);
        string randomName = Path.GetRandomFileName();

        string fileName = Path.ChangeExtension(randomName, extension);
        string directoryPath = Path.Combine(WebFiles.GetRootDirectory(), SaveFolder);

        if (Directory.Exists(directoryPath) == false)
            Directory.CreateDirectory(directoryPath);
        
        string savePath = Path.Combine(directoryPath, fileName);

        await using FileStream fileStream = new FileStream(savePath, FileMode.Create);
        await file.CopyToAsync(fileStream);

        return Path.Combine(SaveFolder, fileName);
    }

    public void Delete(string filePath)
    {
        if (string.IsNullOrEmpty(filePath) == true)
            throw new NullReferenceException();
        
        if(File.Exists(filePath) == true)
            File.Delete(filePath);
    }
}