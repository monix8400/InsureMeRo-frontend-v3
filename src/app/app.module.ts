import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NoAuthLayoutComponent} from './pages/no-auth-layout/no-auth-layout.component';
import {AuthLayoutComponent} from './pages/auth-layout/auth-layout.component';
import {AuthHomeComponent} from './components/auth-home/auth-home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ChartComponent} from './components/chart/chart.component';
import {
  CreateInsuranceChooseTypePiComponent
} from './components/create-insurance-choose-type-pi/create-insurance-choose-type-pi.component';
import {CreateInsurancePiIComponent} from './components/create-insurance-pi-i/create-insurance-pi-i.component';
import {CreateInsurancePiLComponent} from './components/create-insurance-pi-l/create-insurance-pi-l.component';
import {CreateInsuranceVComponent} from "./components/create-insurance-v/create-insurance-v.component";
import {CreateInsuranceDComponent} from './components/create-insurance-d/create-insurance-d.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HTTPRequestService} from "./services/http-request.service";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {NgChartsModule} from 'ng2-charts';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import {DisplayInsurancesComponent} from './components/display-insurances/display-insurances.component';
import {SettingsComponent} from './components/settings/settings.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {AccountLayoutComponent} from './pages/account-layout/account-layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {
  CreateInsuranceStepperComponent
} from './components/create-insurance-stepper/create-insurance-stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {CreateInsuranceDListComponent} from './components/create-insurance-d-list/create-insurance-d-list.component';
import {ChooseInsuranceDatesComponent} from './components/choose-insurance-dates/choose-insurance-dates.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { PersonalInfoDialogComponent } from './components/personal-info-dialog/personal-info-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    NoAuthLayoutComponent,
    AuthLayoutComponent,
    AuthHomeComponent,
    LoginComponent,
    RegisterComponent,
    ChartComponent,
    CreateInsuranceChooseTypePiComponent,
    CreateInsurancePiIComponent,
    CreateInsurancePiLComponent,
    CreateInsuranceVComponent,
    CreateInsuranceDComponent,
    AccountInfoComponent,
    DisplayInsurancesComponent,
    SettingsComponent,
    UserInfoComponent,
    AccountLayoutComponent,
    CreateInsuranceStepperComponent,
    CreateInsuranceDListComponent,
    ChooseInsuranceDatesComponent,
    InsuranceComponent,
    PersonalInfoDialogComponent,

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
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [HTTPRequestService, {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
