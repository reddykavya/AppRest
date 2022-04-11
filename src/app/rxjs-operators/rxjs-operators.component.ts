import { Component, OnInit, Pipe } from '@angular/core';
import { from ,Observable, of} from 'rxjs';
import {  filter, first, last, map, max, min } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  arr1 = [1,2,5,8,9];
  

  //of :-----------
  person:Observable<string[]> = of(['A','B','C','D'])

  //min & max:-----------

  ranks = [1, 2, 3, 4, 9, 45, 23, 87, 98, 21, 32, 43];
  ranksData:Observable<number> = from(this.ranks);
  ranksDataMax:Observable<number> = from(this.ranks);

  //first:------
  catData = [1, 2, 3, 4, 9, 45, 23, 87, 98, 21, 32, 43];
  catobj:Observable<number> = from(this.catData);

   // taking observable 
  myobservable = from(this.arr1);

  //map
  transformData = this.myobservable.pipe(map((val)=>{
    return val* 5;
  }))

  //filter
    filterData= this.transformData.pipe(filter((val) => {
     return val <= 30;
    }))



  ngOnInit(){

this.filterData.subscribe((val)=>{
  console.log(val);
},(err)=>{
  alert(err.message);
}, ()=>{
  // alert('observable has complete emitting all values');
});

//of operator:
this.person.subscribe(data =>{
  console.log(data)
})

//min operator:
this.ranksData.pipe(min()).subscribe(data =>{
  console.log('minimum value is:' +data)
})

//max operator:
this.ranksDataMax.pipe(max()).subscribe(data =>{
  console.log('maximum value is:' +data)
})

// first operator:
this.catobj.pipe(first()).subscribe(dataone =>{
  console.log('first value is:' +dataone)
})

// last operator:
this.catobj.pipe(last()).subscribe(dataone =>{
  console.log('last value is:' +dataone)
})

  }

}
