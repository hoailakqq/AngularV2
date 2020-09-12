import { GetDataserviesService } from "./../../../services/dataservies/get-dataservies.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part5",
  templateUrl: "./part5.component.html",
  styleUrls: ["./part5.component.scss"],
})
export class Part5Component implements OnInit {
  constructor(
    private service: GetDataserviesService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}

  idLession: any;
  questions: any;
  question: any;
  position = 0;
  dapan: string;
  dung = 0;
  sai = 0;

  ngOnInit() {
    this.idLession = this.router.snapshot.params.id;

    var obj = {
      id: 4,
      id_part: 5,
      id_lession: parseInt(this.idLession.toString()),
    };
    this.service.getQuestionPart(obj).subscribe((data) => {
      this.questions = data;
      this.question = this.questions[this.position];
    });
  }
  handle() {
    if (this.dapan == this.question.answer) {
      this.dung += 1;
    } else {
      this.sai += 1;
    }
    if (this.position == this.questions.length - 1) {
      this.router2.navigate(["/client/part/" + this.idLession]);
      alert("dung: " + this.dung + "- sai:" + this.sai);
      this.dapan = "chua co";
    } else {
      this.position += 1;
      this.question = this.questions[this.position];
      this.dapan = "chua co";
    }
  }
  updateA(element) {
    this.dapan = element.value;
  }
  updateB(element) {
    this.dapan = element.value;
  }
  updateC(element) {
    this.dapan = element.value;
  }
  updateD(element) {
    this.dapan = element.value;
  }
}
