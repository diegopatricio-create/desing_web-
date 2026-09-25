const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista");
let editando = null;
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
        //Se editando nulo, comece a adicionar
        let check = amigos.find(item => item[0] == nome.value);
        if (check == undefined){
        //Adiciona se não existir
        amigos.unshift(item);
        //Limpa o formulário
        cadastro.reset();
    }else{
        alert(`${nome.value} já está cadastrado.`)
    }
}else{
    //Se editando diferente de nulo, atualizar
    let amigo = amigos[editando] //[Nome, Nasc, Whatsapp]
    amigo[0] = nome.value; //valor digitado em input name = nome
    amigo[1] = nasc.value; //valor digitado em input name = nasc
    amigo[2] = whatsapp.value; //valor digitado em input name = whatsapp
}
    
    //Atualiza lista
    exibirLista();
});

function exibirLista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //[Nome, Nasc, Whatsapp]
        //Criar botão para remover
        let remover = `<button onclick="remover(${i})">Remover</button>`
        let atualizar = `<button onclick="atualizar(${i})">Atualizar</button>`
        //Cria uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} | ${remover} ${atualizar} <li>`;
        //Junta o li nos itens
        itens = itens + li;
    }
    //Alterar o html da lista para ser igual aos itens
    lista.innerHTML = itens; 
}

function remover(i){
    let item = amigos[i]; //[Nome, Nasc, Whatsapp]
    let check = confirm(`Deseja realmente excluir ${item[0]}?`);
    if (check == true){
        amigos.splice(i,1); //splice(posição inicial, qtd de itens a remover)
    }
    exibirLista();
}

function atualizar(i){
    editando = i;
    let item = amigos[editando]; //[Nome, Nasc, Whatsapp]
    nome.value = item[0];
    nasc.value = item[1];
    whatsapp.value = item[2];
}