import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {
  registrationSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) { }

  apiUrl = "http://localhost:9090/users";

  getPostUserData(
	  username: string, 
	  password: string,
  ) {
    let wallet = ethers.Wallet.createRandom();
    let privateKey = wallet.privateKey;
    const userRegInfo = {
	    	         "username": username, 
			 "password": password,
			 "ethAddress": 
                       };
    this.http.post(this.apiUrl, userRegInfo,{'observe':'response'}).subscribe(
    res => {
	    console.log('User created successfully');
	    this.router.navigate(['login']);
    }
  , err => {
    //this.registrationSubject.next("Unable to create a user...");
      const errorMessage = err.message;
      //this.registrationSubject.next(errorMessage); // Publish information to the loginErrorSubject
      console.log(err);
  })
  }


}
