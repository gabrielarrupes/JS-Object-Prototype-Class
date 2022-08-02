const cliente = { 
    nome: "Jay",
    idade: 63,
    cpf: "34589756900",
    email: "pritchettclosets@email.com",
}

// array de chaves.
const chaves = ["nome", "idade", "cpf", "email"];

// percorrendo e imprimindo o valor das chaves do objeto;
chaves.forEach(info => console.log(cliente[info]));


// também pode ser acessada desta forma (quando sabemos o nome exato da determinada chave)
console.log(cliente["nome"]);