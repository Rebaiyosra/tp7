import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  lesProduits :Produit[];
  constructor(private produitsService:ProduitsService) { }

  ngOnInit() {
    // initialisation du tableau les produits
    this.lesProduits = this.produitsService.products;
  }

}
