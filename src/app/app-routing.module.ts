import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AllannonceComponent } from './components/all-annonce/all-annonce.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AnnonceGarageComponent } from './components/annonce-garage/annonce-garage.component';
import { AnnonceMaisonComponent } from './components/annonce-maison/annonce-maison.component';
import { AnnonceStudioComponent } from './components/annonce-studio/annonce-studio.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


import { ContratComponent } from './components/contrat/contrat.component';
import {HomeComponent} from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';







const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  
  {
    path: 'categorie', component:CategorieComponent
  },
 
  {
    path: 'allannonce', component:AllannonceComponent
  },
  {
    path: 'contactUs', component:ContactUsComponent
  },
  {
    path: 'annonce', component:AnnonceComponent
  },
  {
    path: 'studio', component:AnnonceStudioComponent
  },
  {
    path: 'maison', component:AnnonceMaisonComponent
  },
  {
    path: 'garage', component:AnnonceGarageComponent
  },

  {
  path: 'login', component: LoginComponent
  },
  {
    path : 'register' , component : RegisterComponent
  },
  {
    path : 'contrat' , component : ContratComponent
  },
  {
    path : 'details/:id' , component : AnnonceDetailsComponent
  },
  {
    path: 'profile' , component : UserProfileComponent
  }
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
