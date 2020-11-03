import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  contactNumber: number;
  address: string;
  female: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.http.post("http://localhost:4000/user/new",
    {
      "email":this.email,
      "password":this.password,
      "firstName":this.firstName,
      "lastName":this.lastName,
      "contactNumber":+this.contactNumber,
      "address":this.address,
      "gender":(this.female? "female" : "male")
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
        });
  }

}
