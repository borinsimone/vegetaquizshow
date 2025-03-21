import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown, FaArrowLeft } from 'react-icons/fa';

// Definizione delle categorie per la ruota
const WHEEL_SEGMENTS = [
  { id: 1, label: 'Pokémon', color: '#FF5252', points: 100 },
  { id: 2, label: 'Allenatori', color: '#FF9800', points: 200 },
  { id: 3, label: 'Mosse', color: '#FFEB3B', points: 300 },
  { id: 4, label: 'Città', color: '#4CAF50', points: 400 },
  { id: 5, label: 'Oggetti', color: '#2196F3', points: 500 },
  { id: 6, label: 'Leggende', color: '#9C27B0', points: 750 },
  { id: 7, label: 'Bonus', color: '#F44336', points: 1000 },
  { id: 8, label: 'Malus', color: '#000000', points: -500 },
];

const Wheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [spinDuration, setSpinDuration] = useState(5);
  const controls = useAnimation();
  const navigate = useNavigate();
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);

    // Genera un numero casuale di rotazioni (tra 5 e 10 giri completi)
    const numRotations = 5 + Math.random() * 5;

    // Genera una posizione finale casuale (un segmento casuale)
    const segmentAngle = 360 / WHEEL_SEGMENTS.length;
    const randomSegmentIndex = Math.floor(
      Math.random() * WHEEL_SEGMENTS.length
    );
    const segmentOffsetDegrees = Math.random() * segmentAngle;

    // Calcola l'angolo finale
    const finalAngle =
      numRotations * 360 +
      randomSegmentIndex * segmentAngle +
      segmentOffsetDegrees;

    // Anima la ruota
    controls
      .start({
        rotate: finalAngle,
        transition: {
          duration: spinDuration,
          ease: 'easeOut',
        },
      })
      .then(() => {
        // Dopo che la ruota si è fermata:
        setSpinning(false);

        // Determina il segmento vincente
        const winner = WHEEL_SEGMENTS[randomSegmentIndex];
        setWinner(winner);

        // Mostra il risultato per alcuni secondi prima di navigare
        setTimeout(() => {
          // Naviga alla categoria corrispondente o gestisci bonus/malus
          if (winner.label !== 'Bonus' && winner.label !== 'Malus') {
            navigate('/game/categories', {
              state: { category: winner.label, points: winner.points },
            });
          }
        }, 3000);
      });
  };

  const goBack = () => {
    navigate('/game');
  };

  return (
    <WheelContainer>
      <BackButton onClick={goBack}>
        <FaArrowLeft /> Indietro
      </BackButton>

      <WheelWrapper>
        <WheelIndicator>
          <FaArrowDown />
        </WheelIndicator>

        <StyledWheel
          ref={wheelRef}
          animate={controls}
          initial={{ rotate: 0 }}
        >
          {WHEEL_SEGMENTS.map((segment, index) => {
            const angle = 360 / WHEEL_SEGMENTS.length;
            const rotation = index * angle;

            return (
              <WheelSegment
                key={segment.id}
                $color={segment.color}
                $rotation={rotation}
                $segmentAngle={angle}
              >
                <SegmentLabel $rotation={-rotation}>
                  {segment.label}
                </SegmentLabel>
              </WheelSegment>
            );
          })}
        </StyledWheel>

        <SpinButton
          onClick={spinWheel}
          disabled={spinning}
        >
          {spinning ? 'Gira...' : 'Gira la Ruota!'}
        </SpinButton>
      </WheelWrapper>

      <AnimatePresence>
        {winner && (
          <ResultOverlay
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ResultCard $color={winner.color}>
              <h2>Categoria:</h2>
              <ResultLabel>{winner.label}</ResultLabel>
              <PointsValue $isNegative={winner.points < 0}>
                {winner.points > 0 ? '+' : ''}
                {winner.points} Punti
              </PointsValue>
            </ResultCard>
          </ResultOverlay>
        )}
      </AnimatePresence>
    </WheelContainer>
  );
};

export default Wheel;

// Styled Components
const WheelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f);
  position: relative;
  overflow: hidden;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const WheelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledWheel = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 10px solid rgba(255, 255, 255, 0.2);
`;

interface WheelSegmentProps {
  $color: string;
  $rotation: number;
  $segmentAngle: number;
}

const WheelSegment = styled.div<WheelSegmentProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    50% 50%,
    50% 0%,
    ${(props) => 50 + 50 * Math.sin((Math.PI / 180) * props.$segmentAngle)}%
      ${(props) => 50 - 50 * Math.cos((Math.PI / 180) * props.$segmentAngle)}%,
    50% 50%
  );
  background-color: ${(props) => props.$color};
  transform: rotate(${(props) => props.$rotation}deg);
  transform-origin: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
`;

interface SegmentLabelProps {
  $rotation: number;
}

const SegmentLabel = styled.span<SegmentLabelProps>`
  transform: rotate(${(props) => props.$rotation}deg);
  transform-origin: center 170px; /* Approssimazione del raggio metà */
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 16px;
  text-align: center;
  max-width: 80px;
`;

const WheelIndicator = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #ffde00;
  z-index: 10;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`;

const SpinButton = styled.button`
  margin-top: 30px;
  background: #ffde00;
  color: #1a2a6c;
  border: none;
  border-radius: 30px;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background: #fff176;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: scale(1);
  }
`;

const ResultOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

interface ResultCardProps {
  $color: string;
}

const ResultCard = styled.div<ResultCardProps>`
  background: white;
  border-radius: 20px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-top: 10px solid ${(props) => props.$color};

  h2 {
    margin: 0 0 10px 0;
    color: #333;
  }
`;

const ResultLabel = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0 20px;
  color: #1a2a6c;
`;

interface PointsValueProps {
  $isNegative: boolean;
}

const PointsValue = styled.div<PointsValueProps>`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.$isNegative ? '#d32f2f' : '#388e3c')};
  background: ${(props) =>
    props.$isNegative ? 'rgba(211, 47, 47, 0.1)' : 'rgba(56, 142, 60, 0.1)'};
  padding: 10px 20px;
  border-radius: 30px;
`;
