import { Component, OnInit } from "@angular/core";
import { GetAPIService } from "../../services/get-api.service";
import { Lession } from "src/app/client/services/models/lession.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-from-file',
  templateUrl: './questions-from-file.component.html',
  styleUrls: ['./questions-from-file.component.scss']
})
export class QuestionsFromFileComponent implements OnInit {
  lessions: any;
  parts: any;
  questions: any;
  categorys: any;
lession = new Array();
part
  constructor(private api: GetAPIService,private router : Router) {}

  ngOnInit() {
    this.getLessions();
    this.getQuestions();
    this.getParts();
  }

  getCategorys() {
    this.api.getCategorys().subscribe((data) => {
      this.categorys = data;
    });
  }
  getLessions() {
    this.api.getAllLessions().subscribe((data) => {
      this.lessions = data;
    });
  }
  getParts() {
    this.api.getAllParts().subscribe((data) => {
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
    // this.getLessions(lessionObj);
    // this.getParts(lessionObj);
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
    this.api.getCheckQuestions().subscribe((data) => {
      this.questions = data;
      console.log(this.questions);
    });
  }
  countries = this.questions;
  error = false;
  errorF():string {
    return "error";
  }
btncheck = true;
  change(a){
    a.trim()==''?this.btncheck=false:this.btncheck;
  }

  delete(a) {
    var Obj = {};
    Obj["id"] = 1 * a;
    this.api.delQuesionSById(Obj).subscribe((data) => {
    });
    this.getQuestions();
  }
  lessionShow(a):string{
    return this.lessions[a-1].name;
  }
  partShow(a):string{
    return this.parts[a-1].name;
  }

  push(a){
    var Obj = {};
    Obj["id"] = 1 * a;
    this.api.pushQuesionById(Obj).subscribe((data) => {
    });
    this.getQuestions();
  }
}
