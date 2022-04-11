import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserveService } from '../myserve.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  firstname:string ='';
  lastname:string = '';
  address:string = '';
  

  constructor(private api:MyserveService) { }

  ngOnInit(): void {
  }

  loadValues(formValue: NgForm){
    let userDetails = {
      firstname:'amazon',
      lastname:'asdd',
      address:''
    }
    formValue.setValue(userDetails);
  }
  addForm(formValue: NgForm){
    console.log(formValue.value);

    const postBody = {
      title:formValue.value.firstname,
      body:formValue.value.address
    };
    // console.log(postBody);

    this.api.postUser(postBody).subscribe(data =>{
      console.log(data)
    },(err)=>{
        console.log("unable to add " +err);
    })
  }

  resetForm(formValue: NgForm){
    formValue.resetForm();
  }

}
