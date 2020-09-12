import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../services/get-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;

  constructor(private users:GetAPIService) { 

  }

  ngOnInit() {
      // an example array of 150 items to be paged
      this.users.getDataUsers().subscribe(
        (res) => {
          alert(res);
        }
        )
  }

  onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }

}
