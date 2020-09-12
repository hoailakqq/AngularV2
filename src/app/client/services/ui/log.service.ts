import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {


    readonly rootUrl = 'https://192.168.0.102:5001/Home/';

    constructor(private http:HttpClient,private router: Router) { }

  setLogSys(a){
    return this.http.post(this.rootUrl+'logsys',a);
  }
}
