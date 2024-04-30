import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  if (!pokemonDetails) {
    return <div className="text-center">No se pudo cargar la información del Pokémon.</div>;
  }

  const { sprites, stats, types } = pokemonDetails;

  return (
    <Card className="my-3 rounded mx-auto" style={{ maxWidth: '500px', border:'0' }}>
      <Card.Body className="d-flex justify-content-between">
        <div className="flex-grow-1 pr-3">
          <Card.Img src={sprites.front_default} style={{ width: '100%' }} />
        </div>
        <div className="flex-grow-1">
          <Card.Title as="h3" className="text-capitalize">{name}</Card.Title>
          <ul className="list-unstyled">
            {stats.map((stat) => (
              <li key={stat.stat.name} className="text-capitalize">
                {stat.stat.name.replace('-', ' ')}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <div>
            <strong>Type:</strong>
            <ul className="list-inline">
              {types.map((type) => (
                <li key={type.type.name} className="list-inline-item text-capitalize">
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokemonDetail;