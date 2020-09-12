import { element } from "protractor";
import { GetDataserviesService } from "./../../services/dataservies/get-dataservies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dictionary",
  templateUrl: "./dictionary.component.html",
  styleUrls: ["./dictionary.component.scss"],
})
export class DictionaryComponent implements OnInit {
  constructor(private service: GetDataserviesService) {}
  word: string;
  rs: any;
  words: any;
  errors: any;
  ngOnInit() {}
  dic() {
    var obj = { word: this.word };
    this.service.getWord(obj).subscribe((data) => {
      console.log(data);
      this.rs = data;
      if (this.rs.length > 0) this.words = data[0];
      else {
        this.errors = "Từ này chưa được cập nhật...";
      }
    });
  }
  updateWord(element) {
    this.word = element.value;
  }
}
