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
import flygon from './images/flygon.jpg';
import stoutland from './images/stoutland.jpg';
import charizard from './images/charizard.jpg';
import sceptile from './images/sceptile.jpg';
import deoxys from './images/deoxys.jpg';
import bulbasaur from './images/bulbasaur.jpg';

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
    name: 'Flygon',
    image: flygon,
  },
  {
    id: 8,
    name: 'Stoutland',
    image: stoutland,
  },
  {
    id: 9,
    name: 'Charizard',
    image: charizard,
  },
  {
    id: 10,
    name: 'Sceptile',
    image: sceptile,
  },
  {
    id: 11,
    name: 'Deoxys',
    image: deoxys,
  },
  {
    id: 12,
    name: 'Bulbasaur',
    image: bulbasaur,
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
  height: 100vh;
  padding: 1rem;
  position: relative;
  overflow: hidden;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(19, 42, 87, 0.9);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 0.9rem;

  &:hover {
    background: #3b4cca;
    transform: translateX(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin: 0;
  text-align: center;
  z-index: 1;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
`;

const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 1rem;
  z-index: 1;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.3rem 0 0.8rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  align-content: start;
  z-index: 1;
  padding: 0 1rem;
  overflow-y: auto;
  max-height: calc(100vh - 200px);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffde00;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.8rem;
    padding: 0 0.5rem;
    max-height: calc(100vh - 160px);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
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
  width: 100%;
  aspect-ratio: 2.5 / 3.5;
  cursor: ${(props) => (props.$guessed ? 'default' : 'pointer')};
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  border: 3px solid
    ${(props) => (props.$guessed ? 'rgba(255, 255, 255, 0.3)' : '#ffde00')};
  background: ${(props) =>
    props.$guessed ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};

  &:hover {
    transform: ${(props) =>
      props.$guessed ? 'none' : 'translateY(-8px) scale(1.05)'};
    box-shadow: ${(props) =>
      props.$guessed
        ? '0 8px 25px rgba(0, 0, 0, 0.4)'
        : '0 15px 35px rgba(255, 222, 0, 0.4)'};
  }

  img {
    width: ${(props) => (props.$guessed ? '100%' : '300%')};
    height: ${(props) => (props.$guessed ? '100%' : 'auto')};
    object-fit: ${(props) => (props.$guessed ? 'cover' : 'contain')};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);

    &:hover {
      transform: ${(props) =>
        props.$guessed ? 'none' : 'translateY(-5px) scale(1.03)'};
    }
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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.7);
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.3),
      rgba(59, 76, 202, 0.2)
    );
    pointer-events: none;
  }

  &::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: #78c850;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    z-index: 2;
    opacity: 0.9;
  }
`;

const GuessedLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(19, 42, 87, 0.95),
    rgba(19, 42, 87, 0.8)
  );
  color: white;
  padding: 0.5rem 0.3rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  border-top: 2px solid rgba(255, 222, 0, 0.5);
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.2rem;
  }
`;
