let max = 1000;
let segredo = Math.floor(Math.random() * max) + 1;
let tentativas = 0;

const campo = document.getElementById('palpite');
const texto = document.getElementById('msg');
const dica = document.getElementById('info');

document.getElementById('jogar').onclick = () => {
    let v = parseInt(campo.value);
    tentativas++;

    if (isNaN(v)) {
        texto.innerText = "Por favor, digite um número!";
        texto.style.color = "yellow";
        return;
    }

    if (v === segredo) {
        texto.innerText = `ACERTOU em ${tentativas} tentativas! 🏆`;
        texto.style.color = "#4ade80";
        // Reinicia o jogo após 4 segundos
        setTimeout(() => location.reload(), 4000);
    } else {
        texto.innerText = v > segredo ? "Menor! ↓" : "Maior! ↑";
        texto.style.color = "#fb7185";
    }
    
    campo.value = "";
    campo.focus();
};

// Faz o botão "Enter" do teclado funcionar como o clique no botão
campo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('jogar').click();
    }
});

document.getElementById('config').onclick = () => {
    let n = prompt("Defina um novo limite máximo:", max);
    if (n !== null && n > 0) {
        max = parseInt(n);
        segredo = Math.floor(Math.random() * max) + 1;
        tentativas = 0;
        dica.innerText = "Número entre 1 e " + max;
        texto.innerText = "Novo limite definido!";
        texto.style.color = "#6366f1";
    }
};
