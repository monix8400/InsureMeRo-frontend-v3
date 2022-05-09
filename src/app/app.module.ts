import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoAuthLayoutComponent } from './pages/no-auth-layout/no-auth-layout.component';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChartComponent } from './components/chart/chart.component';
import { CreateInsurancePIComponent } from './components/create-insurance-pi/create-insurance-pi.component';
import { CreateInsuranceCIComponent } from './components/create-insurance-ci/create-insurance-ci.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HTTPRequestService} from "./services/http-request.service";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { NgChartsModule } from 'ng2-charts';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { InsurancesComponent } from './components/insurances/insurances.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AccountLayoutComponent } from './pages/account-layout/account-layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NoAuthLayoutComponent,
    AuthLayoutComponent,
    AuthHomeComponent,
    LoginComponent,
    RegisterComponent,
    ChartComponent,
    CreateInsurancePIComponent,
    CreateInsuranceCIComponent,
    AccountInfoComponent,
    InsurancesComponent,
    SettingsComponent,
    UserInfoComponent,
    AccountLayoutComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        NgChartsModule,
        MatSidenavModule,
        MatListModule,
        ReactiveFormsModule,
        MatIconModule,
    ],
  providers: [HTTPRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
