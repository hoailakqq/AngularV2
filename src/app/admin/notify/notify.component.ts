import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../services/get-api.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})

export class NotifyComponent implements OnInit {

  constructor(private api : GetAPIService) { }

  ngOnInit() {
  }
  // getword(){
  //   this.api.getword().subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {}
  //   );

  // }
}
