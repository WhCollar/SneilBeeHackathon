FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SneilBeeHackathon/MoreTechCS/MoreTechCS.csproj", "MoreTechCS/"]
RUN dotnet restore "MoreTechCS/MoreTechCS.csproj"
COPY . .
WORKDIR "/src/MoreTechCS"
RUN dotnet build "MoreTechCS.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MoreTechCS.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MoreTechCS.dll"]
