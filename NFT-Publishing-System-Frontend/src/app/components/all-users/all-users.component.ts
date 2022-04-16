import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {faker}  from '@faker-js/faker';
import {MatDialog} from '@angular/material/dialog';
import { UserImagesComponent } from '../user-images/user-images.component';

export class alluser{
  constructor(
    public id: number,
    public username:string,
    public password: string,
    public ethAddress:string,

  ) { }
}

export class randomUser{
  constructor(
    public fakeImage: string,
    public fakePhone:string,

  ) { }
}



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  allusers!: alluser[];
  mediaSub! : Subscription;
  randomUsers:randomUser[]=[]
  id1!:number;

  // constructor(private allUsersService: AllUsersService, private router: Router,
  //   private httpClient: HttpClient) {}
    constructor( private httpClient: HttpClient,
      private router:Router,
      private _dialog: MatDialog) {

    }

  ngOnInit(): void {

    // const userInfo = localStorage.getItem('user_info');
    // alluser!: AllUser[];
    // const alluser: AllUser = JSON.parse(alluser);

    // this.allUsersService.getUserInfoFromJwt().subscribe(
    //   (res: any) => {
    //     const allusers: AllUser = res.body;
    //     console.log(allusers)

        // console.log(res)
        // this.allusers=res.body
        // this.authorFirst=allusers.authorFirst
                // this.AllUsers = Response;
        // this.username = user.username;
        // this.username = userInfo.username;
      // },

    //   (err) => {
    //     if (err.status === 401) {
    //       this.router.navigate(['/login']);
    //     }
    //   }
    // );

    this.getAllUsers();

  }


  getAllUsers() {
    this.httpClient
      .get<any>('http://localhost:9090/users')
      .subscribe((response) => {
        console.log(response)
        this.allusers = response;

        for (let i = 0; i < response.length; i++) {
          let fakeImage = faker.image.avatar();
          let fakePhone =faker.phone.phoneNumber()
          this.randomUsers.push({ fakeImage, fakePhone});
        }



      });
  }

//   newChange(): void {
//     this.router.navigateByUrl(`users/${id1}/images`);
// }

// openDialog(){
//   this._dialog.open(UserImagesComponent,{data:{name:'Lokesh'}});
// }


}

