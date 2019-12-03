import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private router:Router,private formBuilder:FormBuilder) { }
  contactForm: FormGroup;
 
  ngOnInit() {
 
   this.contactForm = this.formBuilder.group(
 {nom:['', [Validators.required,Validators.minLength(8)]],
 email: ['', Validators.required],
 genre:['Homme', Validators.required],
 region:['Autre'],
 newsLetter:[true],
  preferences:this.formBuilder.array([])
 }
 )
 
    this.contactForm.get('email').setValue('dsi@gmail.com');
  }
  public get nomForm()
  {return this.contactForm.get('nom');} 
  public get emailForm()
  {return this.contactForm.get('email');} 
  public get genreForm()
  {return this.contactForm.get('genre');} 

  public get lesPreferences(){
    return this.contactForm.get('preferences') as FormArray;
  }
   onAjouterPreference()
 {
 this.lesPreferences.push(this.formBuilder.control(''));}


onAccueil()
    {
    this.router.navigate(['/accueil']);
    }
onContacter()
 {
 console.log(this.contactForm.value);
 console.log(this.contactForm.value['nom']);
 console.log(this.contactForm.get('email').value);
 console.log(this.contactForm.value['genre']);
 console.log(this.contactForm.value['region']);
 console.log(this.contactForm.value['newsLetter']);
 for(let p of this.lesPreferences.controls){
 console.log(p.value);}
 }


}
