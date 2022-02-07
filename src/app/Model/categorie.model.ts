
import { Annonce } from "./annonce.model";

export interface Categorie{
    
    id:String;
    nom_cat:String
    
    annonces:Annonce[];
   

}