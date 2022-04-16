import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostNFTServiceService } from 'src/app/services/post-nftservice.service';

import { NFT } from 'src/app/models/nft';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.css']
})
export class MintNftComponent implements OnInit {
  _firstName!: string;
  _userID!:any;
  _contractAddress!:string;
  _imgID!:any;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,private postNFTService:PostNFTServiceService) {
    this._firstName=data[0].author.username;
    this._userID=data[0].author.id;
    this._contractAddress=data[0].contractAddress;
    this._imgID=data[0].id;

   }

  ngOnInit(): void {
  }

    // TODO get authorID from jwt stored in localStorage instead of from form
  // Don't actually need the image from above, only the imageId should be passed along,
  onSubmit(nftName:string,nftSymbol:string) {
    // form nft from interface and send
  
    const nft: NFT = {
      "name": nftName,
      "symbol": nftSymbol,
      "tokenId": 1,
      "contractAddress": this._contractAddress,
      "tokenUri": "storage/somePlace",
      "image": {
        "id": this._imgID,
	"author": {
	  "id": this._userID,
	},
      },
    }

    this.postNFTService.authenticateNFT(nft);
  }

}
