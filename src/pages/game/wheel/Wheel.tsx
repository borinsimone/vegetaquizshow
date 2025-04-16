import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlay, FaUserAlt } from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';
import { Wheel as RouletteWheel } from 'react-custom-roulette';

const WHEEL_SEGMENTS = [
  { id: 1, label: 'Passa', color: '#FF5252', points: 0 },
  {
    id: 2,
    label: 'Rebus',
    color: '#FF9800',
    points: 200,
    url: '/game/wheel/rebus',
  },
  { id: 7, label: 'Bonus', color: '#F44336', points: 200 },

  {
    id: 4,
    label: 'Fusioni',
    color: '#4CAF50',
    points: 400,
    url: '/game/wheel/fusion',
  },
  { id: 8, label: 'Malus', color: '#000000', points: -100 },

  {
    id: 5,
    label: 'Suono',
    color: '#2196F3',
    points: 500,
    url: '/game/wheel/sound',
  },
];

function Wheel() {
  const navigate = useNavigate();
  const { players, updatePlayerScore } = useGlobalContext();
  const [activePlayer, setActivePlayer] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Formatta i dati per react-custom-roulette
  const wheelData = WHEEL_SEGMENTS.map((segment) => ({
    option: segment.label,
    style: { backgroundColor: segment.color, textColor: 'white' },
  }));

  // Reindirizza se non ci sono giocatori
  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
    }
  }, [players, navigate]);

  const handleSelectPlayer = (player) => {
    if (!isSpinning) {
      setActivePlayer(player);
      setSelectedSegment(null);
      setShowResult(false);
    }
  };

  const spinWheel = () => {
    if (!activePlayer) {
      alert('Seleziona prima un giocatore!');
      return;
    }

    if (!mustSpin) {
      // Genera un numero casuale per il segmento vincente
      const newPrizeNumber = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setIsSpinning(true);
      setShowResult(false);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setIsSpinning(false);
    const segment = WHEEL_SEGMENTS[prizeNumber];
    setSelectedSegment(segment);
    setShowResult(true);
    if (segment.label === 'Bonus' || segment.label === 'Malus') {
      if (activePlayer) {
        // Calcola il nuovo punteggio
        const newScore = activePlayer.score + segment.points;

        // Aggiorna il punteggio del giocatore
        updatePlayerScore(activePlayer.id, newScore);

        // Aggiorna localmente l'activePlayer con il nuovo punteggio
        setActivePlayer({
          ...activePlayer,
          score: newScore,
        });
      }
    }
  };

  const handleContinue = () => {
    if (selectedSegment) {
      navigate('/game/wheel/challenge', {
        state: {
          player: activePlayer,
          segment: selectedSegment,
        },
      });
    }
  };
  const renderResult = () => {
    if (!selectedSegment) return null;

    // Per Bonus e Malus, mostra conferma dell'aggiunta/sottrazione punti
    if (
      selectedSegment.label === 'Bonus' ||
      selectedSegment.label === 'Malus'
    ) {
      const action =
        selectedSegment.label === 'Bonus' ? 'aggiunti' : 'sottratti';
      const pointsText = Math.abs(selectedSegment.points);

      return (
        <ResultDisplay $color={selectedSegment.color}>
          <ResultTitle>{selectedSegment.label}!</ResultTitle>
          <ResultValue>
            {selectedSegment.points > 0 ? '+' : '-'}
            {pointsText} punti
          </ResultValue>
          <ResultPoints>{action}</ResultPoints>
          <ContinueButton onClick={() => setShowResult(false)}>
            Continua
          </ContinueButton>
        </ResultDisplay>
      );
    }

    // Per il segmento 'Passa', mostra messaggio di turno saltato
    if (selectedSegment.label === 'Passa') {
      return (
        <ResultDisplay $color={selectedSegment.color}>
          <ResultTitle>Peccato!</ResultTitle>
          <ResultValue>Passa!</ResultValue>
          <ResultPoints>Turno saltato</ResultPoints>
          <ContinueButton onClick={() => setShowResult(false)}>
            Continua
          </ContinueButton>
        </ResultDisplay>
      );
    }
    // Per gli altri segmenti, mostra il risultato normale
    return (
      <ResultDisplay $color={selectedSegment.color}>
        <ResultTitle>Hai ottenuto:</ResultTitle>
        <ResultValue>{selectedSegment.label}</ResultValue>
        <ResultPoints>
          {selectedSegment.points > 0 ? '+' : ''}
          {selectedSegment.points} punti
        </ResultPoints>
        {selectedSegment.url && (
          <Link
            to={selectedSegment.url}
            style={{ textDecoration: 'none' }}
          >
            <ContinueButton as='div'>Inizia la Sfida</ContinueButton>
          </Link>
        )}
      </ResultDisplay>
    );
  };
  return (
    <GameContainer>
      <BackButton to='/game'>
        <FaArrowLeft /> Torna ai giochi
      </BackButton>

      <PageTitle>Ruota della Fortuna Pokémon</PageTitle>
      <GameInstructions>
        Seleziona un allenatore, gira la ruota e affronta la sfida!
      </GameInstructions>

      <GameLayout>
        <WheelSection>
          <WheelContainer>
            {/* Indicatore (puntatore) */}
            {/* <WheelPointer /> */}

            {/* Ruota dalla libreria */}
            <RouletteContainer>
              <RouletteWheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={wheelData}
                backgroundColors={WHEEL_SEGMENTS.map((s) => s.color)}
                textColors={['#ffffff']}
                fontSize={14}
                outerBorderColor='#ffde00'
                outerBorderWidth={3}
                innerBorderColor='#ffffff'
                innerBorderWidth={1}
                radiusLineColor='#ffffff'
                radiusLineWidth={1}
                perpendicularText
                textDistance={60}
                onStopSpinning={handleStopSpinning}
              />
            </RouletteContainer>

            <SpinButton
              onClick={spinWheel}
              disabled={isSpinning || !activePlayer}
            >
              <FaPlay /> Gira la Ruota
            </SpinButton>
          </WheelContainer>

          {showResult && selectedSegment && renderResult()}
        </WheelSection>

        <PlayerSection>
          <SectionTitle>Seleziona un Allenatore</SectionTitle>
          <PlayerList>
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                onClick={() => handleSelectPlayer(player)}
                $active={activePlayer?.id === player.id}
              >
                <PlayerAvatar
                  src={player.avatar}
                  alt={player.name}
                />
                <PlayerInfo>
                  <PlayerName>{player.name}</PlayerName>
                  <PlayerScore>{player.score} punti</PlayerScore>
                </PlayerInfo>
                {/* {activePlayer?.id === player.id && (
                  <ActiveIndicator>
                    <FaUserAlt />
                  </ActiveIndicator>
                )} */}
              </PlayerCard>
            ))}
          </PlayerList>
        </PlayerSection>
      </GameLayout>

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
      </BackgroundElements>
    </GameContainer>
  );
}

export default Wheel;

// Container specifico per la roulette della libreria
const RouletteContainer = styled.div`
  width: 80%;
  max-width: 400px;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Mantieni il resto dei tuoi stili già definiti
// ...

// L'animazione e gli stili che hai già
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Resto del tuo codice CSS...
// Animazioni
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background-color: #233975;
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
// Stili Componenti
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 1rem;
  }
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

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    top: 10px;
    left: 10px;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-shadow: 2px 2px 0 #3b4cca;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

const GameInstructions = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  z-index: 1;
  max-width: 600px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const GameLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  margin: 2rem 0;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
    gap: 1rem;
  }
`;

const WheelSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const WheelContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const SpinButton = styled.button`
  position: absolute;
  bottom: -60px;
  padding: 12px 25px;
  background: #ee1515;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    bottom: -50px;
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    bottom: -40px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

interface ResultDisplayProps {
  $color: string;
}

const ResultDisplay = styled.div<ResultDisplayProps>`
  margin-top: 5rem;
  padding: 1.5rem;
  background: ${(props) => props.$color || '#3b4cca'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease;
  border: 3px solid white;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 280px;
  }
`;

const ResultTitle = styled.div`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ResultPoints = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffde00;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const ContinueButton = styled.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PlayerSection = styled.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffde00;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 0.5rem;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    max-height: 40vh;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

interface PlayerCardProps {
  $active: boolean;
}

const PlayerCard = styled.div<PlayerCardProps>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$active
      ? 'linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(59, 76, 202, 0.2))'
      : 'rgba(255, 255, 255, 0.08)'};
  border-radius: 12px;
  padding: 0.8rem;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? '#FFDE00' : 'transparent')};

  ${(props) =>
    props.$active &&
    css`
      animation: ${pulse} 2s infinite ease-in-out;
      box-shadow: 0 0 15px rgba(255, 222, 0, 0.4);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
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
  background: #132a57;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 0.8rem;
  }
`;

const PlayerInfo = styled.div`
  flex: 1;
`;

const PlayerName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PlayerScore = styled.div`
  font-size: 0.85rem;
  color: #ffde00;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ee1515;
  width: 24px;
  height: 24px;
`;
