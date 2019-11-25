import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ErrorComponent } from './application/error/error.component';
import { MenuComponent } from './application/menu/menu.component';
import { ProduitComponent } from './application/produit/produit.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { AddProduitComponent } from './application/add-produit/add-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    ErrorComponent,
    MenuComponent,
    ProduitComponent,
    ProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
