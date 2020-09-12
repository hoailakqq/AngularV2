import { GetDataserviesService } from "./../../services/dataservies/get-dataservies.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-part",
  templateUrl: "./part.component.html",
  styleUrls: ["./part.component.scss"],
})
export class PartComponent implements OnInit {
  b1s: any;

  constructor(
    private service: GetDataserviesService,
    private router: ActivatedRoute
  ) {}
  idLession: any;
  nameLession: any;
  hanldeString(s: string) {
    return s.replace(" ", "");
  }
  ngOnInit() {
    this.idLession = this.router.snapshot.params.id;
    var tmp = parseInt(this.idLession.toString());
    this.nameLession =
      tmp.toString().length == 1
        ? this.idLession.slice(1, this.idLession.toString().length)
        : this.idLession.slice(2, this.idLession.toString().length);
    var obj = { id: 4 };
    this.service.getPart(obj).subscribe((data) => {
      console.log(data);
      this.b1s = data;
    });
  }
}
