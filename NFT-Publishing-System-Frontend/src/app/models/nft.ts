export interface NFT {
  name: string;
  symbol: string;
  tokenId: number;
  contractAddress: string;
  tokenUri: string;
  image: {
    id: number;
    author: {
      id: number;
    }
  }
}

