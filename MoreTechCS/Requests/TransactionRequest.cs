using Newtonsoft.Json;

namespace MoreTechCS.Requests;

public class TransactionRequest
{
    [JsonProperty("user_id")]
    public int UserId { get; set; }

    public decimal Amount { get; set; }
}