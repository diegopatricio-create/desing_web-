/*window.addEventListener("load", function(e){
    alert("Bem vindo!");
})*/

/*window.addEventListener("load", function(e){
    this.alert("Vamos começar os trabalhos do dia, a agenda está bem cheia!")
})*/

//Processamento-Memória
//Entradas
//Saída
const topo = document.getElementById("topo");
const enfase = document.getElementById("enfase");
//Evento
window.addEventListener("scroll", function(e){
    if (this.window.scrollY > 0){
        topo.classList.add("solido");
    }else{
        topo.classList.remove("solido");
    }
})

function destacar(){
    enfase.classList.add("destaque")
}

function cancelar(){
    enfase.classList.remove("destaque")
}