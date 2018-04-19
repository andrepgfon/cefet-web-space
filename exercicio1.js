// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML


let botoesExpandir = document.querySelectorAll('.botao-expandir-retrair');
console.log(botoesExpandir);
for (let botao of botoesExpandir) {
  botao.addEventListener('click', function(e) {
    if(botao.parentNode.classList.length == 0){
      botao.parentNode.classList.add('expandido');
      botao.innerHTML = '-';
    }else{
      botao.parentNode.classList.remove('expandido');
      botao.innerHTML = '+';
    }

  });
}
