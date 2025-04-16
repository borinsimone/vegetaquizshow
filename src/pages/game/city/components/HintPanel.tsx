import React from 'react';
import { FaLightbulb, FaVolumeUp } from 'react-icons/fa';
import {
  HintSection,
  HintTitle,
  HintsList,
  HintItem,
  HintIcon,
  HintInfo,
  HintContent,
  HintMasked,
  HintCost,
  BuyButton,
  SoundPlayButton,
} from '../styles/CityStyles';

const HintPanel = ({
  hints,
  isHintUsed,
  onBuyHint,
  playerScore,
  onPlaySound,
}) => {
  return (
    <HintSection>
      <HintTitle>Indizi Disponibili:</HintTitle>
      <HintsList>
        {hints.map((hint, index) => (
          <HintItem
            key={index}
            $used={isHintUsed(hint.content)}
          >
            <HintIcon>
              {hint.type === 'text' ? <FaLightbulb /> : <FaVolumeUp />}
            </HintIcon>
            <HintInfo>
              {isHintUsed(hint.content) ? (
                <HintContent>
                  {hint.type === 'text' ? (
                    hint.content
                  ) : (
                    <SoundPlayButton onClick={onPlaySound}>
                      Riproduci tema musicale <FaVolumeUp />
                    </SoundPlayButton>
                  )}
                </HintContent>
              ) : (
                <HintMasked>
                  {hint.type === 'text'
                    ? 'Indizio testuale'
                    : 'Tema musicale della città'}
                </HintMasked>
              )}
              <HintCost>
                {isHintUsed(hint.content) ? (
                  'Già sbloccato'
                ) : (
                  <BuyButton
                    onClick={() => onBuyHint(hint)}
                    disabled={playerScore < hint.cost}
                  >
                    Sblocca ({hint.cost} punti)
                  </BuyButton>
                )}
              </HintCost>
            </HintInfo>
          </HintItem>
        ))}
      </HintsList>
    </HintSection>
  );
};

export default HintPanel;
