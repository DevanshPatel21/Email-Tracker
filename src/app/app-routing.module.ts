import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import { UserComponent } from './user/user.component'
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component'
import { RegisteredComponent } from './registered/registered.component'
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component'
import { AdminGuard } from './Guard/admin.guard';
import { UserGuard } from './Guard/user.guard';
const routes: Routes = [
  { path: 'admin', component: AdminComponent }, 
  { path: 'user-login', component: UserComponent },
  { path: 'user-dashboard', component: UserDashbordComponent, canActivate: [UserGuard] },
  { path: 'registered', component: RegisteredComponent },
  { path: 'admin-dashbord', component: AdminDashbordComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', redirectTo: '/admin', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
