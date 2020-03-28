import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { PaymentDetailscomponent } from "./payment-details/payment-details.component";
import { PaymentDetailcomponent } from "./payment-details/payment-detail/payment-detail.component";
import { PaymentDetailListcomponent } from "./payment-details/payment-detail-list/payment-detail-list.component";
import { PaymentDetailService } from "./Shared/payment-detail.service";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailscomponent,
    PaymentDetailcomponent,
    PaymentDetailListcomponent,
   // PaymentDetailService
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
   
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
