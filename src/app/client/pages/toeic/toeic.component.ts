import { GetDataserviesService } from "./../../services/dataservies/get-dataservies.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-toeic",
  templateUrl: "./toeic.component.html",
  styleUrls: ["./toeic.component.scss"],
})
export class ToeicComponent implements OnInit {
  toeic4: any;

  constructor(
    private service: GetDataserviesService,
    private router: ActivatedRoute
  ) {}
  idLession: any;
  nameLession: any;
  ngOnInit() {
    this.idLession = this.router.snapshot.params.id;
    var tmp = parseInt(this.idLession.toString());
    this.nameLession =
      tmp.toString().length == 1
        ? this.idLession.slice(1, this.idLession.toString().length)
        : this.idLession.slice(2, this.idLession.toString().length);
    var obj = { id: 3 };
    this.service.getPart(obj).subscribe((data) => {
      console.log(data);
      this.toeic4 = data;

    });
  }
}
