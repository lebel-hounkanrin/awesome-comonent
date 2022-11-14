import { ComplexFormComponent } from './complex-form/complex-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes =[
    {path: "", component: ComplexFormComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComplexFormRoutingModule{

}