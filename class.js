class Cliente {
  //construtor designa as propriedades(atributos) da classe cliente.
    constructor(nome, cpf, email, saldo) {
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.saldo = saldo
    }
        // definindo métodos
    depositar(valor) {
        this.saldo += valor 
    }

    exibirSaldo() {
        console.log (this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo) // no super se passa as propriedades que queremos herdar no extends
        this.saldoPoupanca = saldoPoupanca
        this.depositarPoupanca = function (valor) {
            this.saldoPoupanca += valor
        }
    }
}

const jay = new ClientePoupanca("Jay", "214618319917", "j@email.com", 100, 300);

console.log(jay)

jay.depositar(50) // deposita cliente normal
jay.depositarPoupanca(700) // deposita poupança

console.log(jay)
