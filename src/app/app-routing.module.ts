import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ErrorComponent } from './application/error/error.component';
import { ProduitComponent } from './application/produit/produit.component';
import { AddProduitComponent } from './application/add-produit/add-produit.component';


const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},   
  {path:'produits', component:ProduitsComponent},
  {path:'produits/:id', component:ProduitComponent},
  {path:'ajoutProduit', component:AddProduitComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
