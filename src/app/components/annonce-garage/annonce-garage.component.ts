import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { AnnonceService } from 'src/app/service/annonce.service';
import { AnnonceComponent } from '../annonce/annonce.component';
import { CategorieComponent } from '../categorie/categorie.component';

@Component({
  selector: 'app-annonce-garage',
  templateUrl: './annonce-garage.component.html',
  styleUrls: ['./annonce-garage.component.css']
})
export class AnnonceGarageComponent implements OnInit {
 
  date_anc = new Date("2020-02-02T12:34:27.846+00:00")
  public annonces: Annonce[] | undefined;
  deleteAnnonce: Annonce | undefined;
  editAnnonce: Annonce | undefined;
  categorie:CategorieComponent | undefined;
  titre_anc:AnnonceComponent | undefined;
  
 
  id:String | undefined;
  constructor(private annonceService: AnnonceService , private route:ActivatedRoute){
    console.log(this.route)
    console.log(this.date_anc);
    
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
