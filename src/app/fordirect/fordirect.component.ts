import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fordirect',
  templateUrl: './fordirect.component.html',
  styleUrls: ['./fordirect.component.css']
})
export class FordirectComponent implements OnInit {

  public colors=["Red","Blue","Green","Orange","Yellow","White"];
  public switchCases=['first','second','third','fourth','fifth'];
  public radioval;
  @Output() public radioEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendradval(){
    this.radioEvent.emit(this.radioval);
  }
}
