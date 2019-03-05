import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switchdirect',
  templateUrl: './switchdirect.component.html',
  styleUrls: ['./switchdirect.component.css']
})
export class SwitchdirectComponent implements OnInit {
  
  @Input('radvalfor') public switchvar;
  constructor() { }

  ngOnInit() {
  }

}
