using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.Authentication;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;
using MoreTechCS.Helpers;

namespace MoreTechCS.Controllers;

[ApiController]
[Route("Auth/[controller]")]
public class OrderController : ControllerBase
{
    private readonly DatabaseContext _databaseContext;

    public OrderController(DatabaseContext databaseContext)
    {
        _databaseContext = databaseContext;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok();
    }

    [HttpPost]
    public async Task<IActionResult> Create()
    {
        if (AuthorizationHelper.HasPermission(HttpContext, UserRole.Employee) == false)
            return Unauthorized();

        User user = HttpContext.GetItem<User>("User");
        Cart cart = await _databaseContext.Carts.FirstOrDefaultAsync(c => c.Owner == user) ??
                           throw new NullReferenceException();

        IQueryable<CartItem> cartItems = _databaseContext.CartItems.Where(c => c.OwnerCart == cart);

        List<Product> products = new();
        foreach (CartItem cartItem in cartItems)
        {
            Product product = await _databaseContext.Products.FirstAsync(p => p == cartItem.Product);
            product.Count -= cartItem.Quantity;
            products.Add(product);
        }
            
        return Ok();
    }
}