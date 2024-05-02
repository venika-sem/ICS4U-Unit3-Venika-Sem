/*This program uses recursion to find factorial
 * *By Venika Sem
 * *@version 1.0
 * *@since Feb-2024
 * */

class Factorial {
    private factNum: number;
    findFactorial(fNum: number) {
        return this.factorialRecursive(fNum); 
    }
   
    factorialRecursive(num:number) {
        if(num === 1) {
          return 1;
        } else {
          return num*this.factorialRecursive(num-1);
        }
    }
  
  }
  