import React from 'react';
import pikachu from '../assets/img/POTY_Pikachu_3.jpg'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="display-4">Bienvenido Maestro Pokémon</h1>
      <img src={pikachu}/>
    </div>
  );
};

export default Home;
