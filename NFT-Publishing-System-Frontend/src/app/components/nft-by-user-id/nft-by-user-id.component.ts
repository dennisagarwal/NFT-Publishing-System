import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NFT } from 'src/app/models/nft';
import { environment } from 'src/environments/environment';



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

  getAllNftsByUserId(id:number){
    const apiUrl =`${environment.BACKEND_URL}/users/${this.id}/nfts`;

    this.httpClient.get<NFT[]>(apiUrl)
    .subscribe((response: any)=>{
      console.log(response)
      this.nfts =response;
    })

  }

}






