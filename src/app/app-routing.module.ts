import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './component/panier/panier.component';


const routes: Routes = [
  {path: '', component: PanierComponent},
  { path: 'panier', component: PanierComponent} ,
   {path: "**", component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
