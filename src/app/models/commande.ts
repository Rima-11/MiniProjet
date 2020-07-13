import {ProduitModel} from './produit'

export class CommandeModel {
    id: number;
    quantite: number;
    dateCommande: Date;
    prod: ProduitModel;
    prixCommande: number;

    constructor() {}
}