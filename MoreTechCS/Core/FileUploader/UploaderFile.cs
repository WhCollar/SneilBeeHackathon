namespace MoreTechCS.Core.FileUploader;

public class FileUploader : IFileUploader
{
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
        string savePath = Path.Combine(WebFiles.GetRootDirectory(), fileName);

        await using FileStream fileStream = new FileStream(savePath, FileMode.Create);
        await file.CopyToAsync(fileStream);

        return fileName;
    }

    public void Delete(string filePath)
    {
        if (string.IsNullOrEmpty(filePath) == true)
            throw new NullReferenceException();
        
        if(File.Exists(filePath) == true)
            File.Delete(filePath);
    }
}