import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import PokemonList from './views/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<PokemonList />} />
          <Route path="/pokemones/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
