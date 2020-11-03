import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  login:boolean = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.http.post("http://localhost:4000/admin/login",
    {
      "email":this.email,
      "password":this.password,
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);

          
        },
        () => {
          console.log("The POST observable is now completed.");
          this.login = true;
          this.getAllUser();
        });
  }

  getAllUser = () => {
    this.http.get('http://localhost:4000/user/all') 
    .subscribe(Response => { 
    
      if(Response){   
        this.users = Response;
        console.log(this.users);
      } 
    }); 
  }
}
