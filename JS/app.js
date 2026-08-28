let nasc = prompt ("igite seu ano de nascimento: ");
nasc = parseInt(nasc);

let viva = confirm("Se você se encontra vivo, clique em 'OK'.");

if(viva){
    alert(`Você tem ${2026-nasc} anos.`)
}else{
    alert(`VocÊ não se encontra mais vivo.`);
}