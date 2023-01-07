import { Component, OnInit} from '@angular/core';
import { MusicServiceService} from '../service/music-service.service';
import { CalculatorModel } from '../models/CalculatorModel';
import {Router} from "@angular/router"

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {

  constructor(private service: MusicServiceService, private router: Router) { } 

  res:number = 0;
  calc:CalculatorModel = new CalculatorModel(0,0,"");

  public onSubmit(){
    // this.service.calculate(this.calc.Num1, this.calc.Num2, this.calc.Operation, this.calc, (result:number) =>
    // {
    //   this.res = result;
    // });

    this.service.getInfo((result) =>
    {
      this.res = result;
    });
    // this.router.navigate(['/result', this.res])
    console.log("Component: "+this.res);
  }
}
