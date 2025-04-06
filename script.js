const  generateBtn = document.getElementById('generate');
const  resultEl = document.getElementById('result');

generateBtn.addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const Upper = document.getElementById('uppercase').checked;
    const Lower = document.getElementById('lowercase').checked;
    const Number = document.getElementById('numbers').checked;
    const Symbol = document.getElementById('symbols').checked;

    resultEl.innerText = generatePassword(length,Upper,Lower,Number,Symbol);
});

function generatePassword(length,Upper,Lower,Number,Symbol){
    const UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerChars = "abcdefghijklmnopqrstuvwxyz";
    const NumberChars = "0123456789";
    const SymbolChars = "!@#$^&*()_+~|}{[]:;?<>,./-=";

}