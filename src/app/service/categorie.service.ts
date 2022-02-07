import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../Model/categorie.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CategorieService {
  private apiServerUrl = environment.apiBaseUrl;
  id: any;

  constructor(private http: HttpClient , private routes:Router){}

  public getAllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiServerUrl}/ANNONCE-SERVICE/categories/all`);
  }
  public getCategories(id:String): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiServerUrl}/ANNONCE-SERVICE/categories/all`);
  }

  getRessource(url: any){
    return this.http.get(url)
  }
 
  }
