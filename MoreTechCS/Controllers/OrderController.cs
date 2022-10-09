using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoreTechCS.Core.Authentication;
using MoreTechCS.DatabaseModels;
using MoreTechCS.Extensions;
using MoreTechCS.Helpers;
using MoreTechCS.Requests;
using Newtonsoft.Json;

namespace MoreTechCS.Controllers;

[ApiController]
[Route("Auth/[controller]")]
public class OrderController : ControllerBase
{
    private const string TransactionUrl = "https://0c52-45-10-42-113.eu.ngrok.io/api/transaction/buy";
    private readonly DatabaseContext _databaseContext;

    public OrderController(DatabaseContext databaseContext)
    {
        _databaseContext = databaseContext;
    }

    [HttpGet]
    public IActionResult Get()
    {
        User user = HttpContext.GetItem<User>("User");
        IQueryable<Order> orders = _databaseContext.Orders.Where(o => o.Owner.UniversallyUniqueIdentifier == user.UniversallyUniqueIdentifier);
        return Ok(orders);
    }

    [HttpPost]
    public async Task<IActionResult> Create()
    {
        if (AuthorizationHelper.HasPermission(HttpContext, UserRole.Employee) == false)
            return Unauthorized();

        User user = HttpContext.GetItem<User>("User");
        Cart cart = await _databaseContext.Carts.FirstOrDefaultAsync(c => c.Owner == user) ??
                    throw new NullReferenceException();
        Order order = new Order();
        IQueryable<CartItem> cartItems = _databaseContext.CartItems.Where(c => c.OwnerCart == cart);
        
        //I just hope the transaction succeeds.
        Transaction(user, cartItems);

        List<OrderItem> orderItems = new();
        foreach (CartItem cartItem in cartItems)
        {
            Product product = await _databaseContext.Products.FirstAsync(p => p == cartItem.Product);
            product.Count -= cartItem.Quantity;
            
            orderItems.Add(new OrderItem()
            {
                OwnerOrder = order,
                Quantity = cartItem.Quantity,
                Product = product
            });

            _databaseContext.Products.Update(product);
        }

        await _databaseContext.Orders.AddAsync(order);
        await _databaseContext.OrderItems.AddRangeAsync(orderItems);

        await _databaseContext.SaveChangesAsync();
        
        return Ok(order);
    }

    private async void Transaction(User user, IQueryable<CartItem> cartItems)
    {
        decimal price = 0;
        foreach (CartItem cartItem in cartItems)
        {
            price += cartItem.Product.Price;
        }
        
        TransactionRequest transactionRequest = new TransactionRequest
        {
            UserId = int.Parse(user.UniversallyUniqueIdentifier),
            Amount = price
        };
        
        string json = JsonConvert.SerializeObject(transactionRequest);
        HttpContent data = new StringContent(json, Encoding.UTF8, "application/json");
        
        Console.WriteLine( JsonConvert.SerializeObject(transactionRequest, Formatting.Indented));
        
        using HttpClient httpClient = new();
        httpClient.BaseAddress = new Uri(TransactionUrl);
        await httpClient.PostAsync(TransactionUrl, data);
    }
}