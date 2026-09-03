let dia = prompt("Escolha um dia da semana\nSendo 1:Domingo - 7:Sábado.");
dia = Number(dia);

if (dia <=0 || dia >=8){
    alert("Dia válido.");
}
else if(dia == 1){
    alert("Você escolheu Domingo.");
}
else if(dia == 2){
    alert("Você escolheu Segunda.");
}
else if(dia == 3){
    alert("Você escolheu Terça.");
}
else if(dia == 4){
    alert("Você escolheu Quarta.");
}
else if(dia == 5){
    alert("Você escolheu Quinta.");
}
else if(dia == 6){
    alert("Você escolheu Sexta.");
}
else if(dia == 7){
    alert("Você escolheu Sábado.");
}