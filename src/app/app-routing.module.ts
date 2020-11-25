import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudCountryComponent } from './crud-country/crud-country.component';

const routes: Routes = [
  {path:'',component:CrudCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
