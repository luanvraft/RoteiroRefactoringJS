const { readFileSync } = require('fs');
var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js").default;
const { gerarFaturaStr } = require("./apresentacao.js")

// function gerarFaturaHTML(fatura, pecas) {
//   let faturaHTML = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
//   for (let apre of fatura.apresentacoes) {
//     faturaHTML += `<li> ${getPeca(pecas, apre).nome}: ${formatarMoeda(calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos) </li>\n`;}
//     faturaHTML += `</ul>\n`
//     faturaHTML += `<p> Valor total: ${formatarMoeda(calcularTotalFatura(pecas, fatura.apresentacoes))} </p>\n`;
//     faturaHTML += `<p> Créditos acumulados: ${calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>\n`;
//     faturaHTML += `</html>\n`
//   return faturaHTML;
// }

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
// const faturaHTML = gerarFaturaHTML(faturas, pecas);
// console.log(faturaHTML);
