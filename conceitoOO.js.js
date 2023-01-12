    class Pessoa {

        constructor (nome, sobrenome, cpf, email) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.cpf = cpf,
        this.email = email
    }

        exibirNomeCompleto() {

                console.log(`${this.nome} ${this.sobrenome}`)
        }
};
        
                    //extends - permite uma classe herdar propriedades de outra
    class Programador extends Pessoa {

        constructor (nome, sobrenome, cpf, email, linguagem) {

        //super - semelhante ao call() de função contrutora (mencionar as propriedades que herdo da classe em questão)
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
        }
}

    const novoDev = new Programador("Gabriela", "A", "00000000000", "g@email.com", "Javascript");

    console.log (novoDev);