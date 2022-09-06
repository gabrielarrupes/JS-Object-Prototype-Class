const cliente = { 
    nome: "Jay",
    idade: 63,
    cpf: "34589756900",
    email: "pritchettclosets@email.com",
    telefone: "2020-3030",
}

// deletando com notação de ponto.
delete cliente.telefone;

// deletando com notação de colchetes.
delete cliente["email"];

console.log(cliente);