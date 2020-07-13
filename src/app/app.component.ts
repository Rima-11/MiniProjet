import { Component, OnInit } from '@angular/core';
import { ProduitModel } from './models/produit';
import { PanierModel } from './models/panier';
import { PanierService } from './services/panier.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showProduiit = false;
  showCommande = false;
  refreshListe = false;
  refreshComm = false;
  produit: ProduitModel;

  ngOnInit(): void {
    this.showCommande = false;
    this.showProduiit = false;
  }
 
  navBarSelection(event) {
    console.log("Nav bar selection",event)
    if (event === 1) {
      this.showProduiit = true;
    }
    else if (event === 2) {
      this.showCommande = true;
    } else {
      this.showCommande = false;
      this.showProduiit = false;
    }
  }

  refresh(event) {
    if (event) {
      this.showProduiit = false;
      this.refreshListe = true;
    }
  }

  getProduits(event) {
    this.showProduiit = true;
    this.produit = event;
  }

  refreshCom(event) {
    this.refreshComm = false;
    if(event) {
      this.refreshComm = true;
    }
  }

}
