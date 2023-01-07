import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalculatorModel } from '../models/CalculatorModel';

@Injectable({providedIn: 'root'})
export class MusicServiceService
{
  hostname:string = "https://localhost:5000";

  constructor(private http: HttpClient) { }

  public getInfo(callback:any)
  {
    this.http.get<any[]>(this.hostname + "/info")
      .subscribe((data) =>
      {
        return data;
      });
  }

  public calculate(num1:number, num2:number, operation:string){
    // this.http.get<string>(this.hostname + "/calculate/"+num1+"/"+num2+"/"+operation ).subscribe((data) =>
    // {
    //   console.log("Post: "+data);
    //   callback(data)  
    // });

    return this.http.get<number>(this.hostname + "/calculate/"+num1+"/"+num2+"/"+operation);
  }


}
function callback(data: number) {
  throw new Error('Function not implemented.');
}

