// Añade tu código aquí
//% weight=100 color=#FF3C38 icon="+"
namespace calculator{
    //% block
   export function Add (Num1: number, Num2: number): void {
    game.splash("" + Num1 + " + " + Num2 + " = " + Num1 + Num2)
    }
    //% block
    export function Subtract (Num1: number, Num2: number): void {
  game.splash("" + Num1 + " - " + Num2 + " = " + (Num1 - Num2))
    }
    //% block
    export function Multiply (Num1: number, Num2: number): void {
game.splash("" + Num1 + " × " + Num2 + " = " + (Num1 * Num2))
    }
    //% block
    export function Divide (Num1: number, Num2: number): void {
game.splash("" + Num1 + " ÷ " + Num2 + " = " + (Num1 / Num2))
    }
    //% block
    export function Exponentiate (Num1: number, Num2: number): void {
game.splash("" + Num1 + " ** " + Num2 + " = " + (Num1 ** Num2))
    }
    //% block
    export function Factorial(Num1: number): void{
        let Faactorial = Num1 - 1
        lista = [Num1]
        while(Faactorial >= 1){
            lista.push(Faactorial * lista.pop())
            Faactorial += -1
        }
        game.splash(""+Num1+"!"+" = "+lista.pop())
    }
}