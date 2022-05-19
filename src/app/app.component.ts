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
  showForm = false; //dzięki temu wysuwana klasa jest schowana
  quotes: Quotation[] = QUOTES;//pobranie listy do klasy komponentu, do listy quotation dopisujemy QUOTES z pliku database
  quotation: Quotation = {author: '', sentence: '', votes: 0};
  onSwitchForm():void{
    this.showForm = !this.showForm //za każdym wywyołaniem odwraca wartość
  }

  addQuotation(){
    this.quotes.unshift(this.quotation)
    this.quotation = {author: '', sentence: '', votes: 0};
  }

  addVote(quotation: Quotation, value: number){
		quotation.votes += value;
}
}
