import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app//services/product.service';
import { PanierService } from 'src/app//services/panier.service';
import { CommandesService } from 'src/app/services/commandes.service';
import { from, Subscription } from 'rxjs';
import { ProduitModel } from 'src/app/models/produit';
import { PanierModel } from 'src/app/models/panier';
import { CommandeModel } from 'src/app/models/commande';
@Component({
  selector: 'app-produiit',
  templateUrl: './produiit.component.html',
  styleUrls: ['./produiit.component.css']
})
export class ProduiitComponent implements OnInit{
  @Output() refresh = new EventEmitter<boolean>();
  @Input() produit: ProduitModel;


 
  allProduct: object;
  isEdit = false;
  produitObj= {
    name :'',
    Prix :'',
    input :'',
    id : ''

  }
  //panier: any;
  listProduit: ProduitModel[];
 ///produit: ProduitModel = new ProduitModel();
 panier: PanierModel = new PanierModel();
 prods: ProduitModel = new ProduitModel();
  paniers: PanierModel = new PanierModel();
  

  services: any;
  refreshCom: any;
  service: any;
  private subscription: Subscription[] = [];
constructor(private ProductService: ProductService,
            private serviceCommande: CommandesService,
            private PanierService: PanierService){}

ngOnChanges(changes: SimpleChanges) {
  if (this.produit !== undefined){
      this.prods = this.produit;
     }
  }              
          
ngOnInit(){
  this.getLatestProduct();
}

  ajouterProduit(formObj){
    console.log(formObj)
    this.ProductService.createProduct(formObj).subscribe(()=>{
      this.getLatestProduct();
    })
  }

  getLatestProduct(){
    this.allProduct = [] ;
    this.ProductService.getAllProduct().subscribe((Response)=>{
      this.allProduct = Response
    })
  }
  editProduct(produit){
    this.isEdit = true;
    this.produitObj = produit;

  }
  getAllProduct(){
    this.produit = new ProduitModel();
    this.listProduit = [];
    this.subscription.push(this.service.getProduits().subscribe(posts => {
      this.listProduit = posts;
      console.log(posts);
    }));
  }
 

  deleteProduct(produit){
    this.ProductService.deleteProduct(produit).subscribe(()=>{
      this.getLatestProduct();
    })
  }

  updateProduct(){
    this.isEdit =!this.isEdit;
    this.ProductService.updateProduct(this.produitObj).subscribe(()=>{
      this.getLatestProduct();
    });
  }

  addToPanier(produit: ProduitModel) {
    this.panier.id = 1;
    this.PanierService.getPanier().subscribe(panier => {
      this.listProduit = panier.produit;
      this.listProduit.push(produit);
      this.panier.produit = this.listProduit;
      this.PanierService.editPanier(this.panier).subscribe(() => {
        produit.quantite = produit.quantite - 1;
        this.ProductService.updateProduct(produit).subscribe((Response) => {
          alert("Produit " + produit.name + " ajouter au panier");
        })
      });
    });
  }
 
  addProdToCommande(produit: ProduitModel) {
    produit.quantite = produit.quantite - 1;
    this.serviceCommande.getCommande().subscribe(commds => {
     // var cmd = commds.filter(x => x.prod.id === produit.id)[0];
     /*
      if (cmd !== undefined) {
        cmd.quantite = cmd.quantite + 1;
        cmd.dateCommande = new Date();
        cmd.prixCommande = cmd.prixCommande + produit.prix;
        this.serviceCommande.updateCommande(cmd).subscribe(rslt => {
          this.ProductService.updateProduct(produit).subscribe(() => {
            alert("Commande passer avec succee");
            //this.refreshCom.emit(true);
          })       
          
        })
      } 
      */
        var commd: CommandeModel = new CommandeModel();
        commd.id = 1 ;
        commd.dateCommande = new Date();
        commd.prixCommande = +produit.prix;
        commd.prod = produit;
        commd.quantite = 1;
        this.serviceCommande.addCommande(commd).subscribe(() => {
          this.ProductService.updateProduct(produit).subscribe(() => {
            alert("Commande passer avec succee");
            //this.refreshCom.emit(true);
          })        
        });
      
    });
  }

}
