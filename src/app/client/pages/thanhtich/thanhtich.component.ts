import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-thanhtich",
  templateUrl: "./thanhtich.component.html",
  styleUrls: ["./thanhtich.component.scss"],
})
export class ThanhtichComponent implements OnInit {
  constructor() {}
  a: any;

  ngOnInit() {
    this.a = JSON.parse(localStorage.getItem("currentUser"));
  }
}
