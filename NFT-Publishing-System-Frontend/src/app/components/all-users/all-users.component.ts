import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AllUser } from 'src/app/models/alluser';
// import { UserInfo } from 'src/app/models/user-info';
// import { AllUsersService } from 'src/app/services/allusers.service';

export class alluser{
  constructor(
    public id: number,
    public username:string,
    public password: string,
    public ethAddress:string
  ) { }
}


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  // errorMessage!: string;
  allusers!: alluser[];

  // constructor(private allUsersService: AllUsersService, private router: Router,
  //   private httpClient: HttpClient) {}
    constructor( private httpClient: HttpClient) {}


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
      });
  }
}
