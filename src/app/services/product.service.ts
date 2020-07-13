import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isEdit: boolean;
  produitObj: any;
 

  constructor(private _http:HttpClient) { }


  createProduct(produit){
      return this._http.post("http://localhost:3000/produits", produit);
  }
  getAllProduct(){
    return this._http.get("http://localhost:3000/produits") 
  }
  updateProduct(produit){
    return this._http.put("http://localhost:3000/produits/" +produit.id, produit)

  }

  deleteProduct(produit){
    return this._http.delete("http://localhost:3000/produits/" +produit.id)
  }
 
}
