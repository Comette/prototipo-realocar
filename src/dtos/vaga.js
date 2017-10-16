export class Vaga {
  constructor(options) {
    const data = options || {}
    this.idVaga = data.idVaga
    this.titulo = data.titulo
    this.localTrabalho = data.localTrabalho
    this.descricao = data.descricao
  }
}