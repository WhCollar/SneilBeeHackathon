using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoreTechCS.Migrations
{
    /// <inheritdoc />
    public partial class EditNewsTable3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NewsPostId",
                table: "Users",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsLiked",
                table: "NewsPosts",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Users_NewsPostId",
                table: "Users",
                column: "NewsPostId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_NewsPosts_NewsPostId",
                table: "Users",
                column: "NewsPostId",
                principalTable: "NewsPosts",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_NewsPosts_NewsPostId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_NewsPostId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "NewsPostId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsLiked",
                table: "NewsPosts");
        }
    }
}
