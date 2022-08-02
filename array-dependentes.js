const cliente = { 
    nome: "Jay",
    idade: 63,
    cpf: "34589756900",
    email: "pritchettclosets@email.com",
    telefone: "2020-3030",
    // adicionando colchetes para transformar em array, podendo assim adicionar outros dependentes na lista
    dependentes: [{
        nome: "Gloria",
        parentesco: "esposa",
        dataNascimento: "24/09/1971",
    }]

};

// adiciona novo dependendo usando push

cliente.dependentes.push({
    nome: "Manny",
    parentesco: "filho",
    dataNascimento: "10/01/1999",

})

console.log(cliente)

// acessa o objeto através da notação de ponto.

const dependenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNascimento == "10/01/1999")

// retornar a propriedade nome do dependente do primeiro item do indice
console.log(dependenteMaisNovo[0].nome)