using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using WinWinWhen.Configuration;

namespace WinWinWhen.Web.Host.Startup
{
    [DependsOn(
       typeof(WinWinWhenWebCoreModule))]
    public class WinWinWhenWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public WinWinWhenWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(WinWinWhenWebHostModule).GetAssembly());
        }
    }
}
