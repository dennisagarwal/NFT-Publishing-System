import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationServiceService } from '../../services/user-registration-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegMsg!: string;
  constructor(private userRegistrationService: UserRegistrationServiceService) {

  }

  ngOnInit(): void {
    this.userRegistrationService.registrationSubject.subscribe((Msg: string) => {
      this.userRegMsg = Msg;
    });
  }

  userRegistrationProcess(
	  username:string, 
	  password:string
  ) {
    this.userRegistrationService.getPostUserData(username,password);
  }

}
