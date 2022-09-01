/* percorrer o objeto e verificar se existem dependentes no cliente em questão,
se existir, enviar um mensagem de oferta de seguro */

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
    depositar: function (valor) {

        this.saldo += valor
        
    },

};

function oferecerSeguro (objeto) {
    const propriedadeClientes = Object.keys(cliente);
    if (propriedadeClientes.includes("dependentes")) {
            console.log (`Oferta de seguro de vida para ${objeto.nome}`);
    };
};

oferecerSeguro(cliente);

// array com as propriedades de um objeto
console.log(Object.keys(cliente));

// array com os valores de um objeto
console.log(Object.values(cliente));

// array com outros arrays que contém conjunto chave/valor
console.log(Object.entries(cliente));


