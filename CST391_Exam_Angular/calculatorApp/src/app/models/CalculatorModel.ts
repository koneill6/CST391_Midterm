export class CalculatorModel {
    
    private num1: number = 0;
    private num2: number = 0;
    private operation: string = "";


    constructor(num1:number, num2:number, operation:string){
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }

    public get Num1(): number {
        return this.num1;
    }
    public set Num1(value: number) {
        this.num1 = value;
    }
    public get Num2(): number {
        return this.num2;
    }
    public set Num2(value: number) {
        this.num2 = value;
    }
    public get Operation(): string {
        return this.operation;
    }
    public set Operation(value: string) {
        this.operation = value;
    }
}