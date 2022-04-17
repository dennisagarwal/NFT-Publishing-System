export interface NFT {
  id: number;
  name: string;
  symbol: string;
  contractAddress: string;
  tokenUri: string;
  image: {
    id: number;
    author: {
      id: number;
    }
  }
}

