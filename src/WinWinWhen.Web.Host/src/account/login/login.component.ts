import { Component, Injector, OnInit } from '@angular/core';
import { AbpSessionService } from '@abp/session/abp-session.service';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements OnInit {
  submitting = false;

  bg;
  bgList;
  app;

  constructor(
    injector: Injector,
    public loginService: LoginService,
    private _sessionService: AbpSessionService,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit() {
    this.bg = '/assets/img/login-bg/login-bg-17.jpg';
    this.bgList = [
      { 'bg': '/assets/img/login-bg/login-bg-17.jpg', active: true },
      { 'bg': '/assets/img/login-bg/login-bg-16.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-15.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-14.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-13.jpg' },
      { 'bg': '/assets/img/login-bg/login-bg-12.jpg' }
    ];
  }

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }

    return true;
  }

  login(): void {
    this.submitting = true;
    this.loginService.authenticate(() => (this.submitting = false));
  }

  changeBg(list) {
    this.bg = list.bg;
    list.active = true;

    for (let bList of this.bgList) {
			if (bList != list) {
				bList.active = false;
			}
		}
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['dashboard/v3']);
  }
}
