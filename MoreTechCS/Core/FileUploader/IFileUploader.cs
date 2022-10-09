namespace MoreTechCS.Core.FileUploader;

public interface IFileUploader
{
    public Task<string> UploadAsync(IFormFile file);

    public void Delete(string filePath);
}