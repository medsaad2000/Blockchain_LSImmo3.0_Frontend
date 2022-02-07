import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrat } from '../Model/contrat.model';
import { contratkey } from '../Model/contratkey.model';
import { Private } from '../Model/private.model';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }
  public getArticle(id:any): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`http://localhost:8887/CONTRAT-SERVICE/contrat/getarticleee/${id}`);
  }

  public getNumberOfArticle(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`http://localhost:8887/CONTRAT-SERVICE/contrat/getnumarticle`);
  }
  public getAllArticles(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`http://localhost:8887/CONTRAT-SERVICE/contrat/getAllImmobilier`);
  }

  // public addArticle(contrat:contratkey): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(contrat);
  //   console.log(body)
  //   return this.http.post('http://localhost:8888/CONTRAT-SERVICE/contrat/sellArticleee/C1',body,{'headers':headers})
  // }

  public addArticle(contrat:contratkey , id:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(contrat);
    console.log(body)
    return this.http.post(`http://localhost:8887/CONTRAT-SERVICE/contrat/sellArticleee/${id}`,body,{'headers':headers})
  }

  public buyArticle(privateKey:Private , id:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(privateKey);
    console.log(body)
    return this.http.post(`http://localhost:8887/CONTRAT-SERVICE/contrat/buyarticle/${id}`,body,{'headers':headers})
  }

  
}