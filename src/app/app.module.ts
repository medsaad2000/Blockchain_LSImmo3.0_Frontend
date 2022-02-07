import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import { SocialAuthService } from 'angularx-social-login';




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';

import { SocialLoginModule } from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategorieComponent } from './components/categorie/categorie.component';
import { LoginComponent } from './components/login/login.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { RegisterComponent } from './components/register/register.component';
import { ContratComponent } from './components/contrat/contrat.component';
import { AnnonceStudioComponent } from './components/annonce-studio/annonce-studio.component';
import { AnnonceMaisonComponent } from './components/annonce-maison/annonce-maison.component';
import { AnnonceGarageComponent } from './components/annonce-garage/annonce-garage.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AllannonceComponent } from './components/all-annonce/all-annonce.component';

import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    HomeComponent,
    

    
     CategorieComponent,
     LoginComponent,
     AnnonceComponent,
     RegisterComponent,
     ContratComponent,
     AnnonceStudioComponent,
     AnnonceMaisonComponent,
     AnnonceGarageComponent,
     ContactUsComponent,
     AllannonceComponent,
     
     AnnonceDetailsComponent,
     UserProfileComponent,
     FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
