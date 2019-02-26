import React from 'react';

const AvengerMovies = props => {
  return (
    <div>
      {props.movies.map(el => <div key={el}>{el}</div>)}
    </div>
  )
}

export default AvengerMovies;

