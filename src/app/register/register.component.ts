import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup, Validators} from '@angular/forms';
import { MustMatch } from '../Helpers/matching';
import { AuthService } from '../services/auth.service';
import { User } from '../Logic/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user:User;
  constructor(private formBuilder:FormBuilder , private httpService:AuthService , private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required,Validators.minLength(6)],
      confirmPassword:['',Validators.required]
    },{
      validators:MustMatch('password','confirmPassword')
    });
  }
   

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    /*this.user.email = this.registerForm.value.email;
    this.user.firstName = this.registerForm.value.firstName;
    this.user.lastName = this.registerForm.value.lastName;
    this.user.password = this.registerForm.value.password; */
   console.log(this.registerForm.value);
   this.httpService.Register(this.registerForm.value).subscribe((data:any)=>{
    
   });

}

  
}
