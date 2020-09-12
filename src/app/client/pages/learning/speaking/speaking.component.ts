import { GetDataserviesService } from "./../../../services/dataservies/get-dataservies.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-speaking",
  templateUrl: "./speaking.component.html",
  styleUrls: ["./speaking.component.scss"],
})
export class SpeakingComponent implements OnInit {
  constructor(
    private service: GetDataserviesService,
    private router: ActivatedRoute
  ) {}

  idLession: any;
  questions: any;
  ngOnInit() {
    this.idLession = this.router.snapshot.params.id;

    var obj = {
      id: 3,
      id_part: 9,
      id_lession: parseInt(this.idLession.toString()),
    };
    this.service.getQuestionPart(obj).subscribe((data) => {
      console.log(data);
      this.questions = data;
    });
  }
}
