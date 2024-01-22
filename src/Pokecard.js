import React from 'react';
import './Pokecard.css'

function Pokecard({ id, name, type, base_experience }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl}></img>
      <p> Type: {type} </p>
      <p> EXP: {base_experience} </p>
    </div>
  )
}
  

export default Pokecard;