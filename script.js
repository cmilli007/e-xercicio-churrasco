alert("Churrasco: Descubra a quantidade de cada item do evento.");

let adultosCAlcool = parseFloat(prompt(" Quantos adultos consomem bebidas alcoólicas?"));
let adultosSAlcool = parseFloat(prompt("Quantos adultos não consomem bebidas alcoólicas?"));
let criancas = parseFloat(prompt(" Quantas crianças estarão no evento?"));

let adultos = adultosCAlcool + adultosSAlcool;
let pessoas = adultos + criancas;

let carne = 0.4 * adultos + 0.2 * criancas;
alert("Quantidade de Carne: " + carne.toFixed(1));

let acompanhamentos = 0.2 * pessoas;
alert("Quantidade de Acompanhamentos: " + acompanhamentos.toFixed(1));

let cerveja = 2 * adultosCAlcool;
alert("Quantidade de Cerveja: " + cerveja.toFixed(1));

let refrigerante = 0.5 * (adultosSAlcool + criancas);
alert("Quantidade de Refrigerante: " + refrigerante.toFixed(1));

let agua = 0.4 * pessoas;
alert("Quantidade de Água: " + agua.toFixed(1));