import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UploadService } from "../services/upload.service";
import { HttpEventType, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, finalize } from "rxjs/operators";
import { of, Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import { GetAPIService } from "../services/get-api.service";
import { FormArray, NgForm } from "@angular/forms";
export class User {
  id: number;
  name: string;
  username: string;
  password: String;
  email: string;
  avatar: string;
  roleId: number;
  isActive: number;
  constructor() {}
}
@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.scss"],
})
export class AdduserComponent implements OnInit {
  private IsActive: boolean = true;
  fileToUpload: File = null;
  selectedFile: File = null;
  fb ="Choose avatar";
  items: any;
  selectedLevel:number;
  downloadURL: Observable<string>;
  avatar="Choose avatar";
  constructor(
    private storage: AngularFireStorage,
    private fileUploadService: UploadService,
    private service: GetAPIService,
  ) {}

  showConfig() {
    this.service.getRolesUsers().subscribe((data) => {
      this.items = data;
    });
    
  }
  ngOnInit() {
    this.showConfig();
  }
  file:any;
  onFileSelected(event) {
    this.file = event.target.files[0];
    this.avatar = this.file.name;
    
  }

  upload(){
    var n = Date.now();
    const filePath = `${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.fb = url;
              
            }
            console.log("link nè" + this.fb);
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          console.log(url);
        }
      });
  }
  onusername() {
    console.log(this.username);
    this.form.username = this.username;
  }
  onpassword() {
    console.log(this.password);
    this.form.password = this.password;
  }
  onfullName() {
    console.log(this.fullName);
    this.form.name = this.fullName;
  }
  onemail() {
    console.log(this.email);
    this.form.email = this.email;
  }
  selected() {
    console.log(this.selectedLevel);
    this.form.roleId = 1 * this.selectedLevel;
  }
  username: string;
  password: string;
  fullName: string;
  email: string;
  form = new User();
  checkError = false;
  onSubmit() {
    if(confirm("Are you sure to delete "+this.fullName)) {
      console.log("Implement delete functionality here");
    }
    this.form.avatar = this.fb;
    this.form.isActive = this.IsActive ? 1 : 0;
    console.log(JSON.stringify(this.form));
    this.service.signup(this.form).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );
  }
}
