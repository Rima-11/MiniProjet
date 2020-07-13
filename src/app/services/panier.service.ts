import { Injectable } from '@angular/core';
import { PanierModel } from '../models/panier';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  
constructor(private http: HttpClient) { }

  getPanier(): Observable<PanierModel> {
    return this.http.get<PanierModel>('http://localhost:3000/panier');
  }

  editPanier(panier: PanierModel): Observable<PanierModel> {
    return this.http.put<PanierModel>('http://localhost:3000/panier', panier);
  }

  postPanier(panier: PanierModel): Observable<PanierModel> {
    return this.http.post<PanierModel>('http://localhost:3000/panier', panier);
  }
}
