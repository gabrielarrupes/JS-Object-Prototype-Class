const cliente = { 
    nome: "Jay",
    idade: 63,
    cpf: "34589756900",
    email: "pritchettclosets@email.com",
    telefone: "2020-3030",
    dependentes: [
    {
        nome: "Gloria",
        parentesco: "esposa",
        dataNascimento: "24/09/1971",
    },
    {
        nome: "Manny",
        parentesco: "filho",
        dataNascimento: "10/01/1999",
        

    }],

    saldo: 100,

    // this = referência ao objeto
    depositar: function (valor) {

        this.saldo += valor
        
    },

};

console.log(cliente.saldo);
cliente.depositar(100);
console.log(cliente.saldo);