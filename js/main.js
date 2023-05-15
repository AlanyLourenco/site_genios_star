function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio).play();

    if(elementol){
       if(elemento.localName==='audio') {
        elemento.play();
       }
    }
    else{
        alert('elemento nulo');
    }
}
document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');
let i = 0;

for(let i=0 ; i<listaDeTeclas.length; i++){

    const tecla =listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio=`#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
}
