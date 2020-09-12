import { GoogletranslateService } from "./../../services/googletranslate.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-translate",
  templateUrl: "./translate.component.html",
  styleUrls: ["./translate.component.scss"],
})
export class TranslateComponent implements OnInit {
  constructor(private trans: GoogletranslateService) {}
  word: string;
  rs: any;
  ngOnInit() {}
  obj = {};
  // q: string;
  // target: string;
  a = {
    data: {
      translations: [
        { translatedText: "bạn tên là gì", detectedSourceLanguage: "en" },
      ],
    },
  };
  transs() {
    this.obj["q"] = this.word;
    this.obj["target"] = "vi";
    this.trans.translate(this.obj).subscribe((data) => {
      console.log(data);
      this.rs = data;
    });
  }
  updateInput(element) {
    this.word = element.value;
  }
}
