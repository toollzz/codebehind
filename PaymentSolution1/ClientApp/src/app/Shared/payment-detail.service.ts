//import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { Http, Response } from '@angular/http'; 
//@Injectable({
//  providedIn: 'root',
//})

export class PaymentDetailService {
  formData:PaymentDetail
  readonly rootURL = 'http://localhost:44326/api';
 // constructor(private http: Http) { }
  constructor(private http: HttpClient) { }
  //constructor() { }
  postPaymentDetail(formData:PaymentDetail) {
    return this.http.post(this.rootURL+'/PaymentDetail',formData)
  }
}
