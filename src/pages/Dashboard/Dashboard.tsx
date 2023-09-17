import React, { useEffect, useState } from 'react';
import {NavBar} from '../../components/navBar/navBar';
import {PokemonCard} from '../../components/pokemonCard/pokemonCard';
import {Pagination} from '../../components/pagination/pagination';
import { PokemonModal } from '../../components/pokemonModal/pokemonModal';

export const Dashboard: React.FC = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 10}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar la lista de Pokémon');
        }
        const data = await response.json();
        setPokemonList(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error('Error al cargar la lista de Pokémon:', error);
      }
    };

    fetchPokemonList();
  }, [currentPage]);

  const handlePokemonClick = (pokemon:any) => {
    setSelectedPokemon(pokemon);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {pokemonList.map((pokemon: any, index: number) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              imageUrl={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
              onClick={() => handlePokemonClick(pokemon)}
            />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
      </div>
    </div>
  );
};


