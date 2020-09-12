import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export interface GoogleObj {
  q: string;
  target: string;
}
@Injectable({
  providedIn: "root",
})
export class GoogletranslateService {
  url = "https://translation.googleapis.com/language/translate/v2?key=";
  key = "AIzaSyDw8zJOc3u3rRPi5prSI8u4qmoA5vhlPAs";
  constructor(private http: HttpClient) {}
  translate(obj: any) {
    return this.http.post(this.url + this.key, obj);
  }
}
