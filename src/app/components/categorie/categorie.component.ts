import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/Model/annonce.model';
import { CategorieService } from 'src/app/service/categorie.service';
import { AnnonceComponent } from '../annonce/annonce.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: any;
  categorie:CategorieComponent | undefined
  annonces:Annonce[] |undefined;
  annonce:Annonce[] | undefined;
  id: any;
  constructor(private catService:CategorieService, annonce:AnnonceComponent) { }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(data =>{
      this.categories=data;

    },err =>{
      console.log(err)
    })
  }

 

}
