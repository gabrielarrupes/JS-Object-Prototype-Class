// método somente para objetos;
// laço percorre "dentro" do objeto e executa o bloco de código;

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

let relatorio = "";


// incluindo os dados do cliente na variável relatório

for (let info in cliente) {

    // oculta as propriedades do tipo objeto e função no relatório
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue;

    } else {
                        //mostra chave  // mostra valor 
        relatorio += `- ${info} -> ${cliente[info]} \n`

    };

}

console.log(relatorio);