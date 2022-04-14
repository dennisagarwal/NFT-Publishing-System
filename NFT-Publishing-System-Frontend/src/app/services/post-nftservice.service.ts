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
  // loginErrorSubject: Subject<string> = new Subject<string>();
  postNFTErrorSubject:Subject<string> = new Subject<string>();

  constructor(private client: HttpClient, private router: Router) {}

  // getUserInfoFromJwt(): Observable<HttpResponse<UserInfo>> {
  //   return this.client.get<UserInfo>(`${environment.BACKEND_URL}/users`, {
  //     observe: 'response',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //     },
  //   });
  // }

  authenicateNFT(
    contractAddress: string,
    imageId: number,
    image: any,
    authorId: number
  ) {
    this.client
      .post<NFT>(
        `${environment.BACKEND_URL}/nfts`,
        {
          contractAddress: contractAddress,
          imageId: imageId,
          image: image,
          authorId:  authorId
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
          this.postNFTErrorSubject.next(errorMessage); // Publish information to the loginErrorSubject
        }
      );
  }
}
