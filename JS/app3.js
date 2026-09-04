let dia = prompt("Escolha um dia da semana\nSendo 1:Domingo - 7:Sábado.");
dia = Number(dia);
switch(dia){
    case 1:  alert("Você escolheu Domingo."); break;
    case 2:  alert("Você escolheu Segunda."); break;
    case 3:  alert("Você escolheu Terça."); break;
    case 4:  alert("Você escolheu Quarta."); break;
    case 5:  alert("Você escolheu Quinta."); break;
    case 6:  alert("Você escolheu Sexta."); break;
    case 7:  alert("Você escolheu Sábado."); break;
    default: alert("Dia inválido."); break; 
}
