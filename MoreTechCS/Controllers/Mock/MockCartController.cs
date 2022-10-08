using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.Authentication;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;
using MoreTechCS.Requests;

namespace MoreTechCS.Controllers.Mock;

[ApiController]
[Route("Auth/[controller]")]
public class MockCartController : ControllerBase
{
    private readonly DatabaseContext _databaseContext;
    private readonly List<CartItem> _emptyCart = new(1);

    public MockCartController(DatabaseContext databaseContext)
    {
        _databaseContext = databaseContext;
    }

    [HttpGet("GetUser")]
    public IActionResult GetUser()
    {
        UserRole userRole = HttpContext.GetItem<UserRole>(nameof(UserRole));
        return Ok(userRole);
    }
    
    [HttpGet]
    public async Task<List<CartItem>> Get([FromHeader] User user)
    {
        Cart? cart = await _databaseContext.Carts.FirstOrDefaultAsync(c => c.Owner.UniversallyUniqueIdentifier == user.UniversallyUniqueIdentifier);
        List<CartItem> cartItems = await _databaseContext.CartItems.Where(c => c.OwnerCart == cart).ToListAsync();

        return cartItems.Count == 0 ? _emptyCart : cartItems;
    }

    [HttpPost]
    public async Task<IActionResult> AddProduct([FromBody] EditCartProductRequest request)
    {
        string uuId = request.UUId;

        User user = await _databaseContext.Users.FirstOrDefaultAsync(u => u.UniversallyUniqueIdentifier == uuId) ??
                    throw new NullReferenceException();
        
        Cart cart = await _databaseContext.Carts.FirstOrDefaultAsync(c => c.Owner.UniversallyUniqueIdentifier == uuId) ?? await AddCartAsync(user);
        CartItem? cartItem = _databaseContext.CartItems.FirstOrDefault(c => c.Product.Id == request.ProductId && c.OwnerCart == cart);

        if (cartItem != null)
            cartItem.Quantity += request.ProductCount;
        else
            cartItem = await AddCartItemAsync(request.ProductId, request.ProductCount, cart);

        await _databaseContext.SaveChangesAsync();
        
        return Ok();
    }

    [HttpDelete]
    public async Task<IActionResult> RemoveProduct([FromBody] EditCartProductRequest request)
    {
        return Ok();
    }
    
    private async Task<Cart> AddCartAsync(User user)
    {
        Cart cart = new()
        {
            Owner = user
        };

        await _databaseContext.Carts.AddAsync(cart);

        return cart;
    }

    private async Task<CartItem> AddCartItemAsync(int productId, int quantity, Cart cart)
    {
        await _databaseContext.Products.LoadAsync();
        Product product = await _databaseContext.Products.FirstAsync(p => p.Id == productId);
        CartItem cartItem = new()
        {
            OwnerCart = cart,
            Product = product,
            Quantity = quantity
        };

        await _databaseContext.AddAsync(cartItem);
        
        return cartItem;
    }
}