const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (i) => {
        manipulaDados(i.target.dataset.controle, i.target.parentNode);
                                //operacao           //controle
        atualizaEstatisticas(i.target.dataset.peca, i.target.dataset.controle);
                                        //temos que usar o elemento dataset toda vez que chamarmos ele aqui
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

const pecas = { 

    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


function atualizaEstatisticas(peca, operacao) {
    console.log(pecas[peca]);
    if(operacao === '+'){
        estatistica.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    
        });
    } else {
        estatistica.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
        
    }
    
}

const botoes = document.querySelectorAll(".botao");

botoes.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        mudaCor(evento.target.id);
    })
})

function mudaCor(cor) {
    document.querySelector(".robo-imagem").src="img/Robotron 2000 - " + cor + ".png";
}