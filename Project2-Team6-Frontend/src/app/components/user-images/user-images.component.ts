import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class allImage{
  constructor(
    public id: number,
    public image:any,
    public author: any,
    public contactAddress:string
  ) { }
}

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.css']
})
export class UserImagesComponent implements OnInit {
  allImages!: allImage[];


  constructor( private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages() {
    this.httpClient
      .get<any>('http://localhost:9090/users/2/images')
      .subscribe((response) => {
        // console.log(response)
        this.allImages = response;
      });
  }

}
