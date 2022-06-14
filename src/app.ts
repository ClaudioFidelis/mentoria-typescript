
// Como podemos melhorar o esse código usando TS? 
enum Profissao_app {
    Atriz,
    Padeiro
}


type Humano = {
    nome: string,
    idade: number,
    profissao: Profissao_app
}

let pessoa1: Humano = {
    nome: "maria",
    idade: 29,
    profissao: Profissao_app.Atriz
};

let pessoa2: Humano = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao_app.Padeiro
};

let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Profissao_app.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao_app.Padeiro
}



console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)