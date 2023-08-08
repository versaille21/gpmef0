import { Component, OnInit } from '@angular/core';
import { ColorPipe } from '../pipes/ColorCustomPipe.pipe';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  allProgram: any[] = [
    {
      id_Programme: '1',
      lib_Programme: 'Programme 1',
      intitule_programme: 'ADMINISTRATION GENERALE',
    },
    {
      id_Programme: '2',
      lib_Programme: 'Programme 2',
      intitule_programme:
        'GESTION MACROECONOMIQUE ET POLITIQUE ECONOMIQUE ET FINANCIERE',
    },
    {
      id_Programme: '3',
      lib_Programme: 'Programme 3',
      intitule_programme: 'TRESOR ET COMPTABILITE PUBLIQUE',
    },
    {
      id_Programme: '4',
      lib_Programme: 'Programme 4',
      intitule_programme: 'GESTION DES FINANCEMENTS',
    },
  ];

  ngOnInit(): void {
    //console.log(first)
  }
}
