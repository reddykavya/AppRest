import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempalate',
  templateUrl: './tempalate.component.html',
  styleUrls: ['./tempalate.component.css']
})
export class TempalateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  genders = ['male', 'female'];
  
  userData = {
    username: '',
    email: '',
    country: '',
    gender: ''
  };
  submitted = false;

  
onSubmit(form: { reset: () => void; },formData: any) {
    console.log('submitted formdata',formData);  
    
    alert('Form submitted successfully');
    
    form.reset();
  }
}


