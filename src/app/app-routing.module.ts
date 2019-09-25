import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponentComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
