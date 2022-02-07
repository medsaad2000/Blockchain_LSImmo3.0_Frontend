import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Annonce } from '../Model/annonce.model';
import { CategorieComponent } from '../components/categorie/categorie.component';
import { Categorie } from '../Model/categorie.model';

@Injectable({providedIn: 'root'})
export class AnnonceService {
  private apiServerUrl = environment.apiBaseUrl;
  annonces: any;
  produits: any;


  constructor(private http: HttpClient){}
 

 
  public addAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.apiServerUrl}/ANNONCE-SERVICE/annonces/add`, annonce);
  }

  public updateAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.apiServerUrl}/ANNONCE-SERVICE/annonces/update`, annonce);
  }

  public deleteAnnonce(annonceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ANNONCE-SERVICE/annonces/delete/${annonceId}`);
  }
  public getAnnonces(categorie:CategorieComponent): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.apiServerUrl}/ANNONCE-SERVICE/annonces`);
  }
  public getCategories(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.apiServerUrl}/ANNONCE-SERVICE/annonces/AllAnnonce`);
  }
  rechercherParCategorie(idCat: number): Annonce[]{
    this.annonces.forEach((cur: any, index: any) => {
      if(idCat != cur.categorie.idCat) {
            this.annonces.splice(index, 1);  
         }
   });
   return this.annonces
   }
}

