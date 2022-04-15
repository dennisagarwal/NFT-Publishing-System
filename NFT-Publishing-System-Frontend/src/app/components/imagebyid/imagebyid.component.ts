import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image';
import { UserimagesService } from 'src/app/services/userimages.service';


@Component({
  selector: 'app-imagebyid',
  templateUrl: './imagebyid.component.html',
  styleUrls: ['./imagebyid.component.css']
})
export class ImagebyidComponent implements OnInit {
 image!: Image;
  id1!: number;
  id2!: number;

  constructor(private httpClient: HttpClient,
    private route:ActivatedRoute,
    private userImageService:UserimagesService) { }

  ngOnInit(): void {
    this.id1= this.route.snapshot.params['id1']
    this.id2= this.route.snapshot.params['id2']
    this.userImageService.getImageById(this.id1,this.id2)
    .subscribe((response) => {
      console.log(response)
      this.image= response;
    });
  }
  }

