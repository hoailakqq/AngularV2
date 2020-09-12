import { ActivatedRoute, Router } from "@angular/router";
import { GetDataserviesService } from "./../../../services/dataservies/get-dataservies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part7",
  templateUrl: "./part7.component.html",
  styleUrls: ["./part7.component.scss"],
})
export class Part7Component implements OnInit {
  constructor(
    private service: GetDataserviesService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
  stylecau1 = 0;
  stylecau2 = 0;
  stylecau3 = 0;
  stylecau4 = 0;
  stylecau5 = 0;
  idLession: any;
  questions: any;
  question: any;
  question2: any;
  question3: any;
  question4: any;
  question5: any;
  position = 0;
  dapan: string;
  dapan2: string;
  dapan3: string;
  dapan4: string;
  dapan5: string;
  dung = 0;
  sai = 0;
  link = "";

  ngOnInit() {
    this.link = this.router2.url;
    this.idLession = this.router.snapshot.params.id;
    var obj = {
      id: 4,
      id_part: 7,
      id_lession: parseInt(this.idLession.toString()),
    };
    this.service.getQuestionPart(obj).subscribe((data) => {
      this.questions = data;
      this.question = this.questions[this.position];
      this.question2 = this.questions[this.position + 1];
      this.question3 = this.questions[this.position + 2];
      this.question4 = this.questions[this.position + 3];
      this.question5 = this.questions[this.position + 4];
    });
  }

  countQuestionPart7() {
    var count = 0;
    this.questions.some((item) => {
      if (
        item.sound === this.question.sound &&
        item.sound === this.question5.sound
      ) {
        count = 5;
      } else if (
        item.sound === this.question.sound &&
        item.sound === this.question4.sound
      ) {
        count = 4;
      } else if (
        item.sound === this.question.sound &&
        item.sound === this.question3.sound
      ) {
        count = 3;
      } else if (
        item.sound === this.question.sound &&
        item.sound === this.question2.sound
      ) {
        count = 2;
      }
    });
    return count;
  }
  updateScore(dapan: string, dapan2: string) {
    var countd = this.dung + 1;
    var counts = this.sai + 1;
    if (dapan == dapan2) {
      this.dung = countd;
    } else {
      this.sai = counts;
    }
  }
  handle() {
    // this.stylecau1 = 0;
    // this.stylecau2 = 0;
    // this.stylecau3 = 0;
    this.updateScore(this.dapan, this.question.answer);
    this.updateScore(this.dapan2, this.question2.answer);
    this.updateScore(this.dapan3, this.question3.answer);
    this.updateScore(this.dapan4, this.question4.answer);
    this.updateScore(this.dapan5, this.question5.answer);
    if (this.position == this.questions.length - 1) {
      this.link = "/client/part/" + this.idLession;
      // this.router2.navigate([]);
      alert("dung: " + this.dung + "- sai:" + this.sai);
      this.dapan = "chua co";
      this.dapan2 = "chua co";
      this.dapan3 = "chua co";
      this.dapan4 = "chua co";
      this.dapan5 = "chua co";
    } else {
      this.position += 1;
      this.question = this.questions[this.position];
      this.question2 = this.questions[this.position + 1];
      this.question3 = this.questions[this.position + 2];
      this.question4 = this.questions[this.position + 3];
      this.question5 = this.questions[this.position + 4];
      this.dapan = "chua co";
      this.dapan2 = "chua co";
      this.dapan3 = "chua co";
      this.dapan4 = "chua co";
      this.dapan5 = "chua co";
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
