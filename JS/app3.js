let n1 = Number(prompt("Digite um número: "));
let n2 = Number (prompt("Digite outro número: "))
let op;
do{
    let msg = "Escolha uma opção\n";
    msg = msg + "1: Somar\n";
    msg = msg + "1: Subtrair\n";
    msg = msg + "1: Multiplicar\n";
    msg = msg + "1: Dividir\n";
    msg = msg + "1: Sair";
    op = prompt(msg);
    switch(op){
        case "1": alert(`${n1} + ${n2} = ${n1+n2}`); break;
        case "2": alert(`${n1} - ${n2} = ${n1-n2}`); break;
        case "3": alert(`${n1} * ${n2} = ${n1*n2}`); break;
        case "4": alert(`${n1} / ${n2} = ${n1/n2}`); break;
        case "5": alert("Até logo!"); break;
        default: alert("Opção inválida."); break;
    }
}while(op != "5");