import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
 message:string='';
 count:number = 0;
   constructor() { }

   increase(){
    this.count = this.count+1;
    this.message = "counter"+this.count;
   }

   decrease(){
    this.count = this.count-1;
    this.message = "counter"+this.count;8
   }

  ngOnInit(): void {
  }

}
