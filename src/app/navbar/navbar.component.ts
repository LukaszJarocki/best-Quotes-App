import { Component, Input } from '@angular/core';
import { Quotation } from '../quotation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  title?: string;
}
