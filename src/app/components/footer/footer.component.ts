import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emmiters/emitters';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }
  authenticated = false;
  ngOnInit(): void {
    if(sessionStorage.getItem("Authorization")!=null){
      Emitters.authEmitter.emit(true);
      this.authenticated = true;
    }else{
      
      Emitters.authEmitter.emit(false);
      this.authenticated = false;
    }
  }

}