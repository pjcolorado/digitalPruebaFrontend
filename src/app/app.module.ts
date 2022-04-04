import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { FacturaService } from './shared/services/factura.service';
import { FacturaComponent } from './pages/factura/factura.component';
import {
  DxButtonModule, DxCalendarModule, DxDateBoxModule, DxFormModule, DxNumberBoxModule, DxTemplateModule, DxTextBoxModule,
  DxDataGridModule, DxValidationSummaryModule, DxValidatorModule, DxSelectBoxModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxCalendarModule,
    DxTemplateModule,
    DxFormModule,
    DxNumberBoxModule,
    DxButtonModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxValidatorModule,
    DxValidationSummaryModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
