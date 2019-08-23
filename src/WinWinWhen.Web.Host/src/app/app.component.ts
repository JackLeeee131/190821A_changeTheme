import { Component, ViewContainerRef, Injector, OnInit, AfterViewInit, ChangeDetectorRef, HostListener, Renderer2 } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import pageSettings from './config/page-settings';
import { NavigationStart, Router } from '@angular/router';

@Component({
    templateUrl: './app.component.html'   
})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {

    // private viewContainerRef: ViewContainerRef;
    pageSettings;
    constructor(
        injector: Injector, 
        private router: Router, private renderer: Renderer2
    ) {
        super(injector);
        router.events.subscribe((e) => {
                if (e instanceof NavigationStart) {
                  if (window.innerWidth < 768) {
                    this.pageSettings.pageMobileSidebarToggled = false;
                  }
                }
        });
    }

    ngOnInit(): void {
        this.pageSettings = pageSettings;
        SignalRAspNetCoreHelper.initSignalR();

        abp.event.on('abp.notifications.received', userNotification => {
            abp.notifications.showUiNotifyForUserNotification(userNotification);

            // Desktop notification
            Push.create('AbpZeroTemplate', {
                body: userNotification.notification.data.message,
                icon: abp.appPath + 'assets/app-logo-small.png',
                timeout: 6000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        });
    }

     ngAfterViewInit(): void {
  
     }

    // window scroll
  pageHasScroll;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top > 0) {
      this.pageHasScroll = true;
    } else {
      this.pageHasScroll = false;
    }
  }

  // set page minified
  onToggleSidebarMinified(val: boolean):void {
  	if (this.pageSettings.pageSidebarMinified) {
  		this.pageSettings.pageSidebarMinified = false;
  	} else {
  		this.pageSettings.pageSidebarMinified = true;
  	}
  }

  // set page right collapse
  onToggleSidebarRight(val: boolean):void {
  	if (this.pageSettings.pageSidebarRightCollapsed) {
  		this.pageSettings.pageSidebarRightCollapsed = false;
  	} else {
  		this.pageSettings.pageSidebarRightCollapsed = true;
  	}
  }

  // hide mobile sidebar
  onHideMobileSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileSidebarToggled) {
      if (this.pageSettings.pageMobileSidebarFirstClicked) {
        this.pageSettings.pageMobileSidebarFirstClicked = false;
      } else {
  		  this.pageSettings.pageMobileSidebarToggled = false;
      }
    }
	}

  // toggle mobile sidebar
  onToggleMobileSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileSidebarToggled) {
  		this.pageSettings.pageMobileSidebarToggled = false;
    } else {
  		this.pageSettings.pageMobileSidebarToggled = true;
  		this.pageSettings.pageMobileSidebarFirstClicked = true;
    }
	}


  // hide right mobile sidebar
  onHideMobileRightSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
      if (this.pageSettings.pageMobileRightSidebarFirstClicked) {
        this.pageSettings.pageMobileRightSidebarFirstClicked = false;
      } else {
  		  this.pageSettings.pageMobileRightSidebarToggled = false;
      }
    }
	}

  // toggle right mobile sidebar
  onToggleMobileRightSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
  		this.pageSettings.pageMobileRightSidebarToggled = false;
    } else {
  		this.pageSettings.pageMobileRightSidebarToggled = true;
  		this.pageSettings.pageMobileRightSidebarFirstClicked = true;
    }
	}

}
