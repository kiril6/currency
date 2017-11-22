import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home/results', redirectTo: '/home', pathMatch: 'full' },
  { path: 'update', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
