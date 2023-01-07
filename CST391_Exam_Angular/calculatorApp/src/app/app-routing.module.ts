import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './Calculator/calculator.component';
import { ResultComponent } from './Result/result.component';

const routes: Routes = [
  { path: 'calculate', component: CalculatorComponent },
  { path: 'result/:result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
