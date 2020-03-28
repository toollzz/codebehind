import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../Shared/payment-detail.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  //styleUrls: ['./student.component.css']
  styles:[]
})

export class PaymentDetailcomponent implements OnInit {

  constructor(public service: PaymentDetailService) { }
  //constructor() { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if (form != null)
    form.resetForm();
      this.service.formData = {
      PMId: 0,
      CardNumber: '',
      CardOwnerName: '',
      ExpirationDate: '',
      cvv:''
    }
  }

  onSubmit(form:NgForm) {

  //  this.service.postPaymentDetail(form.value).subscribe(

  //    res => {
  //      this.resetForm(form);
  //    },
  //    err => {
  //      console.log(err);
  //    }
  //  )
  }

    
  }


