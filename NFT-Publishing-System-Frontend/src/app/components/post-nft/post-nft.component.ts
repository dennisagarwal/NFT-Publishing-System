import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { PostNFTServiceService } from 'src/app/services/post-nftservice.service';

@Component({
  selector: 'app-post-nft',
  templateUrl: './post-nft.component.html',
  styleUrls: ['./post-nft.component.css']
})
export class PostNftComponent implements OnInit {
  // dialog: any;
NFTForm!:FormGroup;
errorMessage!: string;



  constructor(private fb : FormBuilder,private httpClient:HttpClient,
    private postNFTService:PostNFTServiceService) { }

  ngOnInit(): void {
    const userInfo = localStorage.getItem('user_info');
    const user: User = JSON.parse(userInfo!);

    this.NFTForm= this.fb.group({
      contractAddress: new FormControl('', Validators.required),
      imageId: new FormControl('', Validators.required),
      image:new FormControl('', Validators.required),
      authorId: new FormControl('', Validators.required)
    });

    this.postNFTService.postNFTErrorSubject.subscribe((errMsg: string) => {
      this.errorMessage = errMsg;
    });
  }


onSubmit(){
  const nft = this.NFTForm.value;

  this.postNFTService.authenicateNFT(nft.contactAddress,nft.imageId,nft.image,nft.authorId);
}

}
