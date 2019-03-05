import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public noteCount;
  public noteText="";
  notes=[];
  constructor() { }

  ngOnInit() {
    this.noteCount=this.notes.length;
  }
  addNote(){
    this.notes.push(this.noteText);
    this.noteCount=this.notes.length;
    this.noteText='';
  }
  removeNote(i){
    this.notes.splice(i,1);
    this.noteCount=this.notes.length;
  }

}
