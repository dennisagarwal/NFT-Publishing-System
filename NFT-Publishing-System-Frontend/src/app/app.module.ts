import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { InterceptorService } from './services/interceptor.service';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserImagesComponent } from './components/user-images/user-images.component';
import { ImagebyidComponent } from './components/imagebyid/imagebyid.component';
import { GetNFTByIdComponent } from './components/get-nftby-id/get-nftby-id.component';
import { PostNftComponent } from './components/post-nft/post-nft.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AllUsersComponent,
    UserImagesComponent,
    ImagebyidComponent,
    GetNFTByIdComponent,
    PostNftComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
