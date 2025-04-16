import React from 'react';
import { FaRedo, FaCity, FaCheck, FaQuestionCircle } from 'react-icons/fa';
import {
  CityStatsContainer,
  CityStatsHeader,
  CityStatsBadges,
  CityBadge,
  CityStatsInfo,
  ResetButton,
} from '../styles/CityStyles';
import { POKEMON_CITIES } from '../data/CityData';

interface RemainingCitiesProps {
  guessedCities: number[];
  onReset: () => void;
}

const RemainingCities = ({ guessedCities, onReset }: RemainingCitiesProps) => {
  const totalCities = POKEMON_CITIES.length;
  const remainingCount = totalCities - guessedCities.length;
  const completionPercentage = Math.round(
    (guessedCities.length / totalCities) * 100
  );

  return (
    <CityStatsContainer>
      <CityStatsHeader>
        <FaCity /> Città Pokémon
      </CityStatsHeader>

      <CityStatsBadges>
        {POKEMON_CITIES.map((city) => (
          <CityBadge
            key={city.id}
            $guessed={guessedCities.includes(city.id)}
            title={
              guessedCities.includes(city.id) ? city.name : 'Città sconosciuta'
            }
          >
            {guessedCities.includes(city.id) ? (
              <FaCheck />
            ) : (
              <FaQuestionCircle />
            )}
          </CityBadge>
        ))}
      </CityStatsBadges>

      <CityStatsInfo>
        {guessedCities.length > 0 ? (
          <>
            <span>
              Indovinate:{' '}
              <strong>
                {guessedCities.length}/{totalCities}
              </strong>{' '}
              ({completionPercentage}%)
            </span>
            <span>
              Rimanenti: <strong>{remainingCount}</strong>
            </span>
          </>
        ) : (
          <span>Nessuna città ancora indovinata!</span>
        )}
      </CityStatsInfo>

      {guessedCities.length > 0 && (
        <ResetButton onClick={onReset}>
          <FaRedo /> Resetta Progresso
        </ResetButton>
      )}
    </CityStatsContainer>
  );
};

export default RemainingCities;
