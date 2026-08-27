var nasc = 2009;
let nome = "DGZADA";
const viva = true;

function calc_Idade(ano = 2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true 
        var pode_beber = false
    }else{
        menor = false
        var pode_beber = true
    } 
    alert(`${nome} é menor de idade? ${menor} \nIdade: ${idade} \nPode beber? ${pode_beber}`)
    return idade;
}
calc_Idade();
/* var `vaza` a variável dentro do escopo da mesma função
alert(`pode_beber: ${podebeber}`);
*/