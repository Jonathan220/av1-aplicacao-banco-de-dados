// Aluno: Jonathan Abreu Pereira Silva
// Turma: 822
// Disciplina: Desenvolvimento de aplicações com banco de dados

import { Veiculo } from "./Veiculo.js";
import { Piloto } from "./Piloto.js";
import { Corrida } from "./Corrida.js";
import api from "./api.js";

let arnaldo = new Piloto("Arnaldo", 4, 15);
// console.log(arnaldo.xp())

let pedro = new Piloto("Pedro", 2, 30);
// console.log(pedro.xp())

let carrango = new Veiculo("carro", "corsa", 2000, "cinza", 100);
let ferrari = new Veiculo("carro", "ferrari", 2021, "vermelha", 400);

let relatorioCorrida = function (obj) {
  api["api/v1/chegada"](obj)
    .then((respostaDistancia) => {
      if (respostaDistancia.length == obj.totalVeiculosCorrida) {
        api["api/v1/recorde"]()
          .then((resposta) => {
            api["api/v1/salvarRecorde"](resposta)
              .then((resultado) => {
                console.log("Recorde salvo");
              })
              .catch((erro) => console.log(erro));
            console.log(`O recorde é de ${resposta.piloto}`);
          })
          .catch((erro) => console.log(erro));
      }
    })
    .catch((erro) => console.log(erro));

  console.log(
    `${obj.piloto} com motor de ${obj.potenciaMotor} cv demorou ${obj.feedback} segundos de 0 a 100 km`
  );

  api["api/v1/podio"]()
    .then((lista) => {
      console.log(lista);
    })
    .catch((erro) => console.log(erro));
};

// ferrari.acelerando0a100(arnaldo, relatorio);
// ferrari.acelerando0a100(pedro, relatorio);

let corrida1 = new Corrida();
corrida1.adicionarCompetidor(arnaldo, ferrari);
corrida1.adicionarCompetidor(pedro, ferrari);
corrida1.exibirCompetidores();
corrida1.largada(relatorioCorrida, api["api/v1/exibirRecordes"]);

// carrango.acelerando0a100(relatorio)
