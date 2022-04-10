import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllUsers } from 'src/app/models/allusers';
import { UserInfo } from 'src/app/models/user-info';
import { AllUsersService } from 'src/app/services/allusers.service';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  errorMessage!: string;
  authorFirst!:string;
  allUsers!: AllUsers[];
  // AllUsers!: { new(body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response; prototype: Response; error(): Response; redirect(url: string | URL, status?: number | undefined): Response; };

  constructor(private allUsersService: AllUsersService, private router: Router,
    private httpClient: HttpClient) {}

  ngOnInit(): void {
    // const userInfo = localStorage.getItem('user_info');
    // const user: User = JSON.parse(userInfo!);
    this.allUsersService.getUserInfoFromJwt().subscribe(
      (res: any) => {
        const allusers: AllUsers = res.body;
        console.log(allusers)
        this.authorFirst=allusers.authorFirst
                // this.AllUsers = Response;
        // this.username = user.username;
        // this.username = userInfo.username;
      },
      (err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

    // this.getAllUsers();

  }
  // getAllUsers() {
  //   this.httpClient
  //     .get<any>('http://localhost:8081/reimbursements')
  //     .subscribe((response) => {
  //       console.log(response)
  //       this.allUsers = response;
  //     });
  // }
}
