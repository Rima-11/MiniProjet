import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandeModel } from '../models/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http:HttpClient) { }
  /**
   * afficher tout commande
   */
  getCommande(): Observable<CommandeModel[]> {
    return this.http.get<CommandeModel[]>('http://localhost:3000/commande');
  }

  /**
   * 
   * @param idCommande afficher une commande par son identifiant unique
   */
  getCommandeById(idCommande: number): Observable<CommandeModel[]> {
    return this.http.get<CommandeModel[]>('http://localhost:3000/commande/' + idCommande);
  }

  /**
   * 
   * @param commande ajouter une commande
   */
  addCommande(commande: CommandeModel): Observable<CommandeModel> {
    return this.http.post<CommandeModel>('http://localhost:3000/commande', commande);
  }

  /**
   * 
   * @param commande modifier une commande
   */
  updateCommande(commande:CommandeModel): Observable<CommandeModel> {
    return this.http.put<CommandeModel>('http://localhost:3000/commande/' + commande.id, commande);
  }

  /**
   * 
   * @param idCommande supprimer une commande
   */
  deleteCommande(idCommande: number) {
    return this.http.delete('http://localhost:3000/commande/' + idCommande);
  }
}
