import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserImagesComponent } from './components/user-images/user-images.component';
import {ImagebyidComponent} from './components/imagebyid/imagebyid.component';
import {GetNFTByIdComponent} from './components/get-nftby-id/get-nftby-id.component'
import {RegisterComponent} from './components/register/register.component';
import {PostNftComponent} from './components/post-nft/post-nft.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users',component: UserComponent },
  { path: 'allusers',component: AllUsersComponent },
  { path:'users/:id/images',component: UserImagesComponent },
  { path:'users/:id1/images/:id2',component: ImagebyidComponent },
  { path:'nfts/:id',component: GetNFTByIdComponent },
  { path:'register',component:RegisterComponent},
  { path:'nfts',component:PostNftComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

