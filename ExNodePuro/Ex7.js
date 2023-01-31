//.push() Adciona no ultimo vetro da lista
//.pop() Apaga o ultimo vetor da lista
//.unshift() Adciona o primeiro vetor da lista
//.shift() Apaga o primeiro vetor da lista


let nome = ['Vitor', 'Luiz', 'Ramalho' ];


function addLast(x){
    nome.push(x)
}

function removeLast(x){
    nome.pop(x)
}

function addFirst(x){
    nome.unshift(x)
}

function removeFirst(x){
    nome.shift(x)
}

removeFirst();
addFirst('Vicente');
addLast('Stubing');
console.log(nome);
