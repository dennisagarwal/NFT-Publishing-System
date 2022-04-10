import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id:any
  username: any;
  password: any;
  ethAddress: any;


  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    const userInfo = localStorage.getItem('user_info');
    const user: User = JSON.parse(userInfo!);

    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.ethAddress = user.ethAddress;
    console.log(user);

    this.loginService.getUserInfoFromJwt().subscribe(
      (res: any) => {
        const userInfo: UserInfo = res.body;

        this.username = user.username;
        // this.username = userInfo.username;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
