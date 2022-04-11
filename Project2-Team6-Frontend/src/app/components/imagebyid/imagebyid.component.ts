import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


export class imagebyid{
  constructor(
    public id: number,
    public image:string,
    public author: any,
    public contactAddress:string
  ) { }
}

@Component({
  selector: 'app-imagebyid',
  templateUrl: './imagebyid.component.html',
  styleUrls: ['./imagebyid.component.css']
})
export class ImagebyidComponent implements OnInit {
 imagebyid!: any;
  id1!: number;
  id2!: number;

  constructor(private httpClient: HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id1'])
    console.log(this.route.snapshot.params['id2'])
    this.id1= this.route.snapshot.params['id1']
    this.id2= this.route.snapshot.params['id2']
    this.getImagebyUserIdImageId(this.id1, this.id2);
  }
  getImagebyUserIdImageId(id1:number, id2:number) {

    this.httpClient
      .get<any>(`http://localhost:9090/users/${id1}/images/${id2}`)
      .subscribe((response) => {
      //   for(let i=0;i<response.length;i++){
      //   console.log(response[i].author.ethAddress)
      // }
      console.log(response)
        this.imagebyid = response;
      });
  }

}
