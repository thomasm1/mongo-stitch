import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component' 
import { CoinsComponent } from './components/coins/coins.component';
import { MemberAltcoinsComponent } from './components/member-altcoins/member-altcoins.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/coins',
    pathMatch: 'full'
  },
  {
    path: 'coins',
    component: CoinsComponent
  },
  {
    path: 'member-altcoins',
    canActivate: [AuthGuard],
    component: MemberAltcoinsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
