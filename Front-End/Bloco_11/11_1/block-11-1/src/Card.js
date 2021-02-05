import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
  <p className="card-text"><strong>{props.bold}</strong>{props.description}</p>
  <p className="card-text"><strong>{props.bold2}</strong>{props.description2}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

export default Card;