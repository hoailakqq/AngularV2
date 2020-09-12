import { Injectable } from "@angular/core";
import { FormBuilder, FormArray } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class GetDataserviesService {
  // readonly rootUrl = "https://192.168.0.102:5001/Home/";
  // readonly rootUrl2 = "https://5182437eee3a.ngrok.io";
  readonly rootUrl = "https://localhost:5001/Home/";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  partForm: FormArray = this.fb.array([]);
  //userForm: FormGroup;
  addUserForm() {
    this.partForm.push(
      this.fb.group({
        id_part: [1],
        id: [4],
        id_lession: [13],
      })
    );
  }
  // output: JSON;
  getListQuestion(obj: any) {
    return this.http.post(`${this.rootUrl}getQuestionPart`, obj);
  }
  // output: JSON;
  getLession(obj: any) {
    return this.http.post(`${this.rootUrl}getLession`, obj);
  }
  getPart(obj: any) {
    return this.http.post(`${this.rootUrl}getPart`, obj);
  }
  getQuestionPart(obj: any) {
    return this.http.post(`${this.rootUrl}getQuestionPart`, obj);
  }
  getWord(obj: any) {
    return this.http.post(`${this.rootUrl}getWord`, obj);
  }
  getTopRank() {
    return this.http.get(`${this.rootUrl}getFamousUser`);
  }
  UpdateName(obj: any) {
    return this.http.put(`${this.rootUrl}UpdateName`, obj);
  }
  RankOfUser(obj: any) {
    return this.http.post(`${this.rootUrl}RankOfUser`, obj);
  }
  UpdateScore(obj: any) {
    return this.http.post(`${this.rootUrl}UpdateScore`, obj);
  }
}
