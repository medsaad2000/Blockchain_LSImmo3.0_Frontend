import { CategorieComponent } from "../components/categorie/categorie.component";
import { Categorie } from "./categorie.model";

export interface Annonce{
    
    id:BigInteger;
    idImm:BigInteger;
    titre_anc:String;
    date_anc:Date;
    url_img:String;
    description:String;
    prix_anc:DoubleRange;
    categories:Categorie;
    
    

}
