import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartConfiguration  } from 'chart.js';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Club} from '../../_models/club';

@Component({
  selector: 'app-club-measure',
  templateUrl: './club-measure.component.html',
  styleUrls: ['./club-measure.component.scss'],
  animations: [
      trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ]),
    ],
})
export class ClubMeasureComponent implements OnInit {

  @Input()
  club?:Club;

  panelOpenState = false;

  //progressbar attributes
  progressBarValue=40;
  progressTooltip: string='';

  //bar chart attributes
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartConfiguration<'bar'>['data'];
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  //pie chart attributes
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels = [ 'Fußabdruck', 'Geldabdruck' , 'Handabdruck'];
  pieChartDatasets = [ {
    data: [ 300, 500, 100]
  } ];
  pieChartLegend = false;
  pieChartPlugins = [];

  tableData = ELEMENT_DATA;
  columnsToDisplay = ['Typ', 'Titel', 'Relative Ersparnis', 'Kosten pro Einheit', 'ROI', 'Stakeholder'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Measure | null;

  constructor() { }

  /**
  * initialize barChart and progressbar
  */
  ngOnInit(): void {
    this.progressBarValue = this.createRandomNumber(30, 80);
    this.progressTooltip = this.progressBarValue + '% bereits eingespart!';

    this.barChartData = {
                              labels: [ 'Energieeffizenz',
                                        'Wassereffizient',
                                        'Konsum Reduktion',
                                        'Nahrungsmittel',
                                        'Dienstleistungen',
                                        'Umwelteinflüsse'
                                        ],
                              datasets: [
                                { data: [ this.createRandomNumber(0,100),
                                          this.createRandomNumber(0,100),
                                          this.createRandomNumber(0,100),
                                          this.createRandomNumber(0,100),
                                          this.createRandomNumber(0,100),
                                          this.createRandomNumber(0,100)
                                          ], label: 'Energieeffizenz' },
                              ]
                            };
  }

  createRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}

/*
* Measure interface for display - this is data is part of the stakeholder carbon footprint system
* and should be read from there
*/
export interface Measure {
  type: string;
  title: string;
  savings: string;
  costs: string;
  roi: number;
  stakeholder: string;
  description: string;
}

const ELEMENT_DATA: Measure[] = [
  {
    type: 'Energieeffizenz',
    title: 'LED Umrüsten',
    savings: '20%',
    costs: '10€',
    roi: 4,
    stakeholder: 'Max Mustermann',
    description: `Durch das Umrüsten normaler Leuchtmittel auf LEDs auf den
    Allgemein- und Mietflächen konnten 520.000 kWh gespart werden.`
  },
  {
      type: 'Wassereffizient',
      title: 'Wassersparmaßnahmen im Hotelsektor',
      savings: '12%',
      costs: '13€',
      roi: 6,
      stakeholder: 'Anne Petersen',
      description: `Durch die Installation von moderner Durchlauferhitzer konnte effizienter
      warmes Wasser erzeugt werden, ohne lange Wasservorlaufzeiten.`
    }
  ];
