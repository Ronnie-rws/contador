
let cont = 0;

const currentNumberWrapper = document.getElementById('currentNumber');

function increment(){

    cont++;
    currentNumberWrapper.innerHTML = cont;
}

function decrement(){

    cont--;
    currentNumberWrapper.innerHTML = cont;
}