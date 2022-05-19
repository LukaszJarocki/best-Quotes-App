import { Quotation } from './../quotation';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  //Pole do ukrywania formularza
  showForm = true; //dzięki temu wysuwana klasa jest schowana
  //Pole quotation reprezentujące jeden cytat
  quotation: Quotation = {author: '', sentence: '', votes: 0};

  //Przełączanie klasy true/false
  onSwitchForm():void{
    this.showForm = !this.showForm //za każdym wywyołaniem odwraca wartość
  }

  //dodaje cytat na początek listy i resetuje pole quotation
  addQuotation(){
    this.newQuotation.emit(this.quotation)
    this.quotation = {author: '', sentence: '', votes: 0};
  }
}
