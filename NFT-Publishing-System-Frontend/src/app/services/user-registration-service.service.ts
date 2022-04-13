import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {
  registrationSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:9090/users";

   getPostUserData(username:string, password:string) {
    const userRegInfo={"username": username, "password": password }
   this.http.post(this.apiUrl, userRegInfo,{'observe':'response'}).subscribe(
    res => {
      this.registrationSubject.next("User registered successfully!!!");
    }
  , err => {
    //this.registrationSubject.next("Unable to create a user...");
    alert("failure");
      const errorMessage = err.message;
      this.registrationSubject.next(errorMessage); // Publish information to the loginErrorSubject
  })
  }


}
