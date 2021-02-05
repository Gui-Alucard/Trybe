import React, { Component } from 'react'

class Digimon extends Component {
  render() {
    const { Name, Stage, Type, Attribute, Memory, Number, Image, MoreInfo } = this.props;

    return (
      <section className="digi-card-inside">
          <img src={Image} alt={Name} className="digi-img" />
        <div className="digi-info">
          <li><strong>Digimon:</strong> {Name}</li>
          <li><strong>Estágio:</strong> {Stage}</li>
          <li><strong>Tipo:</strong> {Type}</li>
          <li><strong>Atributo:</strong> {Attribute}</li>
          <li><strong>Memória:</strong> {Memory}</li>
          <li><strong>ID:</strong> {Number}</li>
          <br />
          <a href={MoreInfo} className="btn btn-primary">Mais Informações</a>
        </div>
      </section>
    )
  }
}

export default Digimon
