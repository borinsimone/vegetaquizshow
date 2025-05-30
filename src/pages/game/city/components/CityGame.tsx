import React, { useState } from 'react';
import HintPanel from './HintPanel';
import GuessForm from './GuessForm';
import {
  HorizontalGameLayout,
  LeftColumn,
  RightColumn,
  CityImageContainer,
  CityImage,
  PlayerBanner,
  PlayerInfo,
  PlayerName,
  PlayerScore,
  GameProgress,
  ProgressBar,
  ProgressFill,
  ImageLoadingOverlay,
  ScoreAnimation,
  PlayerAvatar,
  PlayerLevel,
} from '../styles/CityStyles';

const CityGame = ({
  activePlayer,
  currentCity,
  usedHints,
  isHintUsed,
  onBuyHint,
  onGuess,
  onPlaySound,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scoreChanged, setScoreChanged] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getPlayerLevel = (score) => {
    if (score >= 1000) return 'Master';
    if (score >= 500) return 'Expert';
    if (score >= 200) return 'Advanced';
    if (score >= 100) return 'Intermediate';
    return 'Beginner';
  };

  const getProgressPercentage = () => {
    const maxHints = currentCity.hints.length;
    const usedHintsCount = usedHints.length;
    return Math.min((usedHintsCount / maxHints) * 100, 100);
  };

  return (
    <>
      <PlayerBanner>
        <PlayerInfo>
          <PlayerAvatar>
            {activePlayer.name.charAt(0).toUpperCase()}
          </PlayerAvatar>
          <div>
            <PlayerName>{activePlayer.name}</PlayerName>
            <PlayerLevel>{getPlayerLevel(activePlayer.score)}</PlayerLevel>
            <PlayerScore className={scoreChanged ? 'score-changed' : ''}>
              {activePlayer.score} punti
              <ScoreAnimation />
            </PlayerScore>
          </div>
        </PlayerInfo>
        <GameProgress>
          <span>
            Indizi utilizzati: {usedHints.length}/{currentCity.hints.length}
          </span>
          <ProgressBar>
            <ProgressFill style={{ width: `${getProgressPercentage()}%` }} />
          </ProgressBar>
        </GameProgress>
      </PlayerBanner>

      <HorizontalGameLayout>
        <LeftColumn>
          <CityImageContainer>
            {!imageLoaded && (
              <ImageLoadingOverlay>
                <div className='loading-spinner'></div>
                <span>Caricamento immagine...</span>
              </ImageLoadingOverlay>
            )}
            <CityImage
              src={currentCity.image}
              alt='Dettaglio di città Pokémon'
              onLoad={handleImageLoad}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          </CityImageContainer>
        </LeftColumn>

        <RightColumn>
          <HintPanel
            hints={currentCity.hints}
            usedHints={usedHints}
            isHintUsed={isHintUsed}
            onBuyHint={onBuyHint}
            onPlaySound={onPlaySound}
            playerScore={activePlayer.score}
          />

          <GuessForm onGuess={onGuess} />
        </RightColumn>
      </HorizontalGameLayout>
    </>
  );
};

export default CityGame;
