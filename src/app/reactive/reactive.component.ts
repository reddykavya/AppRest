import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  registerForm:any;
  isSubmitted!:false;
  
  constructor(private router:Router) { 

  } 

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      "gender": new FormControl('', Validators.required)
    })
  }


  submitData(){

alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
this.router.navigate(['/dashboard']);
this.registerForm.reset();


if (this.registerForm.invalid) {
  return;
}
  }
   
  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');  
  }
  get mobileNumber(){
    return this.registerForm.get('mobileNumber');
  }
  
  get gender(){
    return this.registerForm.get('gender');
  }

 

}
