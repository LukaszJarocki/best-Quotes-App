import { QUOTES } from './database';
import { Quotation } from './quotation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 0;
  quotes: Quotation[] = QUOTES;//pobranie listy do klasy komponentu, do listy quotation dopisujemy QUOTES z pliku database


  addVote(quotation: Quotation, value: number){
		quotation.votes += value;
}

  //najlepsze cytaty
 worstQuotes(){
    return this.quotes.filter(q => q.votes < 0)
  }
  //najgorsze  cytaty
  bestQuotes(){
    return this.quotes.filter(q => q.votes > 0)
  }

  onNewQuotation(quotation: Quotation){
    this.quotes.unshift(quotation)
  }

}
