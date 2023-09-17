import React, { useEffect, useState } from "react";
import Modal from "react-modal";

interface PokemonModalProps {
  pokemon: any;
  onClose: () => void;
  modalIsOpen: boolean;
}

const customModalStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    maxWidth: "320px",
    height: "15rem",
    width: "100%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export const PokemonModal: React.FC<PokemonModalProps> = ({
  pokemon,
  onClose,
  modalIsOpen,
}) => {
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(details+'DATAAAAA')
      })
      .catch((error) => {
        console.error("Error al obtener detalles del Pokémon:", error);
      });
  }, [pokemon]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      contentLabel="Pokemon Modal"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
          alt={pokemon.name}
          className="w-full h-42 object-cover"
        />
        <div className="p-4">
          <div className="mb-4 relative">
            <div className="bg-blue-500 text-white rounded-lg w-36 p-2 absolute -top-12 right-4 flex flex-col items-center">
              <div className="text-center">
                <p className="text-sm">{`Weight: ${details?.weight} hg`}</p>
                <p className="text-sm">{`Height: ${details?.height} dm`}</p>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">{pokemon.name}</h2>
          <p className="text-sm">
        Abilities: {details?.abilities?.map((ability:any) => ability.ability.name).join(', ')}
      </p>
        </div>
        <div className="bg-blue-500 text-white py-2 px-4 text-center">
          <button
            className="modal-close-button bg-transparent border border-solid border-white px-3 py-1 rounded-full text-sm hover:bg-white hover:text-blue-500"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
