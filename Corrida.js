export class Corrida {
  competidores = [];
  adicionarCompetidor(piloto, veiculo) {
    this.competidores.push({ piloto, veiculo });
  }
  exibirCompetidores() {
    if (this.competidores.length === 0) {
      console.log("A corrida não possui competidores!");
      return;
    }

    for (let competidor of this.competidores) {
      console.log(
        `Competidor: ${competidor.piloto.nome}, Veiculo: ${competidor.veiculo.modelo}`
      );
    }
  }
  largada(cb) {
    if (this.competidores.length === 0) {
      console.log("Não é possível iniciar uma corrida sem competidores!");
      return;
    }
    for (let competidor of this.competidores) {
      competidor.veiculo.acelerando0a100(competidor.piloto, cb);
    }
  }
}
