import { ViewchildComponent } from './../viewchild/viewchild.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewparent',
  templateUrl: './viewparent.component.html',
  styleUrls: ['./viewparent.component.css']
})
export class ViewparentComponent implements OnInit {
  @ViewChild(ViewchildComponent)childcomp!: ViewchildComponent;

  calIncrement(){
    this.childcomp.increase();
  }

  calDecrement(){
    this.childcomp.decrease();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
