import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomPipe } from '../custom.pipe';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  
  currentdate = new Date();
  percentdata = 0.656;
   persons: any[]=[
     {
       ID:'01',Name:'Agshgh',DOB:'12-2-2000',Gender:'Female',phonenum:'8972867867'
     },
     {
        ID:'02',Name:'hjghj',DOB:'13-2-1998',Gender:'male',phonenum:'7897286478'
     },
     {
      ID:'03',Name:'yurtt',DOB:'16-2-1999',Gender:'female',phonenum:'7867567567'
   },
   {
    ID:'04',Name:'ewqwe',DOB:'18-2-2001',Gender:'female',phonenum:'7867867678'
 },
 {
  ID:'05',Name:'oiuo',DOB:'13-2-2001',Gender:'male',phonenum:'6756455645'
},
     

   ]

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedroute.snapshot.data)
     
  }

}

// pure pipes
const addpure = (v1:any,v2:any)=>{
     
  return v1+v2 
 };

 console.log(addpure(1,1));

 // impure pipes

 
