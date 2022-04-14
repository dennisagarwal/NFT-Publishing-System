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

  // TODO find NFT model and check structure
  authenicateNFT(_contractAddress: string,
    		_imageId: any,
    		_image: any,
    		_authorId: any) {
			console.log(this.httpOptions);
    this.http.post<NFT>(`${environment.BACKEND_URL}/nfts`, 
	{
          contractAddress:  _contractAddress,
          image: {
            id: _imageId,
            image: _image,
            author: {
              id:  _authorId
            },
          },
        },
	  this.httpOptions).subscribe(
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
