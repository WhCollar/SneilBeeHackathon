using Microsoft.EntityFrameworkCore;
using MoreTechCS;
using MoreTechCS.Core.CatalogFilter;
using MoreTechCS.Core.FileUploader;
using MoreTechCS.Extensions.Middlewares;
using MoreTechCS.Middlewares;

var builder = WebApplication.CreateBuilder(args);
IServiceCollection services = builder.Services;

//services.AddCors();

services.AddDbContext<DatabaseContext>(o =>
{
    o.UseNpgsql(builder.Configuration.GetConnectionString("DatabaseConnectionString"));
});

services.AddControllers();
services.AddResponseCaching();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

services.AddSingleton<CatalogFilterCollection>();
services.AddScoped<IFileUploader, FileUploader>();
services.AddScoped<NewsFeedFileUploader>();

var app = builder.Build();

WebFiles.Initialize(app.Environment);

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

/*app.UseCors(corsPolicyBuilder =>
{
    corsPolicyBuilder.AllowAnyOrigin();
    corsPolicyBuilder.AllowAnyHeader();
    corsPolicyBuilder.AllowAnyMethod();
});*/

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseResponseCaching();

app.UseAuthorization();

app.MapControllers();

app.UseRequestLogging();
app.UseUserAuthentication();
app.UseMiddleware<LoggerHeaderMiddleware>();

app.Run();