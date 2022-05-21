import { Component } from '@angular/core';
import { DataService } from '../services/app.service.data';
@Component({

    selector: 'my-medecins',
    templateUrl: 'app.medecins.html'
})
export class MedecinsComponent {

  lblMedecins : string = "Les médecins";
  nomMedecin : string = "";
  lesMedecins : any;
  medecin : any;
  estCache : boolean = true;
  estCacheMenu : boolean = true;
  lesRapports : any;
  afficherRapports : boolean = false;
  afficherMedecin : boolean = false;
  afficherMessage : boolean = false;
  lblMessage : string = "";

  constructor(private dataService : DataService){}

  charger() : void {
    if(this.nomMedecin != ""){
      this.dataService.chargerMedecins(this.nomMedecin).subscribe(
      (data)=>{this.lesMedecins = data;
      });

      this.estCache = false;
    }
  else{
      this.lesMedecins = null;
      this.estCache = true;
  }
  this.afficherRapports = false;
  this.afficherMedecin = false;
  this.afficherMessage = false;
  this.estCacheMenu = true;
  }
  selectionner(med : any) : void {
    this.medecin = med;
    this.nomMedecin = this.medecin.nom + " " + this.medecin.prenom  + "; dep : " +this.medecin.departement;
    this.estCacheMenu = false;
    this.lesMedecins = null;
    this.estCache = true;
  }

  derniersRapports(idMedecin : Number ) : void {
    this.dataService.chargerRapports(idMedecin).subscribe(
      (data)=>{this.lesRapports = data;
      });
    this.afficherRapports = true;
    this.afficherMedecin = false;
  }

  majMedecin() : void {
    this.afficherMedecin = true;
    this.afficherMessage = false;
    this.lblMessage = "";
    this.afficherRapports = false;
  }

  valider() : void {

    this.dataService.majMedecin(this.medecin.id ,this.medecin.adresse, this.medecin.tel, this.medecin.specialitecomplementaire).
    subscribe();
      this.lblMessage = "Enregistrement effectué";
      this.afficherMessage = true;
  }


}
