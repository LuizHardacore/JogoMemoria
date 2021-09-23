const card = document.querySelectorAll('.carta');
let cartavirada = false;
let carta1, cata2;
let bloqueio = false;
let contador = 0;



function virar(){
    if (bloqueio)return;
    if (this === carta1) return;

    this.classList.add('virada');

    if(!cartavirada){
        cartavirada = true;
        carta1 = this;
        return
    }

    carta2 = this;
    cartavirada = false;
    checarPar();

}

function checarPar(){
    if(carta1.dataset.card === carta2.dataset.card){
        desabilitarcarta();
        return;
    }

    desvirarCarta();
}

function desabilitarcarta(){
    carta1.removeEventListener('click', virar);
    carta2.removeEventListener('click', virar);

    contador++;
    resetar();
    if(contador == 6) alert("VOCÊ GANHOU!Não fume perto de animais e crianças.")
}

function desvirarCarta(){
    bloqueio = true;
    setTimeout(() => {
        carta1.classList.remove('virada')
        carta2.classList.remove('virada')

        resetar();
    }, 500);
}

function resetar(){
    [cartavirada, bloqueio] = [false, false];
    [carta1, carta2] = [null, null];
}

(function embaralhar(){
    card.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

if(card.forEach ){

}

card.forEach((card) => {
    card.addEventListener('click', virar);
})

window.onload(alert("Fumar causa câncer. Não fume perto de animais e crianças."));