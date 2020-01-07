import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ContentComponent } from './content/content.component';
import { UpdateComponent } from './update/update.component';
import { CurrencyShalterComponent } from './currency-shalter/currency-shalter.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'home', component: ContentComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'shalter', component: CurrencyShalterComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
