# NFT-Publishing-System

This is the full-stack application for an NFT publishing system

## Features

## To-Dos
- Check code in SonarQube
- Deploy backend to GCP instance using Docker image
- Set up Jenkins pipeline to automate building and deployment of backend (build, create docker image, deploy)
- Powerpoint Presentation:
  - Meet the Team
  - The Challenge: How can we enable artists to enter the emerging world of digital assets
  -  1 User story
  - Backend design: uses spring, give schema, deployed to GCP
  - Crypto design: Ethereum Goerli Test Network API, constructs NFT contracts on front end and deploys through Infura
  - UI/UX design: angular, gallery set-up
  - Task flow  
- Set up accounts with test ethers already in their wallets 

## Tech Stack
- Spring Framework
- Angular13
- PostgreSQL
- Ethereum protocol


## Getting Started
To run this app, run the following in bash
```
git clone --recursive https://github.com/dennisagarwal/NFT-Publishing-System.git
cd NFT-Publishing-System-Backend
./gradlew build
./gradlew run
```
Open a new bash in the root directory the project and run
```
cd NFT-Publishing-System-Frontend
npm install
ng serve --open
```

Have fun!

## NFT-Publishing-System-Backend

This is the backend application for an NFT publishing application

## Endpoints
- `POST /login` - receives username/password and returns JWT upon success or error on failure
- `POST /users` - receives new user info, generates user object and adds to database, returns success/failure
- `GET /users` - returns all users
- `GET /users/{user_id}` - get public profile for user, to be viewed by other users
- `GET /users/{user_id}/images` - return all images for given user
- `POST /users/{user_id}/images` - receive new image object and add to database, return success/failure
- `GET /users/{user_id}/images/{image_id}` - returns specific image object, checks for privacy attribute and if true checks valid authorization
- `DELETE /users/{user_id}` - remove user from database, but keep any images that have minted NFTs attached to them
- `POST /nfts` - add nft object to database, nft is constructed in the frontend using metamask/typescript, returns success/failure flag
- `GET /nfts/{nft_id}` - returns specific nft object
- `DELETE /nfts/{nft_id}` - deletes nft object from database, note that this does not delete the NFT from the blockchain, it is permanently stored there and we are just deleting our app's reference to it
- `PATCH /nfts/{nft_id}` - partially update nft object, used to update owner
