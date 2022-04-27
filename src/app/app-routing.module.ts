import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoAuthLayoutComponent} from "./pages/no-auth-layout/no-auth-layout.component";
import {AuthLayoutComponent} from "./pages/auth-layout/auth-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthHomeComponent} from "./components/auth-home/auth-home.component";
import {CreateInsurancePIComponent} from "./components/create-insurance-pi/create-insurance-pi.component";
import {CreateInsuranceCIComponent} from "./components/create-insurance-ci/create-insurance-ci.component";
import {AccountLayoutComponent} from "./pages/account-layout/account-layout.component";
import {InsurancesComponent} from "./components/insurances/insurances.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {AccountInfoComponent} from "./components/account-info/account-info.component";
import {SettingsComponent} from "./components/settings/settings.component";

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
          path: 'create-insurance-pi',
          component: CreateInsurancePIComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'create-insurance-ci',
          component: CreateInsuranceCIComponent,
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
              {path: 'personal-info', component: AccountInfoComponent},
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
