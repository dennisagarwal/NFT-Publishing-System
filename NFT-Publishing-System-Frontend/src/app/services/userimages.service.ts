import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Image } from '../models/image';
import { Observable } from 'rxjs';

// Your web app's Firebase configuration
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

@Injectable({
  providedIn: 'root'
})
export class UserimagesService {

  constructor(private http: HttpClient) {}

  public getImagesOfUser(userId: number): Observable<Image[]> {
    return this.http.get<Image[]>(
      // TODO replace this with env var
      "http://localhost:9090/users/" + userId + "/images"
    )
  }

  public getImageById(
	  userId: number, 
	  imageId: number
  ): Observable<Image> {
    return this.http.get<Image>(
      // TODO replace with env var
      "http://localhost:9090/users/" + userId + "/images/" + imageId
    );
  }

  public postImage(
	  image: Image,
	  auth: string
  ): Observable<Image> {
    return this.http.post<Image>(
      "http://localhost:9090/users/" + image.author.id + "/images",
      image,
      {
        headers: new HttpHeaders({
          "Authorization": auth,
	}),
      }
    );
  }

  /*
     Takes in id of current user, image file and authorization
     string, returns on observable which on success will subscribe
     to the posted image returned by backend

     NOTE: the image files are stored in global folder in 
           Firebase, so the name MUST be unique or it will write over

     Usage:    storeImage.subscribe(img => {})
  */
   // TODO write error callbacks
  public storeImage(
	  userId: number, 
	  imageFile: File,
 	  auth: string, 
  ): Observable<Image> {
    const imageRef = ref(storage, imageFile.name);
    
    uploadBytes(imageRef, imageFile).then(snapshot => {
      console.log('File uploaded'); 
      getDownloadURL(imageRef).then(url => {
	const image: Image = {
	  "id": 0,
	  "imageURL": url,
	  "author": {
            "id": userId,
	  },
	};

        return this.postImage(image, auth);  
      }).catch(err => {
	console.log(err);
      });
    });
    return new Observable();
  }

}
