import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlay, FaUserAlt, FaTrophy } from 'react-icons/fa';
import { useGlobalContext } from '../../../context/GlobalContext';
import { Wheel as RouletteWheel } from 'react-custom-roulette';

const WHEEL_SEGMENTS = [
  // { id: 1, label: 'Passa', color: '#FF5252', points: 0 },

  // {
  //   id: 2,
  //   label: 'Rebus',
  //   color: '#FF9800',
  //   points: 200,
  //   url: '/game/wheel/rebus',
  // },

  // { id: 7, label: 'Bonus', color: '#F44336', points: 200 },
  {
    id: 4,
    label: 'Fusioni',
    color: '#4CAF50',
    points: 400,
    url: '/game/wheel/fusion',
  },
  // { id: 8, label: 'Malus', color: '#000000', points: -100 },
  // {
  //   id: 5,
  //   label: 'Suono',
  //   color: '#2196F3',
  //   points: 500,
  //   url: '/game/wheel/sound',
  // },
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

  // Memoized wheel data for better performance
  const wheelData = useMemo(
    () =>
      WHEEL_SEGMENTS.map((segment) => ({
        option: segment.label,
        style: { backgroundColor: segment.color, textColor: 'white' },
      })),
    []
  );

  // Check for players on mount
  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
    }
  }, [players, navigate]);

  const handleSelectPlayer = useCallback(
    (player) => {
      if (!isSpinning) {
        setActivePlayer(player);
        setSelectedSegment(null);
        setShowResult(false);
      }
    },
    [isSpinning]
  );

  const spinWheel = useCallback(() => {
    if (!activePlayer) {
      return;
    }

    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setIsSpinning(true);
      setShowResult(false);
    }
  }, [activePlayer, mustSpin]);

  const handleStopSpinning = useCallback(() => {
    setMustSpin(false);
    setIsSpinning(false);
    const segment = WHEEL_SEGMENTS[prizeNumber];
    setSelectedSegment(segment);
    setShowResult(true);

    if (
      (segment.label === 'Bonus' || segment.label === 'Malus') &&
      activePlayer
    ) {
      const newScore = activePlayer.score + segment.points;
      updatePlayerScore(activePlayer.id, newScore);
      setActivePlayer((prev) => ({ ...prev, score: newScore }));
    }
  }, [prizeNumber, activePlayer, updatePlayerScore]);

  const handleContinue = useCallback(() => {
    console.log('Continue button clicked', { selectedSegment, activePlayer }); // Debug log

    if (selectedSegment?.url) {
      navigate(selectedSegment.url, {
        state: { player: activePlayer, segment: selectedSegment },
      });
    } else {
      // For segments without URL (Bonus, Malus, Passa), just close the result
      setShowResult(false);
      setSelectedSegment(null);
      // Optionally reset active player for next turn
      setActivePlayer(null);
    }
  }, [selectedSegment, activePlayer, navigate]);

  const renderResult = () => {
    if (!selectedSegment) return null;

    const isBonus = selectedSegment.label === 'Bonus';
    const isMalus = selectedSegment.label === 'Malus';
    const isPass = selectedSegment.label === 'Passa';

    if (isBonus || isMalus) {
      return (
        <ResultOverlay onClick={() => setShowResult(false)}>
          <ResultDisplay
            $color={selectedSegment.color}
            onClick={(e) => e.stopPropagation()}
          >
            <ResultIcon>{isBonus ? '🎉' : '💔'}</ResultIcon>
            <ResultTitle>{selectedSegment.label}!</ResultTitle>
            <ResultValue>
              {selectedSegment.points > 0 ? '+' : ''}
              {selectedSegment.points} punti
            </ResultValue>
            <ResultSubtext>
              {isBonus
                ? 'Punti aggiunti al tuo punteggio!'
                : 'Punti sottratti dal tuo punteggio!'}
            </ResultSubtext>
            <ContinueButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleContinue();
              }}
              type='button'
            >
              Continua
            </ContinueButton>
          </ResultDisplay>
        </ResultOverlay>
      );
    }

    if (isPass) {
      return (
        <ResultOverlay onClick={() => setShowResult(false)}>
          <ResultDisplay
            $color={selectedSegment.color}
            onClick={(e) => e.stopPropagation()}
          >
            <ResultIcon>😔</ResultIcon>
            <ResultTitle>Peccato!</ResultTitle>
            <ResultValue>Passa il turno</ResultValue>
            <ResultSubtext>Nessuna sfida questa volta</ResultSubtext>
            <ContinueButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleContinue();
              }}
              type='button'
            >
              Continua
            </ContinueButton>
          </ResultDisplay>
        </ResultOverlay>
      );
    }

    return (
      <ResultOverlay
      //  onClick={() => setShowResult(false)}
      >
        <ResultDisplay
          $color={selectedSegment.color}
          // onClick={(e) => e.stopPropagation()}
        >
          <ResultIcon>🎯</ResultIcon>
          <ResultTitle>Sfida sbloccata!</ResultTitle>
          <ResultValue>{selectedSegment.label}</ResultValue>
          <ResultSubtext>
            Completala per guadagnare {selectedSegment.points} punti
          </ResultSubtext>
          <ContinueButton
            onClick={(e) => {
              e.preventDefault();
              handleContinue();
              // console.log('ciao');
            }}
            type='button'
          >
            <FaPlay style={{ marginRight: '8px' }} />
            Inizia la Sfida
          </ContinueButton>
        </ResultDisplay>
      </ResultOverlay>
    );
  };

  return (
    <GameContainer>
      <TopBar>
        <BackButton to='/game'>
          <FaArrowLeft /> Torna ai giochi
        </BackButton>
        <PlayerIndicator>
          {activePlayer && (
            <>
              <PlayerIndicatorAvatar
                src={activePlayer.avatar}
                alt={activePlayer.name}
              />
              <PlayerIndicatorInfo>
                <span>{activePlayer.name}</span>
                <span>{activePlayer.score} punti</span>
              </PlayerIndicatorInfo>
            </>
          )}
        </PlayerIndicator>
      </TopBar>

      <MainContent>
        <HeaderSection>
          <PageTitle>Ruota della Fortuna Pokémon</PageTitle>
          <GameInstructions>
            Seleziona un allenatore, gira la ruota e affronta la sfida!
          </GameInstructions>
        </HeaderSection>

        <GameLayout>
          <WheelSection>
            <WheelContainer>
              <RouletteContainer>
                <RouletteWheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={wheelData}
                  backgroundColors={WHEEL_SEGMENTS.map((s) => s.color)}
                  textColors={['#ffffff']}
                  fontSize={16}
                  outerBorderColor='#ffde00'
                  outerBorderWidth={4}
                  innerBorderColor='#ffffff'
                  innerBorderWidth={2}
                  radiusLineColor='#ffffff'
                  radiusLineWidth={2}
                  perpendicularText
                  textDistance={70}
                  onStopSpinning={handleStopSpinning}
                />
              </RouletteContainer>

              <SpinButton
                onClick={spinWheel}
                disabled={isSpinning || !activePlayer}
                $hasPlayer={!!activePlayer}
              >
                <FaPlay />
                {!activePlayer
                  ? 'Seleziona un allenatore'
                  : isSpinning
                  ? 'Girando...'
                  : 'Gira la Ruota'}
              </SpinButton>
            </WheelContainer>
          </WheelSection>

          <PlayerSection>
            <SectionHeader>
              <SectionTitle>Allenatori</SectionTitle>
              <SectionSubtitle>
                Seleziona chi deve girare la ruota
              </SectionSubtitle>
            </SectionHeader>

            <PlayerGrid>
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  onClick={() => handleSelectPlayer(player)}
                  $active={activePlayer?.id === player.id}
                  $disabled={isSpinning}
                >
                  <PlayerCardContent>
                    <PlayerAvatar
                      src={player.avatar}
                      alt={player.name}
                    />
                    <PlayerInfo>
                      <PlayerName>{player.name}</PlayerName>
                      <PlayerScore>
                        <FaTrophy style={{ marginRight: '4px' }} />
                        {player.score} punti
                      </PlayerScore>
                    </PlayerInfo>
                    {activePlayer?.id === player.id && (
                      <ActiveBadge>Attivo</ActiveBadge>
                    )}
                  </PlayerCardContent>
                </PlayerCard>
              ))}
            </PlayerGrid>
          </PlayerSection>
        </GameLayout>
      </MainContent>

      {showResult && renderResult()}
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

export default Wheel;

// Animations
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

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 222, 0, 0.7); }
  70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(255, 222, 0, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 222, 0, 0); }
`;

const slideIn = keyframes`
  from { transform: scale(0.8) translateY(30px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
`;

// Layout Components
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #233975 0%, #1a2a5a 100%);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(19, 42, 87, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #ffde00;
  z-index: 10;
`;

const BackButton = styled(Link)`
  background: rgba(255, 222, 0, 0.1);
  color: #ffde00;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;

  &:hover {
    background: #ffde00;
    color: #233975;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 222, 0, 0.3);
  }
`;

const PlayerIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  min-width: 200px;
  justify-content: center;
`;

const PlayerIndicatorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #ffde00;
`;

const PlayerIndicatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 0.9rem;

  span:first-child {
    font-weight: 600;
  }

  span:last-child {
    color: #ffde00;
    font-size: 0.8rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeaderSection = styled.div`
  text-align: center;
  padding: 2rem 0 1rem;
  z-index: 1;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca, 0 0 20px rgba(255, 222, 0, 0.5);
  margin-bottom: 0.5rem;
  font-weight: 800;
`;

const GameInstructions = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
`;

const GameLayout = styled.div`
  display: flex;
  flex: 1;
  gap: 3rem;
  padding: 0 2rem 2rem;
  overflow: hidden;
`;

const WheelSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const WheelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const RouletteContainer = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
`;

interface SpinButtonProps {
  $hasPlayer: boolean;
}

const SpinButton = styled.button<SpinButtonProps>`
  padding: 16px 32px;
  background: ${(props) =>
    props.$hasPlayer
      ? 'linear-gradient(135deg, #ee1515, #d10000)'
      : 'linear-gradient(135deg, #666, #555)'};
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: ${(props) => (props.$hasPlayer ? 'pointer' : 'not-allowed')};
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  min-width: 280px;
  justify-content: center;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(238, 21, 21, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const PlayerSection = styled.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.8);
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #ffde00;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`;

const SectionSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.95rem;
`;

const PlayerGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  /* padding-right: 0.5rem; */
  overflow: hidden;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 222, 0, 0.5);
    border-radius: 3px;
  }
`;

interface PlayerCardProps {
  $active: boolean;
  $disabled: boolean;
}

const PlayerCard = styled.div<PlayerCardProps>`
  background: ${(props) =>
    props.$active
      ? 'linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(59, 76, 202, 0.2))'
      : 'rgba(255, 255, 255, 0.08)'};
  border-radius: 15px;
  border: 2px solid ${(props) => (props.$active ? '#ffde00' : 'transparent')};
  transition: all 0.3s ease;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  overflow: hidden;

  ${(props) =>
    props.$active &&
    css`
      animation: ${pulse} 2s infinite;
    `}

  &:hover:not([disabled]) {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const PlayerCardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

const PlayerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const PlayerInfo = styled.div`
  flex: 1;
`;

const PlayerName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`;

const PlayerScore = styled.div`
  font-size: 0.9rem;
  color: #ffde00;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const ActiveBadge = styled.div`
  background: linear-gradient(135deg, #ee1515, #d10000);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(238, 21, 21, 0.3);
`;

// Result Components
const ResultOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

interface ResultDisplayProps {
  $color: string;
}

const ResultDisplay = styled.div<ResultDisplayProps>`
  background: linear-gradient(
    135deg,
    ${(props) => props.$color},
    ${(props) => props.$color}dd
  );
  border-radius: 25px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  animation: ${slideIn} 0.5s ease;
  position: relative;
  overflow: hidden;

  /* &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${spin} 3s linear infinite;
  } */
`;

const ResultIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: ${pulse} 1s ease infinite;
`;

const ResultTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ResultValue = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ResultSubtext = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.4;
`;

const ContinueButton = styled.button`
  background: linear-gradient(135deg, #ffde00, #ffc107);
  color: #3b4cca;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(255, 222, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 222, 0, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

// Background Elements
const BackgroundElements = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px #333, 0 0 0 8px white;
  }

  &.ball1 {
    top: 10%;
    right: 15%;
    animation: ${float} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 15%;
    left: 10%;
    animation: ${float} 15s ease-in-out infinite reverse;
  }
`;

const GreatBallBg = styled(PokeBallBg)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #3b4cca 50%);

  &.ball3 {
    top: 60%;
    right: 5%;
    width: 80px;
    height: 80px;
    animation: ${float} 18s ease-in-out infinite;
  }
`;

const UltraBallBg = styled(PokeBallBg)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #ffde00 50%);

  &.ball4 {
    bottom: 30%;
    right: 20%;
    width: 100px;
    height: 100px;
    animation: ${float} 14s ease-in-out infinite reverse;
  }
`;

const MasterBallBg = styled(PokeBallBg)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #9966ff 50%);

  &.ball5 {
    top: 30%;
    left: 5%;
    width: 90px;
    height: 90px;
    animation: ${float} 20s ease-in-out infinite;
  }
`;
