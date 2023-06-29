import { Component, OnInit } from '@angular/core';
import { OverviewService } from '../services/overviews.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(private overviewService: OverviewService) {
    this.addNewAttribute();
  }

  ngOnInit(): void {
    this.overviewService
      .getStatProg1()
      .subscribe((data: any) => (this.statprog1 = data));
  }
  statprog1: any = [];

  nouvelleRubrique: string = 'spanValue';
  valeurRubrique: string[] = [
    'avatar-initial rounded bg-label-primary',
    'avatar-initial rounded bg-label-success',
    'avatar-initial rounded bg-label-info',
    'avatar-initial rounded bg-label-secondary',
  ];

  nouvelleRubrique2: string = 'spanPictoValue';
  valeurRubrique2: string[] = [
    'bi bi-home-alt',
    'bx bx-mobile-alt',
    'bi bi-car-front',
    'bx bx-football',
  ];

  addNewAttribute() {
    for (let index = 0; index < this.statprog1.length; index++) {
      this.statprog1[index][this.nouvelleRubrique] = this.valeurRubrique[index];
      this.statprog1[index][this.nouvelleRubrique2] =
        this.valeurRubrique2[index];

      // };
    }
  }
}
