const cliente = { 
    nome: "Jay",
    idade: 63,
    cpf: "34589756900",
    email: "jay@email.com",
}

console.log (`Olá ${cliente.nome}, os três primeiros digitos do seu cpf são: ${cliente.cpf.substring(0,3)}`)