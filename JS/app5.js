let vezes = Number(prompt("Digite o número de vezes: "));
for (let i = 1; i<=vezes; i++){
    if (vezes > 100){
        alert("Valor inválido, recarregue a página e digite umvalor de 0 a 100.");
        break
    }
    alert(`Contei ${i} vez.`);
    if (i%2!=0){ //é ímpar
        continue; //se ímpar, continua = volta para o ínicio.
    }
    alert(`${i} é par.`);
}