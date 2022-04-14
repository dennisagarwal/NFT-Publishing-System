import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { UserInfo } from '../models/user-info';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NFT } from '../models/nft';

@Injectable({
  providedIn: 'root',
})
export class PostNFTServiceService {
  postNFTErrorSubject: Subject<string> = new Subject<string>();

  constructor(private client: HttpClient, private router: Router) {}

  nftObject = {
    contractAddress: 'gfsssssddrdddfgddfgdf',
    image: {
      id: 10,
      image: 'ffffffffffffffffffffffffffffffffffffffff',
      author: {
        id: 251
      },
    },
  };

  authenicateNFT(
    _contractAddress: string,
    _imageId: any,
    _image: any,
    _authorId: any
  ) {

    this.client
      .post<NFT>(
        `${environment.BACKEND_URL}/nfts`,
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

        {
          observe: 'response', // This option tells httpClient to give us the entire HttpResponse instead of just the response body,
          // which is what it would have done by default
        }
      )
      .subscribe(
        (res) => {
          const jwt = res.headers.get('token');
          localStorage.setItem('jwt', jwt!);

          localStorage.setItem('user_info', JSON.stringify(res.body));
          console.log(localStorage.getItem('user_info'));
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
