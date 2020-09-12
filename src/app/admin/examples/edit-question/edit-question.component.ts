import { Component, OnInit } from "@angular/core";
import { GetAPIService } from "../../services/get-api.service";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  avatar= true;
  lessions: any;
  parts: any;
  questions: any;
  categorys: any;
  add=false;
  //form
  tile_question: string;
  question: string;
  dapana: string;
  dapanb: string;
  dapanc: string;
  dapand: string;
  answer: string;
  description: string;
  sound: string;
  image: string;
  hasImage = true;
  imageurl:string;
  soundurl:string;
  id: number;
  private sub: any;

  constructor(private api: GetAPIService,private storage: AngularFireStorage,private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.getLessions(3);
    this.getCategorys();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number



   });
   this.api.getQuesionById(this.id).subscribe((data) => {
    this.questions = data;
    this.tile_question = data[0]['title_question'];
    this.question = data[0]['question'];
    this.dapana = data[0]['dapanA'];
    this.dapanb = data[0]['dapanB'];
    this.dapanc = data[0]['dapanC'];
    this.dapand = data[0]['dapanD'];
    this.answer = data[0]['answer'];
    this.description = data[0]['description'];
    this.soundurl = data[0]['sound'];
    this.imageurl = data[0]['image'];
    this.IsActive = data[0]['isActive'] == 1;
    console.log(data);
    });

  }

  getCategorys() {

    this.api.getCategorys().subscribe((data) => {
      this.categorys = data;
    });
  }
  getLessions(a) {
    this.api.getLessions(a).subscribe((data) => {
      this.lessions = data;
    });
  }
  getParts(a) {
    this.api.getParts(a).subscribe((data) => {
      this.parts = data;
    });
  }
  selectedCategory: number = 1;
  selectedLession: number = 1;
  selectedPart: number = 1;
  selectCategory() {
    this.selectedLession = this.questions[0]['id_Lession'];
    this.selectedPart = this.questions[0]['id_Part'];


    this.add = true;
    console.log(this.questions);
    var lessionObj = {};
    lessionObj["id"] = 1 * this.selectedCategory;
    this.getLessions(lessionObj);
    this.getParts(lessionObj);
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
  IsActive=true;
  selectPart() {
    console.log(this.selectedPart);
    switch (1*this.selectedPart) {
      case 1:
        this.hasImage = true;
        break;
      case 9:
        this.hasImage = true;
        break;
      case 11:
        this.hasImage = true;
        break;
      case 8:
        this.hasImage = true;
        break;
      default:
        this.hasImage = false;
        break;
    }
  }
  // obj: any = {"id_part": "1", "id": "4", "id_lession": "13"};


  downloadURL: Observable<string>;
  fileImage:any;
  onImageSelected(event) {
    this.fileImage = event.target.files[0];
    this.image = this.fileImage.name;

  }
  fileSound:any;
  onSoundSelected(event) {
    this.fileSound = event.target.files[0];
    this.sound = this.fileSound.name;

  }
  upload(a :number){
    var n = Date.now();
    const filePath = `${n}`;
    const fileRef = this.storage.ref(filePath);
    var file = (a==1?this.fileImage:this.fileSound);
    console.log(a==1);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              (a==1?this.imageurl = url:this.soundurl = url);
              // this.imageurl = url;

            }
            alert("thành công");
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          console.log(url);
        }
      });
  }
  addQuestion() {
    var question = {};
    question['id_Lession'] = 1*this.selectedLession;
    question['id_Part'] = 1*this.selectedPart;
    question['title_question'] = this.tile_question;
    question['question'] = this.question;
    question['dapanA'] = this.dapana;
    question['dapanB'] = this.dapanb;
    question['dapanC'] = this.dapanc;
    question['dapanD'] = this.dapand;
    question['answer'] = this.answer;
    question['description'] = this.description;
    question['sound'] = this.soundurl;
    question['image'] = this.imageurl;
    question['isActive'] = this.IsActive?1:0;
    console.log(JSON.stringify(question));
    this.api.addQuestion(question).subscribe((data) => {
      console.log(data);
    });
  }
}

