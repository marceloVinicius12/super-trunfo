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
const darthvader ={ 
    nome:"darthvarder",
    Imagem:"img/darthvader.jpg",
    atributos:{
        ataque: 9,
        defesa: 6,    
        magia: 1
    }
};
const Caitlyn ={ 
    nome:"caitlyn",
    Imagem:"img/Caitlyn.jpg",
    atributos:{
        ataque: 8,
        defesa: 2,    
        magia: 10,
    }
};
const bubassauro ={ 
    nome:"bubassauro",
    Imagem:"img/bulba.png",
    atributos:{
        ataque: 7,
        defesa: 4,    
        magia: 9,
    }
};
const capita ={ 
    nome:"capitã",
    Imagem:"img/capita.jpg",
    atributos:{
        ataque: 6,
        defesa: 7,    
        magia: 8,
    }
};
const seya ={ 
    nome:"seya",
    Imagem:"img/seya.jpg",
    atributos:{
        ataque: 9,
        defesa: 4,    
        magia: 10,
    }
};

const cartas = [ naruto , batman, darthvader, Caitlyn, bubassauro, capita , seya]; /*declaração de quais sao as cartas*/
let cartaJogador, cartaMaquina;
function SortearCarta(){          
    const numeroDeCartas = 7; 
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas); /*codigo para sortear as cartas*/
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while(numeroCartaJogador == numeroCartaMaquina){ /*while faz que nao haja repetição de carta pq enquanto as duus forem iguais ele repete o sorteio*/
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
cartaJogador = cartas[numeroCartaJogador]; 
cartaMaquina = cartas[numeroCartaMaquina]; /*declara que carta maquina é igual ao seu numero de carta sorteado*/

}
function ExibirCartaJogador(){
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.Imagem})`;
    document.querySelector(".nome-personagem-jogador").innerHTML = cartaJogador.nome;
    //listar atributos//
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}
function ExibirCartaMaquina(){
    
    let divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.Imagem})`;
    document.querySelector(".nome-personagem-maquina").innerHTML = cartaMaquina.nome;
   
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtributosMaquina(cartaMaquina.atributos);
}

function PegarAtributosMaquina(atributosDaCarta){
    let listaDeAtributos = ""; /* pega os atributos da cartas sem o botao radio*/
    for(let atributo in atributosDaCarta){
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]}</li>`
    }
    return listaDeAtributos;

}
function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio= "";
    for(let atributo in atributosDaCarta){
botaoRadio = `<input type="radio" name="atributo"  value="${atributo}">`;
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }
    return listaDeAtributos;
}
const btnSortear = document.querySelector("#btnSortear"); /*faz com que o botao faça o sorteio das cartas */
btnSortear.onclick = () => {
    SortearCarta();
    ExibirCartaJogador();
  
    document.querySelector("#btnJogar").disabled = false
};
const btnJogar = document.querySelector("#btnJogar");
btnJogar.onclick = () => {
    ExibirCartaMaquina();
}