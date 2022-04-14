import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { UserInfo } from '../models/user-info';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NFT } from '../models/nft';

@Injectable({
  providedIn: 'root',
})
export class PostNFTServiceService {
  postNFTErrorSubject: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}

  jwt = localStorage.getItem('jwt');

  httpOptions = {
    headers: new HttpHeaders({
	    'Authorization': 'Bearer ' + this.jwt
    })
  };

  authenticateNFT(nft: NFT) {
    this.http.post<NFT>(
      `${environment.BACKEND_URL}/nfts`, 
      nft, 
      this.httpOptions
    ).subscribe(
      (res) => {
        this.router.navigate(['nft']);
      },
      (err) => {
        const errorMessage = err.error;
        console.log(err);
        // this.postNFTErrorSubject.next(errorMessage); // Publish information to the loginErrorSubject
      }
    );
  }
}
