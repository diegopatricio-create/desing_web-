let nasc = prompt("Digite seu ano de nascimento: ")
nasc = parseInt(nasc);

let fds = confirm("Se hoje for final de semana, clique 'OK'.")
let idade = 2026 - nasc;

alert(`Você é maior de idade: ${idade >= 18}`)
alert(`Hoje é final de semana: ${fds}`);

if(idade >= 18 && fds){
    alert("Você pode beber.")
}else{
    alert("Você não pode beber.");
}