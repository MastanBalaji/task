import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http: HttpClient) { }
  fun(){
    return 'cool';
  }
  getdata() {
    // const url='http://aryu.co.in/tracking/viewreport.php'
    return this.http.get('http://aryu.co.in/tracking/viewreport.php');
  }
}
