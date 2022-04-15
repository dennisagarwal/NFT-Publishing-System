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

  // To generate image name, use username and specific name of file
  // combined to create unique filename
  public uploadImage(image: File) {
    const imageRef = ref(storage, image.name);

    uploadBytes(imageRef, image).then((snapshot) => {
      // console.log('Upload', snapshot.totalBytes, 'bytes.');
      getDownloadURL(snapshot.ref).then(url => {
        console.log('File available at', url);
      });
    }).catch(error => {
      console.error('Upload failed:', error);
    });
  }

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
	  userId: number, 
	  image: Image,
	  auth: string
  ): Observable<Image> {
    return this.http.post<Image>(
      "http://localhost:9090/users/" + userId + "/images",
      image,
      {
        headers: new HttpHeaders({
          "Authorization": auth,
	}),
      }
    )
  }

}
