import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Categorie } from 'src/app/Model/categorie.model';
import { AnnonceService } from 'src/app/service/annonce.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { ContratService } from 'src/app/service/contrat.service';
import { CategorieComponent } from '../categorie/categorie.component';
import { ContratComponent } from '../contrat/contrat.component';

@Component({
  selector: 'app-all-annonce',
  templateUrl: './all-annonce.component.html',
  styleUrls: ['./all-annonce.component.css']
})
export class AllannonceComponent implements OnInit {
  
  filteredString:string='';
  public annonces: Annonce[] | any;
  deleteAnnonce: Annonce | undefined;
  editAnnonce: Annonce | undefined;
  categorie:CategorieComponent | undefined;
  titre_anc:AllannonceComponent | undefined;
  contrat:ContratComponent | undefined
  
 
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
    sortProductByPrice(option:any){
      if(option.value =='l2h'){
        this.annonces.sort((a:any, b:any) => Number(a.prix_anc) - Number(b.prix_anc));
      }else if(option.value =='h2l'){
        this.annonces.sort((a:any, b:any) => Number(b.prix_anc) - Number(a.prix_anc));
      }else if(option.value =='timeNew'){
        this.annonces.sort((a:any, b:any) => new Date(b.date_anc).getTime() - new Date(a.date_anc).getTime());
      }else if(option.value =='timeOld'){
        this.annonces.sort((a:any, b:any) => new Date(a.date_anc).getTime() - new Date(b.date_anc).getTime());
      }
}



}
