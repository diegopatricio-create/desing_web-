class Animal{
    constructor(nome, cor="desconhecido", altura=0.0, peso=0, raca="vira-lata"){
        this.nome = nome;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.raca = raca;
    }
    falar(){
        alert("Oi!");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("Comi!");
    }
    cagar(kg){
        this.peso = this.peso - kg;
        alert("Caguei!");
    }
    saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor} | Raça: ${this.raca}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura: ${this.altura}\n`;
        return msg;
    }
}

class Cachorro extends Animal{
    constructor(nome, cor="desconhecido", altura=0.0, peso=0, raca="vira-lata"){
        super(nome, cor, altura, peso, raca);
        this.patas = 4;
    }
    falar(){
        alert("Au! Au!");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg + `Sou um cachorro!`;
        alert(msg);
    }
}

class Passaro extends Animal{
    constructor(nome, cor="desconhecido", altura=0.0, peso=0, raca="desconhecido"){
        super(nome, cor, altura, peso, raca);
    }
    falar(){
        alert("Fiu! Fiu!");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg + `Sou um Passaro!`;
        alert(msg);
    }
}

const balu = new Cachorro("Balu Brasil.");
const mel = new Cachorro("Mel", "Amarelo", 1.10, 45, "Labrador.");
const leleco = new Passaro("Leleco Brasil", undefined, undefined, undefined, "Papagaio");