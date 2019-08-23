using Microsoft.AspNetCore.Antiforgery;
using WinWinWhen.Controllers;

namespace WinWinWhen.Web.Host.Controllers
{
    public class AntiForgeryController : WinWinWhenControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
