export class Vaga {
  constructor(options) {
    const data = options || {}
    this.idVaga = data.idVaga
    this.titulo = data.titulo
    this.descricaoCurta = data.descricaoCurta
    this.descricaoCompleta = data.descricaoCompleta
  }
}