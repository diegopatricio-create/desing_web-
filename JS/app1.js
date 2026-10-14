const balu = {
    nome: balu,
    cor: "amarelo",
    altura: 0.40,
    peso: 11.0,
    raca: "pudom",
    latir(){
        alert("au!");
    },
    comer(kg){
        this.peso += kg;
        alert("Comi, meu peso é" + this.peso.toFixed(2));
    },
    cagar(kg){
        this.peso -= kg;
        alert("Caguei, meu peso é" + this.peso.toFixed(2));
    },
    saudar(){
        msg = `Olá, meu nome é ${this.nome}\n`;
        msg += `Altura: ${this.altura} | Peso: ${this.peso}\n`
        msg += `Sou da raça: ${this.raca}`
        alert(msg)
    }
}