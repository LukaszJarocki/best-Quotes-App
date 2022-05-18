import { QUOTES } from './database';
import { Quotation } from './quotation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false; //dzięki temu wysuwana klasa jest schowana
  quotes: Quotation[] = QUOTES;//pobranie listy do klasy komponentu, do listy quotation dopisujemy QUOTES z pliku database

  onSwitchForm():void{
    this.showForm = !this.showForm //za każdym wywyołaniem odwraca wartość
  }
}
