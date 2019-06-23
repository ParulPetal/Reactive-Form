import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ValidationErrors } from '@angular/forms';
import { PasswordValidator } from './passwordvalidator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) { 


  this.form = this.fb.group({
    firstName: ['',[ Validators.required,Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['',Validators.required],
     cnfpassword: ['', Validators.required]
 }, { validator: PasswordValidator });



  }

  onSubmit() {

    if (this.form.valid ) {
      alert('SUCCESS!! :-)');
       this.form.reset();
    }

  }




}

