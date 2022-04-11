import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export class allNFT {
  constructor(
    public id: number,
    public symbol: string,
    public contactAddress: string,
    public name: string,
    public tokenId: string,
    public owner: string,
    public tokenUri: string,
    public author: object

  ) {}
}

@Component({
  selector: 'app-get-nftby-id',
  templateUrl: './get-nftby-id.component.html',
  styleUrls: ['./get-nftby-id.component.css'],
})
export class GetNFTByIdComponent implements OnInit {
  allNFT!:any;
  id!:number;

  constructor(private httpClient: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.id= this.route.snapshot.params['id']
    this.getAllNFTs(this.id);
  }

  getAllNFTs(id:number) {
    this.httpClient
      .get<any>(`http://localhost:9090/nfts/${id}`)
      .subscribe((response) => {
        console.log(response)
        this.allNFT = response;
      });
  }

}
