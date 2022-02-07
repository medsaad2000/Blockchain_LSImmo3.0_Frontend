import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emmiters/emitters';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  username = "";
  adress = "";
  constructor(private http: HttpClient, private router:Router) { }
 
  
  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
          this.authenticated=auth;
      }

    );
    if(sessionStorage.getItem("Authorization")!=null){
      this.http.get(`http://localhost:8887/AUTH-SERVICE/users/${sessionStorage.getItem("username")}`,{headers:{'Authorization': `Bearer ${sessionStorage.getItem("Authorization")}`}}).subscribe(
        (res:any)=>{
          console.log(res);
          this.username = `${res.username}`;
          this.adress = `${res.adress}`;
          Emitters.authEmitter.emit(true);
        },
        err => {
          console.log(err);
          
        }
      )
    }else{
      
      Emitters.authEmitter.emit(false);
    }

  }
  

  logout(): void{
    console.log("log out")

      this.authenticated=false,
         sessionStorage.removeItem("Authorization"),
        sessionStorage.removeItem("username")
      
      
  }}


