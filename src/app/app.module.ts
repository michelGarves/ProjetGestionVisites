import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConnexionComponent } from './connexion/app.connexion.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/app.navbar.component';
import { VisitesComponent } from './visites/app.visites.component';
import { MedecinsComponent } from './medecins/app.medecins.component';
import { DataService } from './services/app.service.data';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'medecins', component: MedecinsComponent },
  { path: 'visites', component: VisitesComponent },
  { path: 'accueil',  component: NavbarComponent  }
];
@NgModule({
  declarations: [
    AppComponent,
     ConnexionComponent,
     NavbarComponent,
     VisitesComponent,
     MedecinsComponent,

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
