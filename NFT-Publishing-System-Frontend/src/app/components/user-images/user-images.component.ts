import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserimagesService } from 'src/app/services/userimages.service';
import { Image } from 'src/app/models/image';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import{MintNftComponent} from 'src/app/components/mint-nft/mint-nft.component'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';

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
     private userImageService: UserimagesService,
     private _dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.auth = "Bearer " + localStorage.getItem('jwt');
    // remove from ngOnInit into separate function
    this.userImageService.getImagesOfUser(this.id).subscribe((response)=>{
      console.log(response)
      this.images = response;
    })


  }

  public submitImage(input: any) {
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

    uploadBytes(imageRef, imageFile).then(snapshot => {
      console.log('File uploaded');
      return getDownloadURL(imageRef);
    })
    .then(url => {
        const image: Image = {
          "id": 0,
          "imageURL": url,
          "author": {
            "id": this.id,
          },
        };

	this.http.post<Image>(
          "http://localhost:9090/users/" + image.author.id + "/images",
          image,
          {
            headers: new HttpHeaders({
              "Authorization": this.auth,
            }),
          }
        ).subscribe(img => { console.log(img); });
    }).catch(err => {
        console.log(err);
    });

  }

  openDialog(){
    this._dialog.open(MintNftComponent,{data:this.images});
  }

}

