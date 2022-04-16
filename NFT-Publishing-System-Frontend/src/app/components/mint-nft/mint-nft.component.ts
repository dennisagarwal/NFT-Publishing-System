import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.css']
})
export class MintNftComponent implements OnInit {
  firstName='';
  constructor( @Inject(MAT_DIALOG_DATA) public data:any) {
    this.firstName=data.name;
   }

  ngOnInit(): void {
  }

}
