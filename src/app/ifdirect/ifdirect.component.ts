import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirect',
  templateUrl: './ifdirect.component.html',
  styleUrls: ['./ifdirect.component.css']
})
export class IfdirectComponent implements OnInit {
  public ifd;

  constructor() { }

  ngOnInit() {
  }
  makeFalse(){
    this.ifd=false;
  }
  makeTrue(){
    this.ifd=true;
  }

}
