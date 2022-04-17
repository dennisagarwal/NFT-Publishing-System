import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { PostNFTServiceService } from 'src/app/services/post-nftservice.service';
import { NFT } from 'src/app/models/nft';

@Component({
  selector: 'app-post-nft',
  templateUrl: './post-nft.component.html',
  styleUrls: ['./post-nft.component.css']
})
export class PostNftComponent implements OnInit {
  // dialog: any;
  NFTForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private fb : FormBuilder,
    private httpClient:HttpClient,
    private postNFTService:PostNFTServiceService
  ) {}

  ngOnInit(): void {
    // TODO don't store user info in localStorage, or if you do 
    // remove password
    const userInfo = localStorage.getItem('user_info');
    const user: User = JSON.parse(userInfo!);

    this.NFTForm = this.fb.group({
      contractAddress: new FormControl('', Validators.required),
      imageId: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      authorId: new FormControl('', Validators.required)
    });

    this.postNFTService.postNFTErrorSubject.subscribe((errMsg: string) => {
      this.errorMessage = errMsg;
    });
  }

  // TODO get authorID from jwt stored in localStorage instead of from form
  // Don't actually need the image from above, only the imageId should be passed along,
  onSubmit() {
    // form nft from interface and send

    //this.postNFTService.authenticateNFT(nft);
  }

}
