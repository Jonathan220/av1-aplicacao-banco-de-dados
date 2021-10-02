let posicao = [];
let servidorOnline = true;
let tabelaRecorde = [];

const chegada = (piloto) => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject("servidor Offline");
    posicao.push(piloto);
    resolve(posicao);
  });
};

const recorde = () => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject("servidor Offline");
    resolve(posicao[0]);
  });
};

//Salva o recorde na tabela de recordes
const salvarRecordeCorrida = (piloto) => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject("Servidor Offline");
    tabelaRecorde.push(piloto);
    resolve(tabelaRecorde);
  });
};

//Busca o recorde de um determinado piloto
const verificarRecorde = (nomePiloto) => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject("Servidor Offline");
    const pilotoEncontrado = tabelaRecorde.filter(() => {
      return nomePiloto;
    });
    if (!pilotoEncontrado) reject("Piloto não possui recorde");
    resolve(pilotoEncontrado);
  });
};

// Exibe os recordes registrados
const exibirRecordes = () => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject("Servidor Offline");
    resolve(tabelaRecorde);
  });
};

const podio = () => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject("servidor Offline");
    let tabela = `Pódio dos competidores:
==================================================
`;
    for (let posicaoDoCompetidor in posicao)
      tabela += `${posicaoDoCompetidor} | ${
        posicao[posicaoDoCompetidor].nome
      } | ${posicao[posicaoDoCompetidor].modelo} | ${
        posicao[posicaoDoCompetidor].feedback
      } | ${(
        posicao[posicaoDoCompetidor].feedback -
        (posicao[posicaoDoCompetidor - 1] == undefined
          ? 0
          : posicao[posicaoDoCompetidor - 1].feedback)
      ).toFixed(3)}
==================================================
`;
    resolve(tabela);
  });
};

export default {
  "api/v1/chegada": chegada,
  "api/v1/recorde": recorde,
  "api/v1/podio": podio,
  "api/v1/salvarRecorde": salvarRecordeCorrida,
  "api/v1/exibirRecordes": exibirRecordes,
  "api/v1/verificarRecordes": verificarRecorde,
};
