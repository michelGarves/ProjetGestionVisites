import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {
    visiteur : any;
    private  urlDomaine :  string = "http://localhost/API-REST-php/api";
    constructor(private http: HttpClient) {}

    public connexion( loginIn : string, mdpIn : string ){
        let url :string = this.urlDomaine + "/connexion?login=" + loginIn + "&mdp=" + mdpIn;
        let req = this.http.get(url);
        return req;
    }

    public chargerMedecins(nomMedecin : string){
      let url :string = this.urlDomaine + "/medecins?nom="+nomMedecin;

      let req = this.http.get(url);

      return req;

    }

    public chargerRapports(idMedecin : Number){
      let url : string = this.urlDomaine + "/rapports/" + idMedecin;
      let req = this.http.get(url);
      return req;
    }

    public majMedecin(id : string ,adresse : string, tel :string, spe : string) {
      let url : string =  this.urlDomaine + "/majmedecin?idmedecin=" + id + "&adresse=";
          url += adresse + "&tel=" + tel +"&specialite=" + spe;
      let req = this.http
                 .get(url)
   return req;
}
}
