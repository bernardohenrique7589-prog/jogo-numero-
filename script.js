let limite = 1000; // Valor inicial padrão
let segredo = Math.floor(Math.random() * limite) + 1;

const campo = document.getElementById('palpite');
const texto = document.getElementById('msg');
const info = document.getElementById('info');
const titulo = document.getElementById('titulo-jogo');

// FUNÇÃO PARA MUDAR O LIMITE (Chamada pelos botões do HTML)
function mudarDificuldade(novoLimite) {
    limite = novoLimite;
    segredo = Math.floor(Math.random() * limite) + 1;
    
    // Atualiza a interface visualmente
    if (titulo) titulo.innerText = `Adivinhação 1 a ${limite}`;
    if (info) info.innerText = `Tente adivinhar o número de 1 a ${limite}`;
    
    texto.innerText = "Dificuldade alterada!";
    texto.style.color = "cyan";
    campo.value = "";
    campo.focus();
}

// LÓGICA DO BOTÃO PALPITAR
document.getElementById('jogar').onclick = () => {
    let v = parseInt(campo.value);

    // Validação de segurança
    if (isNaN(v) || v < 1 || v > limite) {
        texto.innerText = `⚠️ Digite entre 1 e ${limite}`;
        texto.style.color = "orange";
        return;
    }

    if (v === segredo) {
        texto.innerText = "✅ ACERTOU! +100 Moedas 💰";
        texto.style.color = "lime";
        
        // CHAMA A FUNÇÃO DE MOEDAS (do ficheiro logica-moedas.js)
        if (typeof ganharPremio === "function") {
            ganharPremio();
        }

        // Gera um novo número após o acerto
        setTimeout(() => {
            segredo = Math.floor(Math.random() * limite) + 1;
            texto.innerText = "Novo número gerado! Tente de novo.";
            campo.value = "";
        }, 2000);

    } else {
        texto.innerText = v > segredo ? "Menor! ↓" : "Maior! ↑";
        texto.style.color = "#ff4d4d";
    }
    
    campo.focus();
};