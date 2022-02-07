import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Categorie } from 'src/app/Model/categorie.model';
import { AnnonceService } from 'src/app/service/annonce.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { CategorieComponent } from '../categorie/categorie.component';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  
  
  public annonces: Annonce[] | undefined;
  deleteAnnonce: Annonce | undefined;
  editAnnonce: Annonce | undefined;
  categorie:CategorieComponent | undefined;
  titre_anc:AnnonceComponent | undefined;
  
 
  id:String | undefined;
  constructor(private annonceService: AnnonceService , private route:ActivatedRoute){
    console.log(this.route)
    
  }
  ngOnInit(){
    this.getCategories();
    console.log(this.categorie)
  }
    public getCategories(): void {
      this.annonceService.getCategories().subscribe(
        (response: Annonce[]) => {
          this.annonces = response;
          console.log(this.annonces[0]);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
  public conv(date1: any):  Date {
    return new Date(date1);
  }


}



