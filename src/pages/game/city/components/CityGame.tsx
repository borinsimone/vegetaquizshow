import React from 'react';
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
  return (
    <>
      <PlayerBanner>
        <PlayerInfo>
          <PlayerName>{activePlayer.name}</PlayerName>
          <PlayerScore>{activePlayer.score} punti</PlayerScore>
        </PlayerInfo>
      </PlayerBanner>

      <HorizontalGameLayout>
        <LeftColumn>
          <CityImageContainer>
            <CityImage
              src={currentCity.image}
              alt='Dettaglio di città Pokémon'
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
          />

          <GuessForm onGuess={onGuess} />
        </RightColumn>
      </HorizontalGameLayout>
    </>
  );
};

export default CityGame;
