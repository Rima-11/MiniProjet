import { Component, OnInit } from '@angular/core';
import { ProduitModel } from 'src/app/models/produit';
import { PanierModel } from 'src/app/models/panier';
import { from } from 'rxjs';
import { PanierService } from 'src/app/services/panier.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panierproduit : ProduitModel[];
  panier: PanierModel;
  panierCommandes: any[];
  servicePanier: any;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    
    this.panierService.getPanier().subscribe(panier => {
      this.panier = panier;
      this.panierproduit = panier.produit;
    });
  }
 
}
