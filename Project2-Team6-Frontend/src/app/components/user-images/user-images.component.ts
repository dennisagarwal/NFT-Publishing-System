import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user-model';
import { ActivatedRoute } from '@angular/router';

export class allImage{
  constructor(
    public id: number,
    public image:string,
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
  id!: number;


  constructor( private httpClient: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.id= this.route.snapshot.params['id']
    this.getAllImagesbyUderId(this.id);
  }

  getAllImagesbyUderId(id:number) {

    this.httpClient
      .get<any>(`http://localhost:9090/users/${id}/images`)
      .subscribe((response) => {
      //   for(let i=0;i<response.length;i++){
      //   console.log(response[i].author.ethAddress)
      // }
      console.log(response)
        this.allImages = response;
      });
  }

}
