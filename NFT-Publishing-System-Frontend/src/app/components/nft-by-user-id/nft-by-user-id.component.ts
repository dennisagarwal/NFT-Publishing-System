import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NFT } from 'src/app/models/nft';



@Component({
  selector: 'app-nft-by-user-id',
  templateUrl: './nft-by-user-id.component.html',
  styleUrls: ['./nft-by-user-id.component.css']
})
export class NftByUserIdComponent implements OnInit {
id!:number;
nfts! :NFT[];
  userId!: number;
  constructor(private httpClient: HttpClient,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getAllNftsByUserId(this.id)
  }

  getAllNftsByUserId(userId:number){

    this.httpClient.get<NFT[]>("http://localhost:9090/users/" + this.userId + "/nfts")
    .subscribe((response: any)=>{
      console.log(response)
      this.nfts =response;
    })
  }

}


