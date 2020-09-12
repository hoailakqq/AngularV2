import { GetDataserviesService } from "./../../../services/dataservies/get-dataservies.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part3",
  templateUrl: "./part3.component.html",
  styleUrls: ["./part3.component.scss"],
})
export class Part3Component implements OnInit {
  constructor(
    private service: GetDataserviesService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
  stylecau1 = 0;
  stylecau2 = 0;
  stylecau3 = 0;
  idLession: any;
  questions: any;
  question: any;
  question2: any;
  question3: any;
  position = 0;
  dapan: string;
  dapan2: string;
  dapan3: string;
  dung = 0;
  sai = 0;
  link = "";
  score = 0;
  ngOnInit() {
    this.link = this.router2.url;
    this.idLession = this.router.snapshot.params.id;
    var obj = {
      id: 4,
      id_part: 3,
      id_lession: parseInt(this.idLession.toString()),
    };
    this.service.getQuestionPart(obj).subscribe((data) => {
      this.questions = data;
      this.question = this.questions[this.position];
      this.question2 = this.questions[this.position + 1];
      this.question3 = this.questions[this.position + 2];
    });
  }
  updateScore(dapan: string, dapan2: string) {
    var countd = this.dung + 1;
    var counts = this.sai + 1;
    if (dapan == dapan2) {
      this.dung = countd;
      this.score += 10;
    } else {
      this.sai = counts;
    }
  }
  handle() {
    this.stylecau1 = 0;
    this.stylecau2 = 0;
    this.stylecau3 = 0;
    this.updateScore(this.dapan, this.question.answer);
    this.updateScore(this.dapan2, this.question2.answer);
    this.updateScore(this.dapan3, this.question3.answer);
    if (this.position == this.questions.length - 3) {
      this.link = "/client/part/" + this.idLession;
      // this.router2.navigate([]);
      alert(
        "Số câu đúng: " +
          this.dung +
          "\nSố câu sai: " +
          this.sai +
          "\nTổng điểm: " +
          this.score
      );
      this.dapan = "chua co";
      this.dapan2 = "chua co";
      this.dapan3 = "chua co";
    } else {
      this.position += 3;
      this.question = this.questions[this.position];
      this.question2 = this.questions[this.position + 1];
      this.question3 = this.questions[this.position + 2];
      this.dapan = "chua co";
      this.dapan2 = "chua co";
      this.dapan3 = "chua co";
    }
  }

  updateA(element) {
    this.stylecau1 = 1;
    this.dapan = element.value;
  }
  updateB(element) {
    this.stylecau1 = 2;
    this.dapan = element.value;
  }
  updateC(element) {
    this.stylecau1 = 3;
    this.dapan = element.value;
  }
  updateD(element) {
    this.stylecau1 = 4;
    this.dapan = element.value;
  }
  updateA2(element) {
    this.stylecau2 = 1;
    this.dapan2 = element.value;
  }
  updateB2(element) {
    this.stylecau2 = 2;
    this.dapan2 = element.value;
  }
  updateC2(element) {
    this.stylecau2 = 3;
    this.dapan2 = element.value;
  }
  updateD2(element) {
    this.stylecau2 = 4;
    this.dapan2 = element.value;
  }
  updateA3(element) {
    this.stylecau3 = 1;
    this.dapan3 = element.value;
  }
  updateB3(element) {
    this.stylecau3 = 2;
    this.dapan3 = element.value;
  }
  updateC3(element) {
    this.stylecau3 = 3;
    this.dapan3 = element.value;
  }
  updateD3(element) {
    this.stylecau3 = 4;
    this.dapan3 = element.value;
  }
}
