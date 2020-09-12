import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../services/get-api.service';

@Component({
  selector: 'app-inforuser',
  templateUrl: './inforuser.component.html',
  styleUrls: ['./inforuser.component.scss']
})
export class InforuserComponent implements OnInit {

  constructor(private api: GetAPIService) { }

  ngOnInit() {
  }
  getword(){
    // this.api.getword().subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {}
    // );
  }
}
