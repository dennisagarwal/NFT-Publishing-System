# NFT-Publishing-System

This is the full-stack application for an NFT publishing system


## Tech Stack
- Spring Framework
- Angular13
- PostgresSQL
- Ethereum protocol


## Getting Started
```
git clone https://github.com/dennisagarwal/NFT-Publishing-System.git
cd NFT-Publishing-System
go to localhost:4200/
npm start or ng serve in your terminal
```

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

Currently in development..
To run,

```
git clone https://github.com/polydin/NFT-Publishing-System-Backend.git
cd NFT-Publishing-System-Backend
./gradlew build
./gradlew run
```

Note: postgresql should be set up and running on localhost:5432
