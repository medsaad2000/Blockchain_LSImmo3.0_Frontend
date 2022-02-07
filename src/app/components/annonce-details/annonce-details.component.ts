import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from 'src/app/emmiters/emitters';
import { Contrat } from 'src/app/Model/contrat.model';
import { ContratService } from 'src/app/service/contrat.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.component.html',
  styleUrls: ['./annonce-details.component.css']
})
export class AnnonceDetailsComponent implements OnInit {
  
  public contrats:any;
  contrat:any;
  formBuy:FormGroup;
  //private : Private ;

  id="";
  public contratId: any;

  constructor(private formbuilder:FormBuilder , private route:ActivatedRoute, private http : HttpClient , private router: Router ,private contratService: ContratService) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
  });
   
  }
  authenticated=false;
  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id');
    this.contratId=id;
    this.formBuy = this.formbuilder.group({
      privateKey:""
    })
    
   
   

   this.get(this.contratId)
   this.router.navigate(['/details',this.contratId])
   console.log(this.contrats);
   
   if(sessionStorage.getItem("Authorization")!=null){
    Emitters.authEmitter.emit(true);
    this.authenticated = true;
  }else{
    
    Emitters.authEmitter.emit(false);
    this.authenticated = false;
  }
    
  }

  submit():void{
  
    console.log(this.formBuy.getRawValue());
    console.log(this.contrats.id);
    
    this.contratService.buyArticle(this.formBuy.getRawValue(),this.contrats.id).subscribe( (res:any)=>{
      swal ({
        title: "Transaction effectué",
        text: "Yous avez acheter avec succes",
        icon: "success",
        
      });
      console.log(res),
      this.router.navigate(['/']);
 },err=>{
  swal ({
    title: "Erreur:!!",
    text: "Verifier votre Private Keys",
    icon: "warning",
    
  });
})
   
  }
  getAllImm(): void {
    this.contratService.getAllArticles().subscribe((data: any) =>{
      this.contrats = data;
      console.log(this.contrats);
      //this.cardImm.push(data);
      //console.log(this.cardImm);
    }
    ) 
  }
  public getAllImmeuble(): void {
    this.contratService.getAllArticles().subscribe(
      (response: Contrat[]) => {
        this.contrats = response;
        console.log("-----allimm-----")
        console.log(this.id);
        
      
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  get(contratId:any): void {
    this.contratService.getArticle(this.contratId).subscribe(
      (response:any) => {
        this.contrats = response; 
        
        
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  
    }
   onSelect(){
     this.router.navigate(['/details',this.contratId]);
   }

}