import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';
import bg from '../../../assets/images/card.png';
import vaporeon from '../../../assets/images/imagegame/vaporeon.jpg';
import garchomp from './images/garchomp.jpg';
import lopunny from './images/lopunny.jpg';
import psyduck from './images/psyduck.jpg';
import lucario from './images/lucario.jpg';
import fletchling from './images/fletchling.jpg';
// Lista di Pokémon per il gioco
const POKEMON_LIST = [
  {
    id: 1,
    name: 'Vaporeon',
    image: vaporeon,
  },
  {
    id: 2,
    name: 'Garchomp',
    image: garchomp,
  },
  {
    id: 3,
    name: 'Lopunny',
    image: lopunny,
  },
  {
    id: 4,
    name: 'Psyduck',
    image: psyduck,
  },
  {
    id: 5,
    name: 'Lucario',
    image: lucario,
  },
  {
    id: 6,
    name: 'fletchling',
    image: fletchling,
  },
  {
    id: 7,
    name: 'Gengar',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
  },
  {
    id: 8,
    name: 'Eevee',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
  },
  {
    id: 9,
    name: 'Snorlax',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  },
  {
    id: 10,
    name: 'Gyarados',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
  },
  {
    id: 11,
    name: 'Dragonite',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
  },
  {
    id: 12,
    name: 'Meowth',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
  },
];
const cardbg = new URL('../../../assets/images/cardbg.png', import.meta.url)
  .href;
function ImageGame() {
  const { players, guessedCards } = useGlobalContext();
  const [gameCards, setGameCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
      return;
    }

    // Invece di filtrare le carte, mostra tutte le carte ma contrassegna quelle indovinate
    const cardsWithStatus = POKEMON_LIST.map((card) => ({
      ...card,
      guessed: guessedCards.includes(card.id),
    }));

    // Mischia le carte all'avvio
    const shuffled = [...cardsWithStatus].sort(() => 0.5 - Math.random());
    setGameCards(shuffled);
  }, [navigate, players, guessedCards]);

  // Quando si seleziona una carta, naviga a GuessPage passando i dati della carta
  const handleCardSelect = (card) => {
    // Impedisci la selezione se la carta è già stata indovinata
    if (card.guessed) return;

    navigate('/game/image/guess', {
      state: {
        selectedCard: card,
        totalCards: gameCards.length,
      },
    });
  };

  return (
    <GameContainer>
      <BackButton to='/game'>
        <FaArrowLeft /> Torna ai giochi
      </BackButton>

      <PageTitle>Chi è quel Pokémon?</PageTitle>
      <GameInstructions>
        Seleziona una carta misteriosa per iniziare la sfida
      </GameInstructions>

      <CardGrid>
        {gameCards.map((card) => (
          <PokemonCard
            key={card.id}
            onClick={() => handleCardSelect(card)}
          >
            {card.guessed ? (
              <GuessedCardOverlay>
                <img
                  src={card.image}
                  alt={card.name}
                />
                <GuessedLabel>{card.name}</GuessedLabel>
              </GuessedCardOverlay>
            ) : (
              <img
                src={bg}
                alt=''
              />
            )}
          </PokemonCard>
        ))}
      </CardGrid>

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
        <MasterBallBg className='ball5' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default ImageGame;

// Animazioni keyframes
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

// Stili dei componenti
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
`;

const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  z-index: 1;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1024px;
  margin: auto 0;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
  }
`;

// Elementi di sfondo
const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  /* Dark background with Pokemon pattern */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1428;
    background-image: radial-gradient(
        circle at 30% 20%,
        rgba(59, 76, 202, 0.08) 0%,
        rgba(59, 76, 202, 0) 50%
      ),
      radial-gradient(
        circle at 70% 60%,
        rgba(238, 21, 21, 0.08) 0%,
        rgba(238, 21, 21, 0) 50%
      ),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' fill='%233b4cca' fill-opacity='0.05'/%3E%3Cpath d='M30 60a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' fill='%23ee1515' fill-opacity='0.05'/%3E%3C/svg%3E");
    z-index: -1;
  }

  /* Additional subtle Pokemon elements */
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-7a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' fill='%23ffde00' fill-opacity='0.03'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }
`;

const BallBase = styled.div`
  position: absolute;
  opacity: 0.15;
  filter: blur(2px);
  z-index: 0;

  &.ball1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
    animation: ${float} 15s ease-in-out infinite;
  }

  &.ball2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: 10%;
    animation: ${float} 20s ease-in-out infinite reverse;
  }

  &.ball3 {
    width: 250px;
    height: 250px;
    top: 30%;
    left: -100px;
    animation: ${float} 17s ease-in-out infinite 5s;
  }

  &.ball4 {
    width: 280px;
    height: 280px;
    bottom: 10%;
    right: 5%;
    animation: ${float} 22s ease-in-out infinite 3s;
  }

  &.ball5 {
    width: 150px;
    height: 150px;
    top: 20%;
    right: 15%;
    animation: ${float} 18s ease-in-out infinite 8s;
  }
`;

const PokeBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(238, 21, 21, 0.7) 45.5%,
    rgba(238, 21, 21, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(238, 21, 21, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const GreatBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(59, 76, 202, 0.7) 45.5%,
    rgba(59, 76, 202, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(59, 76, 202, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const UltraBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(255, 222, 0, 0.7) 45.5%,
    rgba(255, 222, 0, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 222, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;

const MasterBallBg = styled(BallBase)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(147, 58, 180, 0.7) 45.5%,
    rgba(147, 58, 180, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(147, 58, 180, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`;
// Modifica il componente PokemonCard per gestire lo stato "indovinato"
interface PokemonCardProps {
  $guessed?: boolean;
}

const PokemonCard = styled.div<PokemonCardProps>`
  /* perspective: 1000px; */
  width: 150px;
  cursor: ${(props) => (props.$guessed ? 'default' : 'pointer')};
  aspect-ratio: 2.5 / 3.5;
  transition: transform 0.3s, opacity 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid
    ${(props) => (props.$guessed ? 'rgba(255, 255, 255, 0.5)' : '#ffde00')};

  &:hover {
    transform: ${(props) => (props.$guessed ? 'none' : 'scale(1.05)')};
  }

  img {
    width: ${(props) => (props.$guessed ? '100%' : '330%')};
    height: ${(props) => (props.$guessed ? '100%' : 'auto')};
    object-fit: ${(props) => (props.$guessed ? 'cover' : 'contain')};
  }
`;

// Nuovi componenti per le carte indovinate
const GuessedCardOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%); /* Rendi l'immagine in bianco e nero */
    opacity: 0.8; /* Opacità ridotta */
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1); /* Leggera sfumatura scura */
    pointer-events: none;
  }
`;

const GuessedLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;
