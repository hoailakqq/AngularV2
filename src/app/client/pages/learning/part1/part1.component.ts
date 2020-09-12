import { element } from "protractor";
import { GetDataserviesService } from "./../../../services/dataservies/get-dataservies.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-part1",
  templateUrl: "./part1.component.html",
  styleUrls: ["./part1.component.scss"],
})
export class Part1Component implements OnInit {
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
  score = 0;
  crown = 0;
  ranks: any;
  a = JSON.parse(localStorage.getItem("currentUser"));
  ngOnInit() {
    this.idLession = this.router.snapshot.params.id;
    var obj = {
      id: 4,
      id_part: 1,
      id_lession: parseInt(this.idLession.toString()),
    };
    this.service.getQuestionPart(obj).subscribe((data) => {
      this.questions = data;
      this.question = this.questions[this.position];
    });

    var obj2 = { Id_user: parseInt(this.a.id) };
    this.service.RankOfUser(obj2).subscribe((data) => {
      console.log(data);
      this.ranks = data;
    });
  }
  handle() {
    if (this.dapan == this.question.answer) {
      this.dung += 1;
      this.score += 10;
      this.crown += 1;
    } else {
      this.sai += 1;
    }
    if (this.position == this.questions.length - 1) {
      this.router2.navigate(["/client/part/" + this.idLession]);

      var obj2 = {
        id_user: parseInt(this.a.id),
        total_score: parseInt(this.ranks[0].total_score) + this.score,
        crown: parseInt(this.ranks[0].crown) + this.crown,
      };
      this.service.UpdateScore(obj2).subscribe((data) => {
        console.log("ok");
        alert(
          "Số câu đúng: " +
            this.dung +
            "\nSố câu sai: " +
            this.sai +
            "\nTổng điểm: " +
            this.score
        );
      });

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
