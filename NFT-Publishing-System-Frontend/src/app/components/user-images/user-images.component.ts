import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserimagesService } from 'src/app/services/userimages.service';
import { Image } from 'src/app/models/image';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.css']
})
export class UserImagesComponent implements OnInit {
  id!: number;
 images!: Image[];


  constructor( private httpClient: HttpClient,
     private route:ActivatedRoute,
     private userImageService:UserimagesService,
     private router:Router) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.userImageService.getImagesOfUser(this.id).subscribe((response)=>{
      console.log(response)
        this.images = response;
    })


  }



}

