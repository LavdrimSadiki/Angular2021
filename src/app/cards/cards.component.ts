import {Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() title = '';
  @Input() imgUrl = '';
  @Input() content = '';
  @Input() username = '';

  constructor() { }

  ngOnInit(): void {
  }

}
