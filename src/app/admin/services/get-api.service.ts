import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/client/services/authen/user.model';
import { Lession } from 'src/app/client/services/models/lession.model';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  data: any;
  readonly rootHomeUrl = "https://localhost:5001/Home/";
  readonly rootUsersUrl = "https://localhost:5001/Users/";

  constructor(private http:HttpClient,private router: Router) {
   }



  getDataUsers(){
    return this.http.get(this.rootHomeUrl+'Index');
  }
  formData: User;
  signup(formData){
    return this.http.post(this.rootUsersUrl+'signup',formData);
  }
  getRolesUsers(){
    return this.http.get(this.rootHomeUrl+'getRoles');
  }

  obj = {"limit" : 10, "page" :2};
  // getword(){
  //   return this.http.post("http://192.168.0.107:1300/getWord",this.obj);
  // }

  getCategorys(){
    return this.http.get(this.rootHomeUrl+'getCategorys');
  }

  getLessions(a){
    return this.http.post(this.rootHomeUrl+'getLession',a);
  }
  getAllLessions(){
    return this.http.get(this.rootHomeUrl+'getLessions');
  }

  getParts(a){
    return this.http.post(this.rootHomeUrl+'getPart',a);
  }
  getAllParts(){
    return this.http.get(this.rootHomeUrl+'getParts');
  }
  // obj: any = {"id_part": "1", "id": "4", "id_lession": "13"};

  getQuestions(a){
    return this.http.post(this.rootHomeUrl+'getQuestionPart',a);
  }
  addQuestion(a){
    return this.http.post(this.rootHomeUrl+'addQuestion',a);
  }

  getAllUsers(){
    return this.http.get(this.rootHomeUrl+'Index');
  }

  getAllQuestions(){
    return this.http.get(this.rootHomeUrl+'getQuesions');
  }

  getLogByDay(a){
    return this.http.post(this.rootHomeUrl+'getLogByDay',a);
  }
  delQuesionSById(a){
    return this.http.post(this.rootHomeUrl+'delQuesionSById',a);
  }
  pushQuesionById(a){
    return this.http.post(this.rootHomeUrl+'pushData',a);
  }

  getQuesionById(a){
    var ob = {};
    ob['id'] = a;
    return this.http.post(this.rootHomeUrl+'getQuesionById',ob);
  }
  getFamousUser(){
    return this.http.get(this.rootHomeUrl+'getFamousUser');
  }

  getCheckQuestions(){
    return this.http.get(this.rootHomeUrl+'getCheckQuestions');
  }
}
