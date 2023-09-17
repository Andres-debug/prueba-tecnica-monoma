import React, { useEffect, useState } from 'react';

interface PokemonModalProps {
  pokemon: any;
  onClose: () => void;
}

export const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
    const [details, setDetails] = useState<any>({});

    useEffect(() => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
        })
        .catch((error) => {
          console.error('Error al obtener detalles del Pokémon:', error);
        });
    }, [pokemon]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white rounded-lg overflow-hidden shadow-md">
        <div className="modal-header bg-blue-500 text-white py-2 px-4">
          <h2 className="text-xl font-semibold">{pokemon.name}</h2>
          <button className="modal-close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
        <div className="modal-body p-4">
          <div className="mb-4">
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
              alt={pokemon.name}
              className="mx-auto"
            />
          </div>
          <div className="mb-2">
            <p className="text-gray-600">Altura: {details.height} decímetros</p>
          </div>
          <div>
            <p className="text-gray-600">Peso: {details.weight} hectogramos</p>
          </div>
        </div>
      </div>
    </div>
  );
};


