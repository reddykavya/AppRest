import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiv',
  templateUrl: './directiv.component.html',
  styleUrls: ['./directiv.component.css']
})
export class DirectivComponent implements OnInit {
  isDirty = true;
  heading = 'one'
number =97;
isClicked =false;
check=true;
foods =['milk','tea','cofee'];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isClicked = true;
  }
  btnclick(){
    alert("hai")
  }
}
