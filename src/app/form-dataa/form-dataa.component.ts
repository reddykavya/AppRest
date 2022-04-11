import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form-dataa',
  templateUrl: './form-dataa.component.html',
  styleUrls: ['./form-dataa.component.css']
})
export class FormDataaComponent implements OnInit {
 Url!: "https://jsonplaceholder.typicode.com/users";
 uploadData!:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.uploadData = this.fb.group({
      profile:['']
    });
  }
  onFileSelect(event:any){
   
  }
  onSubmit(){
    
  }

}
