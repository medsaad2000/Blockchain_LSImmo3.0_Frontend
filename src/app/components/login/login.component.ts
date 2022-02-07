import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emmiters/emitters';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  headers:HttpHeaders

  constructor(private formBuilder: FormBuilder , private http : HttpClient , private router: Router) { 
    
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:'',
      password:''
    });
  }
  

  submit(): void{
    
      this.http.post('http://localhost:8887/AUTH-SERVICE/login',this.form.getRawValue(),{observe : 'response'}).subscribe(res =>{
        swal ({
          title: "Login Successful",
          text: "You are logged in",
          icon: "success",
          
        });
        console.log(res.headers.get('Authorization')),
        sessionStorage.setItem('Authorization',String(res.headers.get("Authorization"))),
        sessionStorage.setItem('username',String(this.form.getRawValue().username)),
        Emitters.authEmitter.emit(true),
       this.router.navigate(['/']);

      
     },err=>{
      swal ({
        title: "Fields Empty!!",
        text: "Please check the missing field!!",
        icon: "warning",
        
      });
    })
  }

  }

  
  
  
