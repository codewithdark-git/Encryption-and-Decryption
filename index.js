  // Simple encryption function (for demonstration purposes)
  function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        result += String.fromCharCode(charCode + 1);
    }
    return result;
}

// Simple decryption function (for demonstration purposes)
function decrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        result += String.fromCharCode(charCode - 1);
    }
    return result;
}

function encryptMessage() {
    const message = document.getElementById('message').value;
    const encryptedMessage = encrypt(message);
    document.getElementById('result').textContent = ` ${encryptedMessage}`;
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('message').value;
    const decryptedMessage = decrypt(encryptedMessage);
    document.getElementById('result').textContent = ` ${decryptedMessage}`;
}