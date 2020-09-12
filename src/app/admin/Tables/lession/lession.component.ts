import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../services/get-api.service';

@Component({
  selector: 'app-lession',
  templateUrl: './lession.component.html',
  styleUrls: ['./lession.component.scss']
})
export class LessionComponent implements OnInit {

  lessions :any;
  question :any;
  constructor(private api : GetAPIService) { }

  ngOnInit() {
    // this.getLessions();
  }
  // getLessions(){
  //   this.api.getLessions().subscribe((data) => {
  //     this.lessions = data;
  //   });
  // }
}
