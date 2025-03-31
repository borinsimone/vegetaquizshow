import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGamepad,
  FaDice,
  FaImage,
  FaDragon,
  FaAtom,
  FaTrophy,
  FaEdit,
  FaUserAlt,
  FaHatWizard,
} from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useGlobalContext } from '../../context/GlobalContext';

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

interface GameOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
}

function Game() {
  const navigate = useNavigate();
  const { players, updatePlayerScore } = useGlobalContext();

  useEffect(() => {
    // Se non ci sono giocatori, torna alla landing page
    if (players.length === 0) {
      navigate('/');
    }
  }, [navigate, players]);

  // Opzioni di gioco disponibili
  const gameOptions: GameOption[] = [
    {
      id: 'categories',
      title: 'Quiz Pokémon',
      description: 'Sfida le tue conoscenze sui Pokémon in varie categorie',
      icon: <FaGamepad />,
      color: '#EE1515', // Rosso Pokémon
      path: '/game/categories',
    },
    {
      id: 'wheel',
      title: 'Ruota della Fortuna',
      description: 'Gira la ruota e affronta sfide casuali',
      icon: <FaDice />,
      color: '#3B4CCA', // Blu Pokémon
      path: '/game/wheel',
    },
    {
      id: 'image',
      title: "WhO's ThAt PoKéMoN?",
      description: "Indovina il Pokémon dall'ombra o immagine sfocata",
      icon: <FaImage />,
      color: '#FF9C54', // Arancione Pokémon
      path: '/game/image',
    },
    {
      id: 'fusion',
      title: 'Fusioni Pokémon',
      description: 'Indovina quali Pokémon creano una fusione',
      icon: <FaAtom />,
      color: '#9966FF', // Viola Pokémon
      path: '/game/fusion',
    },
    {
      id: 'pokemon',
      title: 'Poké-Sherlock',
      description: 'Indovina il Pokémon dagli indizi',
      icon: <FaMagnifyingGlass />,
      color: '#78C850', // Verde Pokémon
      path: '/game/pokemon',
    },
  ];
  <PlayerList>
    {players.map((player) => (
      <PlayerCard key={player.id}>
        <PlayerAvatarContainer>
          <PlayerAvatarImage
            src={player.avatar}
            alt={player.name}
          />
        </PlayerAvatarContainer>
        <PlayerInfo>
          <PlayerName>{player.name}</PlayerName>
          <PlayerScore>
            <BadgeIcon /> {player.score} punti
          </PlayerScore>
        </PlayerInfo>
        <TrainerBadge>
          <FaHatWizard />
        </TrainerBadge>
      </PlayerCard>
    ))}
  </PlayerList>;
  const handleScoreEdit = (player) => {
    const newScore = prompt(
      `Modifica il punteggio per ${player.name}:`,
      player.score.toString()
    );

    // Verifica che sia stato inserito un valore e che sia un numero
    if (newScore !== null) {
      const parsedScore = parseInt(newScore, 10);

      if (!isNaN(parsedScore)) {
        // Aggiorna il punteggio utilizzando la funzione del context
        updatePlayerScore(player.id, parsedScore);
      } else {
        alert('Inserisci un numero valido.');
      }
    }
  };
  return (
    <GameContainer>
      <BackButton to='/'>
        <FaArrowLeft /> Torna alla home
      </BackButton>

      <PageTitle>Centro Sfide Pokémon</PageTitle>

      <GameGrid>
        {gameOptions.map((game) => (
          <GameCard
            key={game.id}
            to={game.path}
            $color={game.color}
          >
            <GameIconContainer $color={game.color}>
              {game.icon}
            </GameIconContainer>
            <GameDetails>
              <GameTitle>{game.title}</GameTitle>
              <GameDescription>{game.description}</GameDescription>
            </GameDetails>
            <CardArrow>
              <div className='arrow'>→</div>
            </CardArrow>
            <PokeBallOverlay />
          </GameCard>
        ))}
      </GameGrid>

      <PlayerSection>
        <SectionHeader>
          <SectionTitle>Allenatori</SectionTitle>
          <PlayerCount>
            {players.length}{' '}
            {players.length === 1 ? 'allenatore' : 'allenatori'}
          </PlayerCount>
        </SectionHeader>

        <PlayerList>
          {players.map((player) => (
            <PlayerCard key={player.id}>
              <PlayerAvatarContainer>
                <PlayerAvatarImage
                  src={player.avatar}
                  alt={player.name}
                />
              </PlayerAvatarContainer>
              <PlayerInfo>
                <PlayerName>{player.name}</PlayerName>
                <PlayerScore onClick={() => handleScoreEdit(player)}>
                  <BadgeIcon /> {player.score} punti
                  <EditIcon>
                    <FaEdit />
                  </EditIcon>
                </PlayerScore>
              </PlayerInfo>
              <TrainerBadge>
                <FaHatWizard />
              </TrainerBadge>
            </PlayerCard>
          ))}
        </PlayerList>
      </PlayerSection>

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

export default Game;

// Animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shine = keyframes`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`;

const pokeballWiggle = keyframes`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

// Styled Components
const GameContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #233975;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  opacity: 0.15;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333, 0 0 0 10px white;
  }

  &.ball1 {
    top: -40px;
    right: 10%;
    animation: ${float} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`;

const GreatBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${float} 15s ease-in-out infinite;
  }
`;

const UltraBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 5%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${float} 18s ease-in-out infinite reverse;
  }
`;

const MasterBallBg = styled(PokeBallBg)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 40%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${float} 14s ease-in-out infinite;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 30px;
  font-weight: 500;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 3rem 0;
  text-align: center;
  z-index: 1;
  color: #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin: 2rem 0;
    -webkit-text-stroke: 1px #3b4cca;
  }
`;

const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface ColorProps {
  $color: string;
}

const GameCard = styled(Link)<ColorProps>`
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 3px solid ${(props) => props.$color};
  width: 350px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transform: skewX(-20deg);
      animation: ${shine} 1s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PokeBallOverlay = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(240, 240, 240, 0.2) 0%,
    rgba(240, 240, 240, 0.2) 50%,
    rgba(238, 21, 21, 0.2) 50%,
    rgba(238, 21, 21, 0.2) 100%
  );

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.3),
      0 0 0 4px rgba(255, 255, 255, 0.3);
  }

  ${GameCard}:hover & {
    animation: ${pokeballWiggle} 1s ease-in-out;
  }
`;

const GameIconContainer = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${(props) => props.$color};
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  margin-right: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.$color};
  position: relative;
  z-index: 1;
`;

const GameDetails = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const GameTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`;

const CardArrow = styled.div`
  margin-left: 1rem;
  position: relative;
  z-index: 1;

  .arrow {
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.5;
    transition: all 0.3s ease;
    color: #ffde00;
  }

  ${GameCard}:hover .arrow {
    transform: translateX(5px);
    opacity: 1;
  }
`;

const BadgeIcon = styled.div`
  width: 18px;
  height: 18px;
  background: #ffde00;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;
`;

const PlayerSection = styled.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;
  margin-top: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: -1;
    border-radius: 16px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`;

const PlayerCount = styled.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PlayerCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.2;
    z-index: 0;
    border-radius: 10px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    border-color: #ffde00;
  }
`;

const PlayerAvatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`;

const PlayerInfo = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const PlayerName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

const PlayerScore = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  width: fit-content;
  &:hover {
    color: white;
  }
`;

const EditIcon = styled.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease;
  color: #ffde00;

  ${PlayerScore}:hover & {
    opacity: 1;
  }
`;
const PlayerAvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Effetto hover per evidenziare l'animazione */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${PlayerCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;
const TrainerBadge = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${PlayerCard}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`;
const PlayerAvatarImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`;
