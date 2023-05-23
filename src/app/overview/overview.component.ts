import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {

  $statprog1: any = [
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
  ]
}
