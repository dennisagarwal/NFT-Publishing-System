import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export class user {
  constructor(
    public id: number,
    public username: string,
    public firstname: string,
    public lastname: string,
    public emailId: string,
    public userRole:string
  ) {}
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!: user[];
  constructor() { }

  ngOnInit(): void {
  }

}
