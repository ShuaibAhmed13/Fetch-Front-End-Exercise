import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getOptions() {
    return this.http.get<any>("https://frontend-take-home.fetchrewards.com/form");
  }

  createUser(body: any) {
    return this.http.post("https://frontend-take-home.fetchrewards.com/form", body, {responseType: 'text'});
  }
}
