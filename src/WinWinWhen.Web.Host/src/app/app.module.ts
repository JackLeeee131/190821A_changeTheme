
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { Title }                  from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule, MatTableModule, MatFormField, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule }         from '@angular/material';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';
import { NgbModule }                             from '@ng-bootstrap/ng-bootstrap';

// Component Module
import { FullCalendarModule }              from '@fullcalendar/angular';
import { AgmCoreModule }                   from '@agm/core';
import { LoadingBarRouterModule }          from '@ngx-loading-bar/router';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { NgxDatatableModule }              from '@swimlane/ngx-datatable';
import { TrendModule }                     from 'ngx-trend';
import { HighlightJsModule }               from 'ngx-highlight-js';
import { CountdownModule }                 from 'ngx-countdown';
import { ChartsModule }                    from 'ng4-charts/ng4-charts';
import { TagInputModule }                  from 'ngx-chips';
import { SweetAlert2Module }               from '@sweetalert2/ngx-sweetalert2';
import { Ng2TableModule }                  from 'ngx-datatable/ng2-table';
import { NvD3Module }                      from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { CalendarModule, DateAdapter }     from 'angular-calendar';
import { adapterFactory }                  from 'angular-calendar/date-adapters/date-fns';
import { PerfectScrollbarModule }          from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG }        from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
//pages
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';

// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';
import { FloatSubMenuComponent } from './components/float-sub-menu/float-sub-menu.component';
import * as global from './config/globals';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
 
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,

    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    FooterComponent,
    PanelComponent,
    FloatSubMenuComponent,
  ],
  imports: [
    // BrowserAnimationsModule,
   
   

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forRoot(),
    AbpModule,
    NgbModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    LoadingBarRouterModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CountdownModule,
    ChartsModule,
    FullCalendarModule,
    FormsModule,
    HighlightJsModule,
    MatSortModule,
    MatTableModule,
    NvD3Module,
    NgxChartsModule,
    NgxDatatableModule,
    Ng2TableModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TagInputModule,
    TrendModule
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent
  ]
})
export class AppModule {}
