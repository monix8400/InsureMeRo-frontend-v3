import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoAuthLayoutComponent} from "./pages/no-auth-layout/no-auth-layout.component";
import {AuthLayoutComponent} from "./pages/auth-layout/auth-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthHomeComponent} from "./components/auth-home/auth-home.component";
import {CreateInsurancePiIComponent} from "./components/create-insurance-pi-i/create-insurance-pi-i.component";
import {CreateInsuranceVComponent} from "./components/create-insurance-v/create-insurance-v.component";
import {AccountLayoutComponent} from "./pages/account-layout/account-layout.component";
import {InsurancesComponent} from "./components/insurances/insurances.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {AccountInfoComponent} from "./components/account-info/account-info.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {CreateInsurancePiLComponent} from "./components/create-insurance-pi-l/create-insurance-pi-l.component";
import {
  CreateInsuranceChooseTypePiComponent
} from "./components/create-insurance-choose-type-pi/create-insurance-choose-type-pi.component";
import {CreateInsuranceDComponent} from "./components/create-insurance-d/create-insurance-d.component";
import {
  CreateInsuranceChooseDComponent
} from "./components/create-insurance-choose-d/create-insurance-choose-d.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    component: NoAuthLayoutComponent,
    children:
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        }
      ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    // canActivate: [AuthGuard],
    children:
      [
        {
          path: 'auth-home',
          component: AuthHomeComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-choose-type-pi',
          component: CreateInsuranceChooseTypePiComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-pi-i',
          component: CreateInsurancePiIComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-pi-l',
          component: CreateInsurancePiLComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-v',
          component: CreateInsuranceVComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-choose-d',
          component: CreateInsuranceChooseDComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-d',
          component: CreateInsuranceDComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'insurances',
          component: InsurancesComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'profile',
          component: AccountLayoutComponent,
          // canActivate: [AuthGuard],
          children:
            [
              {path: '', component: UserInfoComponent},
              {path: 'account-info', component: AccountInfoComponent},
              {path: 'settings', component: SettingsComponent}
            ]
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
