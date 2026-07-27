const fs = require('fs');
const path = require('path');

// Nome do arquivo JS original do Adobe Animate
const NOME_JS_BASE = 'NomeDaSuaMascara2026.js'; 
const NOME_JS_INJECAO = 'codigo_injetado.js'; // Onde você programou as animações extras

// 1. Lemos os dois arquivos garantindo o Encoding (latin1 / ANSI) do Animate
let jsOriginal = fs.readFileSync(path.join(__dirname, NOME_JS_BASE), 'latin1');
let jsInjetado = fs.readFileSync(path.join(__dirname, NOME_JS_INJECAO), 'utf8');

// 2. Concatenamos os arquivos (Colocando o código injetado de forma segura no final)
let jsFinal = jsOriginal + '\n\n/* ----- INJEÇÃO AUTOMÁTICA ----- */\n\n' + jsInjetado;

// 3. Sobrescrevemos o JS original preservando a codificação
fs.writeFileSync(path.join(__dirname, NOME_JS_BASE), jsFinal, 'latin1');

console.log("Merge concluído! Agora você pode empacotar o ZIP sem quebrar o Neonews.");
