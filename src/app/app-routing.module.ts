import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoAuthLayoutComponent} from "./pages/no-auth-layout/no-auth-layout.component";
import {AuthLayoutComponent} from "./pages/auth-layout/auth-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthHomeComponent} from "./components/auth-home/auth-home.component";
import {AccountLayoutComponent} from "./pages/account-layout/account-layout.component";
import {DisplayInsurancesComponent} from "./components/display-insurances/display-insurances.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {SavedAccountInfoComponent} from "./components/saved-account-info/saved-account-info.component";
import {AuthGuard} from "./services/auth.guard";
import {
  CreateInsuranceStepperComponent
} from "./components/create-insurance-stepper/create-insurance-stepper.component";
import {ShowInsurancePriceComponent} from "./components/show-insurance-price/show-insurance-price.component";

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
    canActivate: [AuthGuard],
    children:
      [
        {
          path: 'auth-home',
          component: AuthHomeComponent,
        },
        {
          path: 'create-insurance-stepper',
          component: CreateInsuranceStepperComponent,
        },
        {
          path:'show-insurance-price',
          component: ShowInsurancePriceComponent,
        },
        {
          path: 'display-insurances',
          component: DisplayInsurancesComponent,
        },
        {
          path: 'profile',
          component: AccountLayoutComponent,
          children:
            [
              {path: '', component: UserInfoComponent},
              {path: 'saved-account-info', component: SavedAccountInfoComponent},
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
