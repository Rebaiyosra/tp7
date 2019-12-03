import { Injectable } from '@angular/core';
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  products = new Array(
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier')
  )

  public getProduitByID(id:number):Produit
  {
    for(let p of this.products)
    {
      if(p.id=== id)
      return p;
    }
    return null;
  }

  public addProduit(id: number, libelle:string):boolean
  {
   if(this.getProduitByID(id)==null)
      {this.products.push(new Produit(id, libelle));
        return true;
      }    
      return false;
  }
  public modifierProduit(libelle:string, id:string){
    this.products.libelle=libelle;
    this.products.id=id;
  }
  constructor() { }

}
