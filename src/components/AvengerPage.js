import React from 'react';
import avengers from '../data';

function AvengerPage(props) {

  const id = props.match.params.id; {/* Matches the "variable" (:id) put into the route for this component at /avengers/:id in app.js*/}
  const avenger = avengers.find(avenger => `${avenger.id}` === id);
  return (
    <div>
      <img src={avenger.img} className="character-image" alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>{avenger.nickname}</h4>
        <p>{avenger.description}</p>
      </div>
    </div>
  );
}

export default AvengerPage;