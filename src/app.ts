// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface employee {
    code: number, 
    name: string
}

let funcionarioA: employee = {
    code: 1, 
    name: "Antonio"
}

let funcionarioB: employee = {
    code: 2,
    name: "Victor"
}


class PessoaFisica {
    codigo: number
    nome: string

    constructor(codigo: number, nome: string) {
        this.codigo = codigo,
        this.nome = nome
    }
}


let funcionarioC: PessoaFisica = {
    codigo: 3,
    nome: "Marcos"
}


console.log(funcionarioA)
console.log(funcionarioB)
console.log(funcionarioC)