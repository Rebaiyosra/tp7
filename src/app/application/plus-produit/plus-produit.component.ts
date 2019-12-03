import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-plus-produit',
  templateUrl: './plus-produit.component.html',
  styleUrls: ['./plus-produit.component.css']
})
export class PlusProduitComponent implements OnInit {

  constructor(private produitsService:ProduitsService) { }

  submitted:boolean = false;
  message ="";

  ngOnInit() {
  }


productForm: FormGroup = new FormGroup(
 {id:new FormControl('', Validators.required),
 libelle:new FormControl('',
[Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')])}
 );
  public get idProduct()
 { return this.productForm.get('id'); }
 public get libelleProduct()
{return this.productForm.get('libelle');}
onSubmitForm()
 {
  this.submitted =true;

    const ajout = this.produitsService.addProduit(this.productForm.value['id'],this.productForm.value['libelle'] );
    if(ajout)
      this.message="Votre nouveau produit:" +this.productForm.value['id'] + " a bien été ajouté";
    else
      this.message="Le produit d'id "+ this.productForm.value['libelle']+" existe déjà !";
  }
}

