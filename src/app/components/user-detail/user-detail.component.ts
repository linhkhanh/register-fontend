import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute, Params
 
} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:any;
  userID:any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.userID){
        console.log(params.userID);
        this.userID = params.userID;
      }
    });
    this.getUserDetail()
  }
  getUserDetail = () => {
    this.http.get(`http://localhost:4000/user/${this.userID}`) 
    .subscribe(Response => { 
    
      if(Response){   
        this.user = Response;
        console.log(this.user);

      } 
    }); 
  }
}
