var nasc = 2009;
let nome = "Diego"
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade ${idade}`);
    return idade; 
}

calcIdade();
/*
alert(`Fora da Função : Idade ${idade}`);
Erro, pois a variável 'let' não existe fora do escopo dela.
*/
alert(`Fora da Função : Chamando calcIdade ${calcIdade(2027)}`);
