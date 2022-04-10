// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Injectable, resolveForwardRef } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, Subject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { LoginComponent } from '../components/login/login.component';
// import { User } from '../models/user-model';
// import { UserImages } from '../models/userimages';

// @Injectable({
//   providedIn: 'root'
// })
// export class AllUsersService {

//   loginErrorSubject: Subject<string> = new Subject<string>();

//   constructor(private client: HttpClient, private router: Router) { }

//   getUserInfoFromJwt(): Observable<HttpResponse<UserImages>> {
//     return this.client.get<UserImages>(`${environment.BACKEND_URL}/${id}/image`, {
//       'observe': 'response',
//       'headers': {
//         'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//       }
//     });
//   }

// }
