import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserimagesService } from 'src/app/services/userimages.service';
import { Image } from 'src/app/models/image';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import{MintNftComponent} from 'src/app/components/mint-nft/mint-nft.component'



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
     private router:Router,
     private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.userImageService.getImagesOfUser(this.id).subscribe((response)=>{
      console.log(response)
        this.images = response;
    })


  }


  openDialog(){
    this._dialog.open(MintNftComponent,{data:{name:'Lokesh'}});
  }

}

