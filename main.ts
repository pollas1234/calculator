function Factorial (Num1: number) {
    Faactorial = Num1 - 1
    lista = [Num1]
    while (Faactorial >= 1) {
        lista.push(Faactorial * lista.pop())
        Faactorial += -1
    }
    game.splash("" + Num1 + "!" + " = " + lista.pop())
}
let lista: number[] = []
let Faactorial = 0
calculator.Factorial(5)
