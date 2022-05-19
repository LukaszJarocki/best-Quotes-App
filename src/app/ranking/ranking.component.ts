import { Quotation } from './../quotation';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent  {

  @Input() //zmieniamy pole w klasie na property, do których możemy bindować wartości
  quotes?: Quotation[];
  @Input()
  title?: string;
}
