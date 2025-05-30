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
  FaCity,
  FaCrown,
  FaMedal,
  FaStar,
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
    if (players.length === 0) {
      navigate('/');
    }
  }, [navigate, players]);

  // Enhanced game options with better descriptions and categories
  const gameOptions = [
    {
      id: 'categories',
      title: 'Quiz Pokémon',
      description: 'Metti alla prova le tue conoscenze sui Pokémon',
      icon: <FaGamepad />,
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%)',
      category: 'Trivia',
      path: '/game/categories',
    },
    {
      id: 'wheel',
      title: 'Ruota della Fortuna',
      description: 'Gira la ruota e affronta sfide casuali per vincere punti',
      icon: <FaDice />,
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      category: 'Fortuna',
      path: '/game/wheel',
    },
    {
      id: 'image',
      title: 'Chi è quel Pokémon?',
      description: 'Riconosci i Pokémon dalle loro silhouette misteriose',
      icon: <FaImage />,
      color: '#FFE66D',
      gradient: 'linear-gradient(135deg, #FFE66D 0%, #FF9F43 100%)',
      category: 'Visual',
      path: '/game/image',
    },
    {
      id: 'city',
      title: 'Città Pokémon',
      description: 'Esplora e indovina le città del mondo Pokémon',
      icon: <FaCity />,
      color: '#A8E6CF',
      gradient: 'linear-gradient(135deg, #A8E6CF 0%, #7FCDCD 100%)',
      category: 'Geografia',
      path: '/game/city',
    },
    {
      id: 'pokemon',
      title: 'Poké-Detective',
      description: 'Risolvi enigmi e indovina i Pokémon dagli indizi',
      icon: <FaMagnifyingGlass />,
      color: '#C7CEEA',
      gradient: 'linear-gradient(135deg, #C7CEEA 0%, #A8A8F0 100%)',
      category: 'Mistero',
      path: '/game/pokemon',
    },
  ];

  const handleScoreEdit = (player) => {
    const newScore = prompt(
      `Modifica il punteggio per ${player.name}:`,
      player.score.toString()
    );

    if (newScore !== null) {
      const parsedScore = parseInt(newScore, 10);
      if (!isNaN(parsedScore)) {
        updatePlayerScore(player.id, parsedScore);
      } else {
        alert('Inserisci un numero valido.');
      }
    }
  };

  // Sort players by score for leaderboard
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <GameContainer>
      <Header>
        <BackButton to='/'>
          <FaArrowLeft />
          <span>Home</span>
        </BackButton>

        <HeaderContent>
          <PageTitle>Centro Sfide Pokémon</PageTitle>
          <PageSubtitle>Scegli la tua avventura</PageSubtitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <GamesSection>
          <SectionTitle>
            <FaGamepad />
            Modalità di Gioco
          </SectionTitle>

          <GameGrid>
            {gameOptions.map((game, index) => (
              <GameCard
                key={game.id}
                to={game.path}
                $gradient={game.gradient}
                $delay={index * 0.1}
              >
                <GameCardHeader>
                  <GameCategory>{game.category}</GameCategory>
                  <GameIconContainer>{game.icon}</GameIconContainer>
                </GameCardHeader>

                <GameCardBody>
                  <GameTitle>{game.title}</GameTitle>
                  <GameDescription>{game.description}</GameDescription>
                </GameCardBody>

                <GameCardFooter>
                  <PlayButton>
                    Gioca Ora
                    <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                  </PlayButton>
                </GameCardFooter>

                <GameCardGlow />
              </GameCard>
            ))}
          </GameGrid>
        </GamesSection>

        <LeaderboardSection>
          <SectionTitle>
            <FaTrophy />
            Classifica Allenatori
          </SectionTitle>

          <LeaderboardContainer>
            {sortedPlayers.map((player, index) => (
              <PlayerCard
                key={player.id}
                $rank={index + 1}
              >
                <PlayerRank $rank={index + 1}>
                  {index === 0 && <FaCrown />}
                  {index === 1 && <FaMedal />}
                  {index === 2 && <FaStar />}
                  {index > 2 && <span>{index + 1}</span>}
                </PlayerRank>

                <PlayerAvatarContainer $rank={index + 1}>
                  <PlayerAvatarImage
                    src={player.avatar}
                    alt={player.name}
                  />
                  {index < 3 && <PlayerBadge $rank={index + 1} />}
                </PlayerAvatarContainer>

                <PlayerInfo>
                  <PlayerName>{player.name}</PlayerName>
                  <PlayerScore onClick={() => handleScoreEdit(player)}>
                    <ScoreIcon />
                    {player.score.toLocaleString()} punti
                    <EditIcon>
                      <FaEdit />
                    </EditIcon>
                  </PlayerScore>
                </PlayerInfo>

                <PlayerActions>
                  {/* <ActionButton>
                    <FaHatWizard />
                  </ActionButton> */}
                </PlayerActions>
              </PlayerCard>
            ))}
          </LeaderboardContainer>
        </LeaderboardSection>
      </MainContent>

      <BackgroundElements>
        <FloatingPokeball className='pokeball-1' />
        <FloatingPokeball className='pokeball-2' />
        <FloatingPokeball className='pokeball-3' />
        <StarField />
      </BackgroundElements>
    </GameContainer>
  );
}

export default Game;

// Enhanced Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 222, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 222, 0, 0.6); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

// Modern Styled Components
const GameContainer = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #24243e 50%, #313155 100%);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  position: relative;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(59, 76, 202, 0.8) 0%,
    rgba(35, 57, 117, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  border-bottom: 3px solid #ffde00;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 222, 0, 0.5);
  border-radius: 50px;
  padding: 0.6rem 1rem;
  color: #ffde00;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 100;

  &:hover {
    background: rgba(255, 222, 0, 0.2);
    transform: translateX(-5px);
    box-shadow: 0 5px 20px rgba(255, 222, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffde00 0%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 222, 0, 0.5);
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.3rem 0 0;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

const GamesSection = styled.section`
  flex-shrink: 0;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GameCard = styled(Link)<{ $gradient: string; $delay: number }>`
  display: block;
  background: ${(props) => props.$gradient};
  border-radius: 15px;
  padding: 0;
  text-decoration: none;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${fadeInUp} 0.6s ease ${(props) => props.$delay}s both;
  border: 2px solid rgba(255, 255, 255, 0.1);
  min-height: 200px;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const GameCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0;
`;

const GameCategory = styled.span`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GameIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const GameCardBody = styled.div`
  padding: 1rem;
`;

const GameTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const GameDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
`;

const GameCardFooter = styled.div`
  padding: 0 1rem 1rem;
`;

const PlayButton = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const GameCardGlow = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 222, 0, 0.5),
    transparent
  );
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;

  ${GameCard}:hover & {
    opacity: 1;
  }
`;

const LeaderboardSection = styled.section`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  max-height: none;
  /* padding-bottom: 0.5rem; */

  &::-webkit-scrollbar {
    height: 6px;
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
    gap: 0.8rem;
  }
`;

const PlayerCard = styled.div<{ $rank: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid
    ${(props) =>
      props.$rank === 1
        ? '#FFD700'
        : props.$rank === 2
        ? '#C0C0C0'
        : props.$rank === 3
        ? '#CD7F32'
        : 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.$rank === 1
        ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent)'
        : props.$rank === 2
        ? 'linear-gradient(135deg, rgba(192, 192, 192, 0.1), transparent)'
        : props.$rank === 3
        ? 'linear-gradient(135deg, rgba(205, 127, 50, 0.1), transparent)'
        : 'none'};
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-width: 160px;
    padding: 0.8rem;
  }
`;

const PlayerRank = styled.div<{ $rank: number }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) =>
    props.$rank === 1
      ? 'linear-gradient(135deg, #FFD700, #FFA500)'
      : props.$rank === 2
      ? 'linear-gradient(135deg, #C0C0C0, #A9A9A9)'
      : props.$rank === 3
      ? 'linear-gradient(135deg, #CD7F32, #8B4513)'
      : 'linear-gradient(135deg, #4ECDC4, #44A08D)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  svg {
    font-size: 1.2rem;
    color: white;
  }
`;

const PlayerAvatarContainer = styled.div<{ $rank: number }>`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 0.8rem;
  border: 2px solid
    ${(props) =>
      props.$rank === 1
        ? '#FFD700'
        : props.$rank === 2
        ? '#C0C0C0'
        : props.$rank === 3
        ? '#CD7F32'
        : '#4ECDC4'};
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayerAvatarImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

const PlayerBadge = styled.div<{ $rank: number }>`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) =>
    props.$rank === 1 ? '#FFD700' : props.$rank === 2 ? '#C0C0C0' : '#CD7F32'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  border: 2px solid white;
  z-index: 2;

  &::after {
    content: '${(props) => props.$rank}';
  }
`;

const PlayerInfo = styled.div`
  text-align: center;
  z-index: 1;
  margin-bottom: 0.8rem;
`;

const PlayerName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

const PlayerScore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    color: white;
    transform: scale(1.05);
  }
`;

const ScoreIcon = styled.div`
  width: 16px;
  height: 16px;
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
`;

const EditIcon = styled.span`
  opacity: 0;
  transition: all 0.2s ease;
  margin-left: 0.5rem;

  ${PlayerScore}:hover & {
    opacity: 1;
  }
`;

const PlayerActions = styled.div`
  z-index: 1;
`;

const ActionButton = styled.button`
  background: rgba(255, 222, 0, 0.2);
  border: 2px solid #ffde00;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffde00;
    color: #0f0c29;
    transform: rotate(15deg) scale(1.1);
  }
`;

const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const FloatingPokeball = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 3px #333, 0 0 0 6px white;
  }

  &.pokeball-1 {
    top: 20%;
    right: 10%;
    animation-delay: 0s;
  }

  &.pokeball-2 {
    bottom: 30%;
    left: 5%;
    animation-delay: 2s;
  }

  &.pokeball-3 {
    top: 60%;
    right: 20%;
    animation-delay: 4s;
  }
`;

const StarField = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(2px 2px at 20px 30px, #ffde00, transparent),
    radial-gradient(2px 2px at 40px 70px, #4ecdc4, transparent),
    radial-gradient(1px 1px at 90px 40px, #ff6b6b, transparent),
    radial-gradient(1px 1px at 130px 80px, #ffe66d, transparent),
    radial-gradient(2px 2px at 160px 30px, #c7ceea, transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: ${twinkle} 3s ease-in-out infinite alternate;
  opacity: 0.5;
`;
