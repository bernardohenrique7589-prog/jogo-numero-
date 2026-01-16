let limite = 1000; // Valor padrão
let segredo;

const campo = document.getElementById('palpite');
const texto = document.getElementById('msg');
const info = document.getElementById('info');
const titulo = document.getElementById('titulo-jogo');

// Função para mudar o limite e reiniciar o número secreto
function mudarLimite(novoLimite) {
    limite = novoLimite;
    segredo = Math.floor(Math.random() * limite) + 1;
    titulo.innerText = `Adivinhação 1 a ${limite}`;
    info.innerText = `Tente adivinhar o número de 1 a ${limite}`;
    texto.innerText = "Limite alterado!";
    campo.value = "";
}

// Inicia o jogo pela primeira vez
mudarLimite(1000);

document.getElementById('jogar').onclick = () => {
    let palpite = parseInt(campo.value);

    if (isNaN(palpite) || palpite < 1 || palpite > limite) {
        texto.innerText = `⚠️ Digite entre 1 e ${limite}`;
        texto.style.color = "orange";
        return;
    }

    if (palpite === segredo) {
        texto.innerText = "✅ ACERTOU! +100 Moedas 💰";
        texto.style.color = "lime";
        
        if (typeof ganarPremio === "function" || typeof ganharPremio === "function") {
            // Verifica o nome da função no seu logica-moedas.js
            try { ganharPremio(); } catch(e) { ganarPremio(); }
        }

        setTimeout(() => {
            segredo = Math.floor(Math.random() * limite) + 1;
            campo.value = "";
            texto.innerText = "Novo número gerado!";
        }, 2000);

    } else {
        texto.innerText = palpite > segredo ? "Menor! ↓" : "Maior! ↑";
        texto.style.color = "#ff4d4d";
    }
};