import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.service.data';
@Component({

    selector: 'my-connexion',
    templateUrl: 'app.connexion.html',
    styleUrls: ['app.connexion.css']
})

export class ConnexionComponent {
    titre : string = "Connexion";
    login : string = "";
    mdp : string = "";
    lblMessage : string = "Erreur";
    estCache : boolean = true;
    visiteur : any;
    url : string = "";

    constructor(private dataService : DataService, private router : Router){}

    valider() : void{
         this.dataService.connexion(this.login, this.mdp)
      .subscribe(
        (data)=>{this.visiteur = data;
          this.dataService.visiteur = data;
            this.router.navigate(['accueil']); this.estCache=true
        }
        ,(error)=>{this.estCache = false}
      );

          }
    }
