import { ModalsModule } from './../../_metronic/partials/layout/modals/modals.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientlRoutingModule } from './clientl-routing.module';
import { BookingFormBuilderComponent } from "./booking-form-builder/booking-form-builder.component";
import { ClientlComponent } from "./clientl.component";
import { BookingFormFieldsComponent } from './booking-form-fields/booking-form-fields.component';
import { FormioModule } from "@formio/angular";


@NgModule({
  declarations: [
    ClientlComponent,
    BookingFormBuilderComponent,
    BookingFormFieldsComponent,
  ],
  imports: [
    CommonModule,
    ClientlRoutingModule,
    FormioModule,
    ModalsModule
  ]
})
export class ClientlModule { }
