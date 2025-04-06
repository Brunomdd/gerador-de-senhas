const generateBtn = document.getElementById('generate');
const resultEl = document.getElementById('result');

generateBtn.addEventListener('click', () => {
    const length = document.getElementById('Length').value; // Pega o comprimento da senha
    const Upper = document.getElementById('uppercase').checked; // Verifica se a caixa de maiúsculas está marcada
    const Lower = document.getElementById('lowercase').checked; // Verifica se a caixa de minúsculas está marcada
    const Number = document.getElementById('numbers').checked; // Verifica se a caixa de números está marcada
    const Symbol = document.getElementById('symbols').checked; // Verifica se a caixa de símbolos está marcada

    resultEl.innerText = generatePassword(length, Upper, Lower, Number, Symbol);
});

function generatePassword(length, Upper, Lower, Number, Symbol) {
    const UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerChars = "abcdefghijklmnopqrstuvwxyz";
    const NumberChars = "0123456789";
    const SymbolChars = "!@#$^&*()_+~|}{[]:;?<>,./-=";

    let Chars = "";

    // Adiciona os caracteres aos conjuntos conforme as opções selecionadas
    if (Upper) Chars += UpperChars;
    if (Lower) Chars += LowerChars;
    if (Number) Chars += NumberChars;
    if (Symbol) Chars += SymbolChars;

    // Se nenhum tipo de caractere for selecionado, retorna uma mensagem de erro
    if (Chars.length === 0) {
        return "Selecione pelo menos uma opção de tipo de caractere.";
    }

    // Geração da senha
    let password = "";
    for (let i = 0; i < length; i++) {
        password += Chars[Math.floor(Math.random() * Chars.length)];
    }

    return password;
}
