export class CalcApi
{
    constructor(){}
    
    public calculate(num1:number, num2:number, operation:string){

        let result = 0;
        switch(operation){
            case 'add':
                result = num1 + num2;
                break;

            case 'subtract':
                result = num1 - num2;
                break;

            case 'multiply':
                result = num1 * num2;
                break;

            case 'divide':
                result = num1 / num2;
                break; 
        }

        return result;
    }
}
