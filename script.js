// CONFIGURAÇÃO: Altere aqui para 100 ou 1000
const limite = 5000; 
let segredo = Math.floor(Math.random() * limite) + 1;

// Elementos da UI
const campo = document.getElementById('palpite');
const texto = document.getElementById('msg');
const info = document.getElementById('info');
const titulo = document.getElementById('titulo-jogo');

// Atualiza a interface com o limite escolhido
titulo.innerText = `Adivinhação 1 a ${limite}`;
info.innerText = `Tente adivinhar o número de 1 a ${limite}`;

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
        
        // Chama a função do arquivo logica-moedas.js
        if (typeof ganharPremio === "function") {
            ganharPremio();
        }

        // Reinicia o jogo
        setTimeout(() => {
            segredo = Math.floor(Math.random() * limite) + 1;
            campo.value = "";
            texto.innerText = "Novo número gerado!";
        }, 2000);

    } else {
        texto.innerText = palpite > segredo ? "Menor! ↓" : "Maior! ↑";
        texto.style.color = "#ff4d4d";
    }
    campo.focus();
};