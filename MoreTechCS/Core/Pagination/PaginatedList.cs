namespace MoreTechCS.Core.Pagination;

public class PaginatedList<T>
{
    public PaginatedList(IQueryable<T> source, int pageIndex, int pageSize)
    {
        PageIndex = pageIndex - 1;
        PageSize = pageSize;
        TotalCount = source.Count();
        TotalPages = (int) Math.Ceiling(TotalCount / (double) PageSize);
        Products = source.Skip(PageIndex * PageSize).Take(PageSize);
    }

    public int PageIndex { get; set; }

    public int PageSize { get; set; }

    public int TotalCount { get; set; }

    public int TotalPages { get; set; }

    public bool HasPreviousPage => PageIndex > 0;

    public bool HasNextPage => PageIndex + 1 < TotalPages;

    public IQueryable<T> Products { get; set; }
}