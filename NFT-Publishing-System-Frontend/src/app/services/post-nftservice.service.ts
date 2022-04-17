import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { UserInfo } from '../models/user-info';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NFT } from '../models/nft';

// TODO combine postNFT and getNFT logic into single service file named nft.service.ts
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
    debugger;
    this.http.post<NFT>(
      `${environment.BACKEND_URL}/nfts`, 
      nft, 
      this.httpOptions
    ).subscribe(
      (res) => {
        this.router.navigate(['nfts']);
      },
      (err) => {
        alert("Failure");
        const errorMessage = err.error;
        console.log(err);
        // this.postNFTErrorSubject.next(errorMessage); // Publish information to the loginErrorSubject
      }
    );
  }

  postMintNFT(nft: NFT) {
    this.http.post<NFT>(
      `${environment.BACKEND_URL}/nfts`, 
      nft, 
      this.httpOptions
    ).subscribe(
      (res) => {
        const url='allusers/'+res.image.author.id+'/images';
        this.router.navigateByUrl(url);
      },
      (err) => {
        const errorMessage = err.error;
        console.log(err);
        // this.postNFTErrorSubject.next(errorMessage); // Publish information to the loginErrorSubject
      }
    );
  }

  
}
