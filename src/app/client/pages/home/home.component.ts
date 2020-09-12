import { Router } from "@angular/router";
import { GetDataserviesService } from "./../../services/dataservies/get-dataservies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  toeics: any;
  b1s: any;
  ranks: any;
  evaluations: any;
  constructor(private service: GetDataserviesService, public router: Router) {}

  ngOnInit() {
    var obj = { id: 3 };
    this.service.getLession(obj).subscribe((data) => {
      console.log(data);
      this.toeics = data;
    });
    var obj = { id: 4 };
    this.service.getLession(obj).subscribe((data) => {
      console.log(data);
      this.b1s = data;
    });
    var obj = { id: 5 };
    this.service.getLession(obj).subscribe((data) => {
      console.log(data);
      this.evaluations = data;
    });

    this.service.getTopRank().subscribe((data) => {
      console.log(data);
      this.ranks = data;
    });
  }
}
