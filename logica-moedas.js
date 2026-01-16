// Esta função será chamada quando o jogador acertar
function ganharPremio() {
    let saldo = parseInt(localStorage.getItem('moedas')) || 0;
    saldo += 100; // O valor que você pediu
    localStorage.setItem('moedas', saldo);
    
    // Atualiza o valor na tela na hora
    const display = document.getElementById('saldo-moedas');
    if (display) {
        display.innerText = saldo;
    }
    
    alert("Parabéns! +100 moedas na conta! 💰");
}