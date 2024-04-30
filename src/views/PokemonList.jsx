import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error('Failed to fetch pokemons:', error);
        setPokemons([]);  // Consider showing an error message to the user
      }
    };

    fetchPokemons();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleSeeDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <div style={{
      textAlign:'center',
      paddingLeft: '30%',
      paddingRight: '30%',
    }}>
      <h1>Selecciona un pokemon</h1>
      <Form>
        <Form.Group controlId="pokemonSelect">
          <Form.Label>Pokemones</Form.Label>
          <Form.Control as="select" value={selectedPokemon} onChange={handleSelectChange}>
            <option value="">Seleccione un Pokémon</option>
            {pokemons.map(pokemon => (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button style={{margin:'10px'}} variant="danger" onClick={handleSeeDetails} disabled={!selectedPokemon}>
          Ver Detalle
        </Button>
      </Form>
    </div>
  );
};

export default PokemonList;
