import { MyserveService } from './../myserve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  mealsData :any=[];
  mealsDataOne: any;
  mealsData2: any;
  users:any;
  constructor(private http:MyserveService) { }

  ngOnInit(): void {
    // console.log("jhgshd")
   
    // this.http.getmeals().subscribe(data => {
      
    //    this.mealsData = data;
      
    //    console.log(this.mealsData);
     
    // });

    this.http.getUsers().subscribe(data =>{
      this.users = data;
    })
  
  }

}
