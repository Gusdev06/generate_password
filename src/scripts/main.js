const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

// Função para gerar uma senha aleatória
function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    
    let chars = "";
    if (uppercase) chars += uppercaseChars;
    if (numbers) chars += numberChars;
    if (symbols) chars += symbolChars;
    
    let password = "";
    for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById("password").value = password;
}

// Adiciona o evento de clique ao botão de gerar senha
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generatePassword);