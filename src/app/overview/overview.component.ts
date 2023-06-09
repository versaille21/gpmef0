import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {

  statprog1: any = [
    {
      "nbreBien": "724",
      "id_categorie": "1",
      "lib_categorie": "Mobilier",
      "lib_Programme": "Programme 1"
  },
  {
      "nbreBien": "251",
      "id_categorie": "2",
      "lib_categorie": "Informatique",
      "lib_Programme": "Programme 1"
  }
  ] ;

 index : any = 0; // Indice de l'objet JSON auquel vous souhaitez ajouter des rubriques
 
nouvelleRubrique : any = "spanValue" ;
 valeurRubrique  = ["avatar-initial rounded bg-label-primary", "avatar-initial rounded bg-label-success", "avatar-initial rounded bg-label-info", "avatar-initial rounded bg-label-secondary" ];

 for (let index = 0 ; index .this.statprog1.length;

jsonArray[index][nouvelleRubrique] = valeurRubrique;



  let objetJson: any = JSON.parse(statprog1);



  propData : any = 
  [
    {
      "spanValue" : "avatar-initial rounded bg-label-primary",
      "classValue" : "bi bi-car-front"
    },

    {
      "spanValue" : "avatar-initial rounded bg-label-success",
      "classValue" : "bx bx-closet" 
    }, 
    {
      "spanValue" : "avatar-initial rounded bg-label-secondary",
      "classValue" : "bi bi-fan"
    }, 
    {
      "spanValue" : "avatar-initial rounded bg-label-secondary",
      "classValue" : "bx bx-football"
    }

    
 
    ];



}
