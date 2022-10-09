using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoreTechCS.Migrations
{
    /// <inheritdoc />
    public partial class EditNewsTable4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "NewsPosts",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_NewsPosts_UserId",
                table: "NewsPosts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_NewsPosts_Users_UserId",
                table: "NewsPosts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NewsPosts_Users_UserId",
                table: "NewsPosts");

            migrationBuilder.DropIndex(
                name: "IX_NewsPosts_UserId",
                table: "NewsPosts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "NewsPosts");

            migrationBuilder.AddColumn<int>(
                name: "NewsPostId",
                table: "Users",
                type: "integer",
                nullable: true);

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
    }
}
