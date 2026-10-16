/* Processanmento/Armazenamento */ 
const lista = []

/* Entradas */
const formulario = document.getElementById("formulario");
const texto = formulario.texto;

/*Saídas*/
const tags = document.getElementById("tags");

/*Gatilho/Evento*/
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let t = texto.value;
    t = t.split(" ");
    for (let i = 0; i<t.length; i++){
        let palavra = t[i];
        palavra = palavra.toUpperCase();
        if (palavra.startWith("#")){
            lista.push(palavra);
        }else if(palavra.includes("#")){
            let pos = palavra.indexOf("#");
            palavra = palavra.slice(pos, palavra.length);
            lista.push(palavra);
        }
    }
    tags.innerHTML = t;
    formulario.reset();
})