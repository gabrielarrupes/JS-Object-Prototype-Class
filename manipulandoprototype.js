    function Cliente (nome, cpf, email, telefone, saldo) {
        
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.telefone = telefone,
        this.saldo = saldo,
        this.depositar = function(valor) {
            this.saldo += valor
        }
    }

        const jakePeralta = new Cliente("Jake", "214618319917", "jake@b99poldepartament.com", "225544116", 200);

    function clientePoupança(nome, cpf, email, telefone, saldo, saldoPoupança) {

                // call chama o construtor cliente e todas as suas propriedades para dentro do clientePoupança() (herda as propriedades e comportamentos do mesmo)
            Cliente.call(this, nome, cpf, email, telefone, saldo) // this é referente ao objeto que estamos criando (devemos passar também os parametros esperados em cliente)
                this.saldoPoupança = saldoPoupança
            }

        // instância
        const amySantiago = new clientePoupança("Amy", "214618319917", "amy@b99poldepartament.com", "006674892", 200, 300) 

        console.log (amySantiago);

        // adicionando um novo método(função) direto no construtor clientePoupança, que foi construído herdando as propriedades de Cliente()
        clientePoupança.prototype.depositarPoup = function (valor) {
            this.saldoPoupança += valor
        }

        amySantiago.depositarPoup(300)

        console.log (amySantiago);
        