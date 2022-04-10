import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { InterceptorService } from './services/interceptor.service';
import { AllUsersComponent } from './components/all-users/all-users.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // RegisterComponent,
    // DashboardComponent,
    UserComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
