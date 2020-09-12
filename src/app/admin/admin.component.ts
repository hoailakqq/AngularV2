import { Component, OnInit } from '@angular/core';
import { AuthenServiceService } from '../client/services/authen/authen-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  name:string;
  admin:any;
  avatar:string;
  constructor(public auth: AuthenServiceService, public router: Router) {}

  ngOnInit() {
    this.name =localStorage.getItem('name');
    this.avatar =localStorage.getItem('avatar');
    this.admin =localStorage.getItem('currentUser');
    
  }
  logout(){
    this.auth.logoutUser();
  }
}
