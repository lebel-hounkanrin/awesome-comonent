import { ComplexFormService } from './services/complex-form.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { ComplexFormRoutingModule } from './complex-form.routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComplexFormComponent
  ],
  providers: [
    ComplexFormService,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComplexFormRoutingModule,
  ]
})
export class ComplexFormModule { }
