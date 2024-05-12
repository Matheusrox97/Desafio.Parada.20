let votos = {
    "Pres. Joao": 0,
    "Pres. Pedro": 0,
    "Pres. Thiago": 0,
    "Pres. Renan": 0,
    "Nulo/Branco": 0
};

function votar(opcao) {
    switch (opcao) {
        case 1:
            votos["Pres. Joao"]++;
            break;
        case 2:
            votos["Pres. Pedro"]++;
            break;
        case 3:
            votos["Pres. Thiago"]++;
            break;
        case 4:
            votos["Pres. Renan"]++;
            break;
        case 0:
            votos["Nulo/Branco"]++;
            break;
        default:
            console.log("Opção inválida.");
    }
}

function finalizarVotacao() {
    let resultado = "<h2>Resultado da votação</h2>";
    for (let candidato in votos) {
        resultado += `<p>${candidato}: ${votos[candidato]} votos</p>`;
    }
    document.getElementById("votos").innerHTML = resultado;
    document.getElementById("votos").style.display = "block";
    document.getElementById("mensagem").innerHTML = "<p>Votação finalizada.</p>";
    document.querySelector('#finalizar').style.display = "none";
    document.querySelector('#reiniciar').style.display = "block";
}

function reiniciarEleicao() {
    for (let candidato in votos) {
        votos[candidato] = 0;
    }
    document.getElementById("votos").style.display = "none";
    document.getElementById("mensagem").innerHTML = "";
    document.querySelector('#reiniciar').style.display = "none";
    document.querySelector('#finalizar').style.display = "block";
}