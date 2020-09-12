import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenServiceService } from "../../services/authen/authen-service.service";
import { from } from "rxjs";
export class Username {
  username: string;
  constructor() {}
}
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  errorMessage;
  userForm: FormArray = this.fb.array([]);
  //userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: AuthenServiceService,
    private router: Router
  ) {
    // if (this.service.currentUserValue) {
    //   this.router.navigate(["/"]);
    // }
    
  }
  nameuser = 2;
  ngOnInit(): void {
    this.addUserForm();
  }
  cssconfirmPass = false;
  confirmPassword() {
    if (this.confirmPass == this.pass) this.cssconfirmPass = true;
    else this.cssconfirmPass = false;
    console.log(this.cssconfirmPass);
  }
  checkPassword() {
    if(this.pass=="") this.nameuser =2;
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
  addUserForm() {
    this.userForm.push(
      this.fb.group({
        id: [0],
        name: [""],
        email: [""],
        username: [""],
        password: [""],
        passwordz: [""],
      })
    );
  }
  obj = new Username();
  checkError = false;
  email: string;
  pass: string;
  confirmPass: string;
  myFunction(form: FormGroup) {
    this.obj.username = this.email;
    this.service.checkUserName(this.obj).subscribe(
      (res: any) => {
        if (!res) {
          this.nameuser = 1;
        } else this.nameuser = 3;
      },
      (err) => {
        alert("lỗi" + JSON.stringify(err));
      }
    );
  }

  cssPass = 2;
  onSubmit(form: FormGroup) {
    this.service.checkUserName(form.value).subscribe(
      (res: any) => {
        if (!res) {
          this.service.signup(form.value).subscribe(
            (res: any) => {
              alert("success");
              this.router.navigate(["/login"]);
            },
            (err) => {
              alert("lỗi" + JSON.stringify(err));
              this.errorMessage = err;
              setTimeout(() => (this.errorMessage = ""), 2000);
            }
          );
        } else alert("tài khoản đã được đăng ký");
      },
      (err) => {
        alert("lỗi" + JSON.stringify(err));
      }
    );
  }

  // onKey(event: any) { // without type info
  //   alert(event.target.value);
  //   var json = {"username":event.target.value };
  //   this.service.checkUserName(json).subscribe(
  //     (res : any) => {
  //       alert("sc"+JSON.stringify(res));
  //     },
  //     err => {
  //       alert("lỗi"+JSON.stringify(err));

  //     }
  //   );
  // }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    return {
      "form-submit-error": this.checkError,
      "login-input": !this.checkError,
    };
  }
}
