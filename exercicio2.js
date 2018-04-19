// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/';
const todasAsImagens = [
  'philae-parts.jpg',
  'philae-rosetta.jpg',
  'philae-separation.jpg',
  'philae-67-picture.jpg',
  'philae-collecting.jpg'
];
let imageIndex = 0;
let botaoProx = document.querySelector('#proximo');
let botaoAnt = document.querySelector('#anterior');
let slide = document.querySelector('#slide')
botaoProx.addEventListener('click', function(e) {
  imageIndex = (imageIndex + 1)%5;
  slide.src = servidorDasImagens+todasAsImagens[imageIndex];
});
botaoAnt.addEventListener('click', function(e) {
  imageIndex = imageIndex - 1;
  if(imageIndex < 0){
    imageIndex = 4;
  }
  slide.src = servidorDasImagens+todasAsImagens[imageIndex];
});
