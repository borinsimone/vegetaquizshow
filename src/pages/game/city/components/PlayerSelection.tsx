import React from 'react';
import {
  PlayerSection,
  SectionTitle,
  PlayerList,
  PlayerCard,
  PlayerAvatar,
  PlayerInfo,
  PlayerName,
  PlayerScore,
} from '../styles/CityStyles';

const PlayerSelection = ({ players, onSelectPlayer }) => {
  return (
    <PlayerSection>
      <SectionTitle>Seleziona un Allenatore</SectionTitle>
      <PlayerList>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            onClick={() => onSelectPlayer(player)}
          >
            <PlayerAvatar
              src={player.avatar}
              alt={player.name}
            />
            <PlayerInfo>
              <PlayerName>{player.name}</PlayerName>
              <PlayerScore>{player.score} punti</PlayerScore>
            </PlayerInfo>
          </PlayerCard>
        ))}
      </PlayerList>
    </PlayerSection>
  );
};

export default PlayerSelection;
