import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenServiceService {
  formData: User;
  readonly rootUrl = "https://localhost:5001/Home/";
  // readonly rootUrl = "https://192.168.0.102:5001/Home/";
  rootUrl2 = "https://localhost:5001/Users";
  // rootUrl2 = "https://192.168.0.102:5001/Users";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public jwtHelper: JwtHelperService,
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  userForm = this.fb.group({
    id: [0],
    firstName: [""],
    lastName: [""],
    username: [""],
    password: [""],
  });

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  checkLogin(formData: User) {
    return this.http.post(`${this.rootUrl2}/authenticate`, formData);
  }

  signup(formData) {
    return this.http.post(`${this.rootUrl2}/signup`, formData);
  }

  logoutUser() {
    localStorage.clear();
    // localStorage.removeItem("token");
    // this.router.navigate(["/login"]);
  }
  loggedIn() {
    return localStorage.getItem("token") !== null;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  checkUserName(formData) {
    return this.http.post(`${this.rootUrl2}/checkUserName`, formData);
  }
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  sign = false;
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public getRoleUser(): User {
    return this.currentUserSubject.value;
  }

  public get isSign(): boolean {
    return this.sign;
  }
  login(formData: User) {
    return this.http.post<any>(`${this.rootUrl2}/authenticate`, formData).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          this.sign = true;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }
  dic: any = { limit: "10", page: "4" };
  check() {
    return this.http.post<any>(
      "http://4ad6badd2285.ngrok.io/getAllWords",
      this.dic
    );
  }
}
