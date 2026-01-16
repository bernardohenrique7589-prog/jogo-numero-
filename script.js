let max = 1000; // Ajuste aqui para 100 ou 1000
let segredo = Math.floor(Math.random() * max) + 1;

const campo = document.getElementById('palpite');
const texto = document.getElementById('msg');
const dica = document.getElementById('info'); // Para o texto "Tente adivinhar..."

document.getElementById('jogar').onclick = () => {
    let v = parseInt(campo.value);

    if (v === segredo) {
        texto.innerText = "ACERTOU! +100 Moedas 💰";
        texto.style.color = "lime";
        
        // CHAMA A FUNÇÃO DE MOEDAS
        if (typeof ganharPremio === "function") {
            ganharPremio();
        }

        // Reinicia o jogo após 2 segundos
        setTimeout(() => {
            location.reload(); 
        }, 2000);

    } else {
        texto.innerText = v > segredo ? "Menor! ↓" : "Maior! ↑";
        texto.style.color = "orange";
    }

    campo.value = "";
    campo.focus();
};