function generatePassword() {
    let characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let password= "";

for (let i = 0; i < 12; i++) {
    let randomIndex =Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}
document.getElementById("password").value = password;
}

