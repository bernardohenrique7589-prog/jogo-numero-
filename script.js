let max = 100;
let segredo = Math.floor(Math.random() * max) + 1;

const campo = document.getElementById('palpite');
const texto = document.getElementById('msg');
const dica = document.getElementById('info');

document.getElementById('jogar').onclick = () => {
    let v = parseInt(campo.value);
    if (v === segredo) {
        texto.innerText = "ACERTOU! 🏆";
        texto.style.color = "lime";
        setTimeout(() => location.reload(), 2000);
    } else {
        texto.innerText = v > segredo ? "Menor! ↓" : "Maior! ↑";
        texto.style.color = "orange";
    }
    campo.value = "";
    campo.focus();
};

document.getElementById('config').onclick = () => {
    let n = prompt("Máximo:", max);
    if (n > 0) {
        max = parseInt(n);
        segredo = Math.floor(Math.random() * max) + 1;
        dica.innerText = "Número entre 1 e " + max;
        texto.innerText = "Reiniciado!";
    }
};