const passwordBox = document.querySelector("#password");
const copyIcon = document.querySelector("#copy");
const generateBtn = document.querySelector("#generate");

const length = 8;
const uppercaseLetter = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%&";

const allChars = uppercaseLetter + lowerCaseLetter + numbers + symbols;

function generatePassword() {
  let password = "";
  password += uppercaseLetter[Math.floor(Math.random() * uppercaseLetter.length)];
  password += lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

copyIcon.addEventListener("click", () => {
  copyPassword();
});