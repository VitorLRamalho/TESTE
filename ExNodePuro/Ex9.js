//Classes!!!

class Pessoas{
    constructor(nome, idade, salario){
        this.nome = nome 
        this.idade = idade
        this.salario = salario
    }
    aumento(){
        this.salario = this.salario * 1.5
    }
}

let nome1 = new Pessoas('Vitor', 20, 25000)
let nome2 = new Pessoas('Sophia', 21, 4000)

nome1.aumento()
console.log(nome1)

nome2.aumento()
console.log(nome2)

