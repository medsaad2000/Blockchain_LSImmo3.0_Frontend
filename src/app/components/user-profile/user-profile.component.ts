import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username = "";
  adress = "";
  email = "";

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser():void{
    this.http.get(`http://localhost:8887/AUTH-SERVICE/users/${sessionStorage.getItem("username")}`,{headers:{'Authorization': `Bearer ${sessionStorage.getItem("Authorization")}`}}).subscribe(
      (res:any)=>{
        console.log(res);
        this.username = `${res.username}`;
        this.adress = `${res.adress}`;
        this.email = `${res.email}`;
      },
      err => {
        console.log(err);
        
      }
    )
  }
}
