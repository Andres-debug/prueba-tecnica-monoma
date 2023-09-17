import React from 'react';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <h2 className="text-xl font-semibold">{name}</h2>
      <img src={imageUrl} alt={name} className="mt-2 w-32 h-32 mx-auto" />
    </div>
  );
};


