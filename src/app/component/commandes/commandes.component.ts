import { Component, OnInit, Input } from '@angular/core';
import { CommandesService } from 'src/app/services/commandes.service'
import { from } from 'rxjs';
import { CommandeModel } from 'src/app/models/commande';
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor( private service: CommandesService) { }
  @Input() refreshComm: boolean;
  commandes:CommandeModel[];
  prixTotale: number =0;


  ngOnInit() {
    this.service.getCommande().subscribe(cmds => {
      this.commandes = cmds;
      this.prixTotale = 0;
      for (var i=0 ; i < cmds.length ; i++) {
        this.prixTotale = this.prixTotale + cmds[i].prixCommande;
      }
    })
  }

}
