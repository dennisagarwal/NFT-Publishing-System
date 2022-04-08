import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): any {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      "username": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required]),
    });
  }
  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe((result) => {
        if (result.userRole=="manager"||result.userRole=="employer") {
          console.log(result);
          alert(result);
        }
      });
    }
  }
}
