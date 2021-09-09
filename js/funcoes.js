const naruto ={ 
    nome:"Naruto",
    Imagem:"img/naruto.png",
    atributos:{
        ataque: 7,
        defesa: 6,    
        magia: 2
    }
};
const batman = {
    nome:"Batman",
    Imagem:"img/batman.jpg",                 /*criando a carta e seus atributos igual API*/
    atributos:{
        ataque: 6,
        defesa: 8,
        magia: 0
}
};
const cartas = [ naruto , batman]; /*declaração de quais sao as cartas*/
let cartaJogador, cartaMaquina;
function SortearCarta(){          
    const numeroDeCartas = 2; 
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas); /*codigo para sortear as cartas*/
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while(numeroCartaJogador == numeroCartaMaquina){ /*while faz que nao haja repetição de carta pq enquanto as duus forem iguais ele repete o sorteio*/
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
cartaJogador = cartas[numeroCartaJogador]; 
cartaMaquina = cartas[numeroCartaMaquina]; /*declara que carta maquina é igual ao seu numero de carta sorteado*/
ExibirCartaJogador();
}
function ExibirCartaJogador(){
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.Imagem})`;
    document.querySelector(".nome-personagem-jogador").innerHTML = cartaJogador.nome;
    //listar atributos//
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}
function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "";
    for(let atributo in atributosDaCarta){
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]}</li>`;
    }
    return listaDeAtributos;
}

const btnSortear = document.querySelector("#btnSortear"); /*faz com que o botao faça o sorteio das cartas */
btnSortear.onclick = () => {
    SortearCarta();
};