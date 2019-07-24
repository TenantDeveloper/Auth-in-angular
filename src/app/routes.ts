import { Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
export const appRoutes:Routes = [
   {path:'',component:HomeComponent},
   {path:'vacancy/:id',component:VacancyDetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
]