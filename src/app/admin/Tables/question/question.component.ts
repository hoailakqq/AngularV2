import { Component, OnInit } from "@angular/core";
import { GetAPIService } from "../../services/get-api.service";
import { Lession } from "src/app/client/services/models/lession.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit {
  lessions: any;
  parts: any;
  questions: any;
  categorys: any;

  constructor(private api: GetAPIService,private router : Router) {}

  ngOnInit() {
    // this.getLessions(3);
    this.getCategorys();
  }

  getCategorys() {
    this.api.getCategorys().subscribe((data) => {
      this.categorys = data;
    });
  }
  getLessions(a) {
    this.api.getLessions(a).subscribe((data) => {
      this.lessions = data;
    });
  }
  getParts(a) {
    this.api.getParts(a).subscribe((data) => {
      this.parts = data;
    });
  }
  selectedCategory: number = 1;
  selectedLession: number = 1;
  selectedPart: number = 1;
  selectCategory() {
    console.log(this.selectedCategory);
    var lessionObj = {};
    lessionObj["id"] = 1 * this.selectedCategory;
    this.getLessions(lessionObj);
    this.getParts(lessionObj);
    switch (1 * this.selectedCategory) {
      case 3:
        this.selectedLession = 1;
        this.selectedPart = 8;
        break;
      case 4:
        this.selectedLession = 13;
        this.selectedPart = 1;
        break;
      case 5:
        this.selectedLession = 31;
        this.selectedPart = 12;
        break;
      default:
        break;
    }
  }
  selectLession() {
    console.log(this.selectedLession);
  }

  selectPart() {
    console.log(this.selectedPart);
  }
  // obj: any = {"id_part": "1", "id": "4", "id_lession": "13"};
  getQuestions() {
    var lessionObj = {};
    lessionObj["id_part"] = 1 * this.selectedPart;
    lessionObj["id"] = 1 * this.selectedCategory;
    lessionObj["id_lession"] = 1 * this.selectedLession;
    this.api.getQuestions(lessionObj).subscribe((data) => {
      this.questions = data;
      console.log(this.questions);
    });
  }
  countries = this.questions;
  delete(a) {
    var Obj = {};
    Obj["id"] = 1 * a;
    this.api.delQuesionById(Obj).subscribe((data) => {
    });
    this.getQuestions();
  }
  
}
