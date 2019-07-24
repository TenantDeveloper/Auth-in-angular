import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
submitted = false;
  constructor(private formBuilder:FormBuilder , private authService : AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
debugger;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.authService.Login(this.loginForm.value).subscribe(data => console.log(data));
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}
}
