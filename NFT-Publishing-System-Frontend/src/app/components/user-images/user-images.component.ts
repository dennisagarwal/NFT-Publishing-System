import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserimagesService } from 'src/app/services/userimages.service';
import { Image } from 'src/app/models/image';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MintNftComponent } from 'src/app/components/mint-nft/mint-nft.component'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Observable, lastValueFrom } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { Location } from '@angular/common';
import { NFT } from 'src/app/models/nft';
import { ethers } from 'ethers';
import { User } from 'src/app/models/user-model';





const firebaseConfig = {
  apiKey: "AIzaSyBh5grkgbDI9H_tvHbrxMRpGfAKfIGQCNw",
  authDomain: "stone-citizen-233922.firebaseapp.com",
  projectId: "stone-citizen-233922",
  storageBucket: "stone-citizen-233922.appspot.com",
  messagingSenderId: "210489951771",
  appId: "1:210489951771:web:58f69b23aa63e1b766dabe"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.css']
})
export class UserImagesComponent implements OnInit {
  id!: number;
  images!: Image[];
  auth: string = "";



  constructor(
     private http: HttpClient,
     private route: ActivatedRoute,
     private router:Router,
     private userImageService: UserimagesService,
     private _dialog: MatDialog,
     private _location:Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.auth = "Bearer " + localStorage.getItem('jwt');
    // remove from ngOnInit into separate function
    this.userImageService.getImagesOfUser(this.id).subscribe((response)=>{
      console.log(response)
      this.images = response;
    });

  }

  private reloadComponent() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => {
      this.router.navigate([currentUrl]);
      console.log(currentUrl);
    });
  }

  public async submitImage(input: any) {
	  /*
    this.userImageService.storeImage(
      this.id,
      input.files[0],
      this.auth
    ).subscribe(img => {
      console.log(img);
    }, err => {
      console.log(err);
    });
   */
    const imageFile = input.files[0];
    const imageRef = ref(storage, imageFile.name);

    let snapshot = await uploadBytes(imageRef, imageFile);
    let url = await getDownloadURL(imageRef);
    const image: Image = await {
          "id": 0,
          "imageURL": url,
          "author": {
            "id": this.id,
          },
        };

    let img = await lastValueFrom(this.http.post<Image>(
          "http://localhost:9090/users/" + image.author.id + "/images",
          image,
          {
            headers: new HttpHeaders({
              "Authorization": this.auth,
            }),
          }
    ));

    await this.reloadComponent();

  }

  openDialog(image:object){
    console.log(image)
    this._dialog.open(MintNftComponent,{data:image});

  }



}

