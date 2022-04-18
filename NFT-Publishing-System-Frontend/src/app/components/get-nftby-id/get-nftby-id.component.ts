import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export class allNFT {
  constructor(
    public id: number,
    public symbol: string,
    public contactAddress: string,
    public name: string,
    public tokenId: string,
    public owner: string,
    public tokenUri: string,
    public image: any

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
  deleteId!:number;

  constructor(private httpClient: HttpClient, private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.id= this.route.snapshot.params['id']
    this.getAllNFTs(this.id);
  }

  getAllNFTs(id:number) {
    const apiUrl =`${environment.BACKEND_URL}/nfts/${id}`;
    this.httpClient
      .get<any>(apiUrl)
      .subscribe((response) => {
        console.log(response)
        this.allNFT = response;
      });
  }

  onDelete(id:number) {
    const apiUrl =`${environment.BACKEND_URL}/nfts/${id}`;
    this.httpClient
      .delete<any>(apiUrl)
      .subscribe((response) => {
        console.log(response)
       this.ngOnInit()

      });
  }
  newChange(id:number): void {
    this.router.navigateByUrl('nfts/${id}');
}



}
