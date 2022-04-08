import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
    // Use injector to access any service available within your application

  constructor(private authService: AuthServiceService, private router:Router) {}

  ngOnInit(): any {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe((result) => {
        if (result.userRole=="manager"||result.userRole=="employer") {
          console.log(result);
          // alert(result);
          this.router.navigate(['/user'])
        }
        // else if (result.userRole=="manager"||result.userRole=="employer") {

        // }
      });
    }
  }
}
