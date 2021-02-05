import React, { Component } from 'react'
import digimons from './data'
import Digimon from './Digimon'

class Digivice extends Component {
  render() {
    return (
      <div>
        <header className="digi-title">
          <h1>Digimons</h1>
        </header>
        <section className="digi-body">
          {digimons.map((digimon) => {
            return <section key={digimon.id} className="digi-card">
            <Digimon 
              Name={digimon.Name}
              Stage={digimon.Stage}
              Type={digimon.Type}
              Attribute={digimon.Attribute}
              Memory={digimon.Memory}
              Number={digimon.id}
              Image={digimon.Image}
              MoreInfo={digimon.MoreInfo}
            />
            </section>
          })}
        </section>
      </div>
    )
  }
}

export default Digivice;