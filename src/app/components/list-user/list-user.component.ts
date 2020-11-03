import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() users: any
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  goToDetails( userID) {

    this.router.navigate(['user', userID]);

  }
}
