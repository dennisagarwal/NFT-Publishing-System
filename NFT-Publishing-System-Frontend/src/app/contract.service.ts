import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

const nftAbi = ;
const nftBytecode = ;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }

  public async mintNFT(
    wallet: object,
    nftName: string,
    nftSymbol: string
  ) {
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    let contract = await factory.deploy(); 


  }
}
