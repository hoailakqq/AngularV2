import { Component, OnInit, Inject } from "@angular/core";
import { AuthenServiceService } from "../../services/authen/authen-service.service";
import { NgForm, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { JsonPipe } from "@angular/common";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { DialogErrorComponent } from "./dialog-error/dialog-error.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  errorMessage;
  animal: string;
  name: string;

  constructor(
    private fb: FormBuilder,
    private service: AuthenServiceService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.addUserForm();
  }
  userForm: FormArray = this.fb.array([]);
  addUserForm() {
    this.userForm.push(
      this.fb.group({
        id: [0],
        firstName: [""],
        lastName: [""],
        username: [""],
        password: [""],
      })
    );
  }
  checkError = false;
  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      // this.service.checkLogin(form.value).subscribe(
      (res) => {
        this.name = res["username"];
        this.checkError = false;
        if (res["isActive"] == 1) {
          localStorage.setItem("currentUser", JSON.stringify(res));
          localStorage.setItem("token", res["token"]);
          localStorage.setItem("userName", res["username"]);
          localStorage.setItem("name", res["name"]);
          localStorage.setItem("email", res["email"]);
          localStorage.setItem("avatar", res["avatar"]);
          localStorage.setItem("roleId", res["roleId"]);
          if (res["roleId"] == 2) {
            this.router.navigate([""]);
          } else {
            console.log("admin");
            this.router.navigate(["/admin"]);
          }
        } else {
          this.openDialog();
        }
      },
      (err) => {
        this.checkError = true;

        this.errorMessage = JSON.stringify(err["error"]["message"]);
        console.log(this.checkError);
        //setTimeout(() => this.errorMessage = '', 2000);
      }
    );
  }
  omit_special_char(e) {
    var k = e.keyCode;
    return (
      (k > 64 && k < 91) ||
      (k > 96 && k < 123) ||
      k == 8 ||
      k == 32 ||
      (k >= 48 && k <= 57)
    );
  }
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    return {
      "form-submit-error": this.checkError,
      "login-input": !this.checkError,
    };
  }

  openDialog(): void {
    const bodyRect = document.body.getBoundingClientRect();
    const right = 300;
    const top = 300;
    const dialogRef = this.dialog.open(DialogErrorComponent, {
      // width: '250px',
      // height: '200px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
