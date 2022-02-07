import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Emitters } from 'src/app/emmiters/emitters';
import { Annonce } from 'src/app/Model/annonce.model';
import { Categorie } from 'src/app/Model/categorie.model';
import { AnnonceService } from 'src/app/service/annonce.service';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categories: Categorie[] | undefined;
  http: any;
  router: any;
  annonces:any;
  categorie: any;
  apiBaseUrl: 'http://localhost:8090' | undefined
  ;
  idCat: any;
  annonceService:AnnonceService | undefined
  constructor(private categorieService: CategorieService, private routes:Router, private route:ActivatedRoute){
    console.log(route)
  }
  ngOnInit(){
    this.getAllCategories();
    
    
  }
    public getAllCategories(): void {
      this.categorieService.getAllCategories().subscribe(
        (response: Categorie[]) => {
          this.categories = response;
          console.log(this.categories);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    
     onGetProducts(categorie:any){
      console.log(categorie)
       this.categorieService.getCategories(categorie).subscribe(
        (response: Categorie[]) => {
          this.categories = response;
          console.log(this.categories);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      ); 
    }
     onChange(){
       console.log(this.idCat);
       this.annonces=this.annonceService?.rechercherParCategorie(this.idCat);
     }
     
    


    


    
  

  }
