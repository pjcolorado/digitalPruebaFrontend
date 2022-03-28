import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { FacturacionService } from './shared/services/facturacion.service';
import { GridModule } from './pages/facturacion/grid.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    GridModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    FacturacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
