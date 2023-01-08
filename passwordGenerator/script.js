let normalPass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'t','u','v','w','x','y','z'];
let upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let symbols = ['&', '#', '-', '@', '%', '$', '+', '/', '=']

let upperCheck = document.getElementById("upper");
let symbolsCheck = document.getElementById("symbol");
let generate = document.getElementById('btn');
let clearBtn = document.getElementById('clear');
let putResult = document.getElementById('result');

let length = 9;
let index = 0;
let password = "";

generate.addEventListener('click', () => {
    clearPassword();
    if (upperCheck.checked && symbolsCheck.checked) {
        complexePass();
    } else if (upperCheck.checked){
        generateUpperPass();
    } else if (symbolsCheck.checked) {
        generateSymbolPass();
    } else {
        generateNormalPass();
    }
});

function generateNormalPass() {
    for (let i = 0; i <= length; i++) {
        index = Math.floor(Math.random() * normalPass.length);
        password += normalPass[index];
    }
    putResult.value = password;
}

function generateUpperPass() {
    let mergedArr = normalPass.concat(upperAlphabet);
    for (let i = 0; i <= length; i++) {
        index = Math.floor(Math.random() * mergedArr.length);
        password += mergedArr[index];
    }
    putResult.value = password;
}

function generateSymbolPass() {
    let mergedArr = normalPass.concat(symbols);
    for (let i = 0; i <= length; i++) {
        index = Math.floor(Math.random() * mergedArr.length);
        password += mergedArr[index];
    }
    putResult.value = password;
}

function complexePass() {
    let mergedArr1 = normalPass.concat(upperAlphabet);
    let mergedArr2 = mergedArr1.concat(symbols);

    for (let i = 0; i <= length; i++) {
        index = Math.floor(Math.random() * mergedArr2.length);
        password += mergedArr2[index];
    }
    putResult.value = password;
}

function clearPassword() {
    password = "";
}