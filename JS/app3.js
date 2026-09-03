let dia = prompt("Escolha um dia da semana\nSendo 1:Domingo - 7:Sábado.");
dia = Number(dia);
switch(dia){
    case 1:  alert("Você escolheu Domingo.");
    case 2:  alert("Você escolheu Segunda.");
    case 3:  alert("Você escolheu Terça.");
    case 4:  alert("Você escolheu Quarta.");
    case 5:  alert("Você escolheu Quinta.");
    case 6:  alert("Você escolheu Sexta.");
    case 7:  alert("Você escolheu Sábado.");
    default: alert("Dia inválido.")
}
