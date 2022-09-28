import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ViewResultComponent } from './view-result/view-result.component';

const routes: Routes = [
  { path: '', component: FormComponent },

  { path: 'viewResult-inspire-lozanaFarm', component: ViewResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
