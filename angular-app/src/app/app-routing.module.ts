import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PostLoginGuardService } from './services/post-login-guard.service'
import { PreLoginGuardService } from './services/pre-login-guard.service'

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [PostLoginGuardService]},
  {path: 'tasks', component: TasksComponent, canActivate: [PreLoginGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [PreLoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
