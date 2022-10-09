using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoreTechCS.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCartItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Carts_CartId",
                table: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_CartId",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "CartId",
                table: "CartItems");

            migrationBuilder.AddColumn<int>(
                name: "StorageId",
                table: "CartItems",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_StorageId",
                table: "CartItems",
                column: "StorageId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Carts_StorageId",
                table: "CartItems",
                column: "StorageId",
                principalTable: "Carts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Carts_StorageId",
                table: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_StorageId",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "StorageId",
                table: "CartItems");

            migrationBuilder.AddColumn<int>(
                name: "CartId",
                table: "CartItems",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_CartId",
                table: "CartItems",
                column: "CartId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Carts_CartId",
                table: "CartItems",
                column: "CartId",
                principalTable: "Carts",
                principalColumn: "Id");
        }
    }
}
