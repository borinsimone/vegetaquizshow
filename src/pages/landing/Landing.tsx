import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaGamepad, FaTimes, FaHatWizard } from 'react-icons/fa';
import { GiPokecog } from 'react-icons/gi';
import bg from '../../assets/images/vegetaball.webp';
import { useGlobalContext } from '../../context/GlobalContext';

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
}

const Landing = () => {
  const { players, addPlayer, removePlayer } = useGlobalContext();
  // Stati locali solo per il form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  // Funzione per generare l'URL dell'avatar Pokémon
  const getPokemonAvatarUrl = (name: string) => {
    if (!name) return '';
    const formattedName = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, '');
    return `https://play.pokemonshowdown.com/sprites/xyani/${formattedName}.gif`;
  };

  // Mostra l'anteprima quando l'utente digita un nome di Pokémon
  const handlePokemonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPokemonName = e.target.value;
    setPokemonName(newPokemonName);
    setPreviewUrl(getPokemonAvatarUrl(newPokemonName));
  };

  const handleAddPlayer = () => {
    if (playerName.trim() && players.length < 5) {
      // Limit to 5 players
      const avatarUrl = pokemonName.trim()
        ? getPokemonAvatarUrl(pokemonName)
        : `https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`;

      // Aggiungi il player usando la funzione dal context
      addPlayer({
        name: playerName.trim(),
        avatar: avatarUrl,
        score: 0,
      });

      // Resetta il form
      setPlayerName('');
      setPokemonName('');
      setPreviewUrl('');
      setIsModalOpen(false);
    }
  };

  const handleStartGame = () => {
    if (players.length === 0) {
      alert('Aggiungi almeno un allenatore prima di iniziare!');
      return;
    }

    // Store players in localStorage or context
    localStorage.setItem('quizPlayers', JSON.stringify(players));
    navigate('/game'); // Navigate to game page
  };
  const handleRemovePlayer = (id: string) => {
    removePlayer(id);
  };

  return (
    <LandingContainer>
      <MainContent>
        <HeaderSection>
          <QuizTitle>
            <TitleSpan>VEGETA</TitleSpan>
            <TitleSpan>QUIZ</TitleSpan>
            <TitleSpan>SHOW</TitleSpan>
          </QuizTitle>
        </HeaderSection>

        <CenterSection>
          <PlayersContainer>
            <PlayersHeader>
              <PlayersTitle>
                <PokeBallIcon />
                Allenatori Registrati
                {players.length > 0 && (
                  <PlayerCount>{players.length}/5</PlayerCount>
                )}
              </PlayersTitle>
            </PlayersHeader>

            {players.length === 0 ? (
              <EmptyPlayersList>
                <EmptyMessage>Nessun allenatore nella sala</EmptyMessage>
                <AddPlayerPrompt onClick={() => setIsModalOpen(true)}>
                  Registra il tuo primo allenatore!
                </AddPlayerPrompt>
              </EmptyPlayersList>
            ) : (
              <PlayersList>
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
                      <TrainerBadge>
                        <FaHatWizard />
                        <span>Allenatore</span>
                      </TrainerBadge>
                    </PlayerInfo>
                    <RemovePlayerButton
                      onClick={() => handleRemovePlayer(player.id)}
                    >
                      <FaTimes />
                    </RemovePlayerButton>
                  </PlayerCard>
                ))}
              </PlayersList>
            )}
          </PlayersContainer>
        </CenterSection>

        <ActionsSection>
          <ButtonsContainer>
            <ActionButton
              onClick={() => setIsModalOpen(true)}
              disabled={players.length >= 5}
              $color='#EE1515'
            >
              <ButtonIcon>
                <FaUserPlus />
              </ButtonIcon>
              <span>Registra Allenatore</span>
            </ActionButton>

            <ActionButton
              onClick={handleStartGame}
              disabled={players.length === 0}
              className={players.length === 0 ? 'disabled' : 'ready'}
              $color='#3B4CCA'
              $primary
            >
              <ButtonIcon>
                <FaGamepad />
              </ButtonIcon>
              <span>Inizia Avventura</span>
            </ActionButton>
          </ButtonsContainer>
        </ActionsSection>
      </MainContent>

      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <h2>Registra Nuovo Allenatore</h2>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>

            <ModalContent>
              <FormGroup>
                <Label>Nome Allenatore</Label>
                <Input
                  type='text'
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Inserisci il nome dell'allenatore"
                />
              </FormGroup>

              <FormGroup>
                <Label>Nome Pokémon</Label>
                <Input
                  type='text'
                  value={pokemonName}
                  onChange={handlePokemonNameChange}
                  placeholder='Inserisci il nome di un Pokémon (es. pikachu, charizard)'
                />
                <FormHelp>
                  Inserisci il nome di un Pokémon per utilizzarlo come avatar
                </FormHelp>

                {previewUrl && (
                  <AvatarPreviewContainer>
                    <AvatarPreview>
                      <AvatarPreviewImage
                        src={previewUrl}
                        alt='Anteprima Avatar'
                      />
                    </AvatarPreview>
                    <PreviewLabel>Anteprima Avatar</PreviewLabel>
                  </AvatarPreviewContainer>
                )}
              </FormGroup>

              <ModalButtons>
                <CancelButton onClick={() => setIsModalOpen(false)}>
                  Annulla
                </CancelButton>
                <SubmitButton onClick={handleAddPlayer}>
                  Registra Allenatore
                </SubmitButton>
              </ModalButtons>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}

      <BackgroundElements>
        <PokeBallBg className='ball1' />
        <PokeBallBg className='ball2' />
        <GreatBallBg className='ball3' />
        <UltraBallBg className='ball4' />
        <MasterBallBg className='ball5' />
        <PatternOverlay />
      </BackgroundElements>

      <img
        src={bg}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.55,
          zIndex: 0,
          objectFit: 'cover',
        }}
      />
    </LandingContainer>
  );
};

export default Landing;

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

const glow = keyframes`
  0% { box-shadow: 0 0 20px rgba(255, 222, 0, 0.5); }
  50% { box-shadow: 0 0 40px rgba(255, 222, 0, 0.8); }
  100% { box-shadow: 0 0 20px rgba(255, 222, 0, 0.5); }
`;

const slideIn = keyframes`
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

// Desktop-optimized layout
const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 3rem 4rem;
  z-index: 1;
`;

const HeaderSection = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const ActionsSection = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
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

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
`;

const PokeBallBg = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
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
    top: 25%;
    right: 8%;
    width: 90px;
    height: 90px;
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
    bottom: 25%;
    right: 12%;
    width: 100px;
    height: 100px;
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
    top: 45%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${float} 14s ease-in-out infinite;
  }
`;

const QuizTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${pulse} 3s infinite ease-in-out;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;
  margin: 0;
`;

const TitleSpan = styled.span`
  color: #ffde00;
  margin: 0 0.5rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

interface ActionButtonProps {
  $color?: string;
  $primary?: boolean;
}

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 12px;
  font-size: 1.2rem;
`;

const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.5rem;
  border-radius: 60px;
  border: none;
  background: ${(props) => props.$color || '#EE1515'};
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  min-width: 250px;

  ${(props) =>
    props.$primary &&
    css`
      animation: ${glow} 2s infinite ease-in-out;
    `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #666;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
    animation: none;

    &:hover {
      transform: none;
      box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const PlayersContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(19, 42, 87, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 3px solid #ffde00;
  position: relative;
  min-height: 220px;

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
    border-radius: 22px;
  }
`;

const PlayersHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.8rem;
`;

const PlayersTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const PokeBallIcon = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;

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
    box-shadow: 0 0 0 2px #333, 0 0 0 4px white;
  }
`;

const PlayerCount = styled.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 0.9rem;
`;

const EmptyPlayersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  height: 150px;
`;

const EmptyMessage = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const AddPlayerPrompt = styled.button`
  background: none;
  border: 3px dashed #ffde00;
  border-radius: 15px;
  padding: 1.5rem 3rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: rgba(255, 222, 0, 0.1);
    transform: translateY(-3px);
    border-style: solid;
  }
`;

const PlayersList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 150px;
  overflow: hidden;

  /* Handle 4-5 players layout */
  &:has(.player-card:nth-child(4):last-child) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    .player-card:nth-child(3) {
      grid-column: 1;
    }
    .player-card:nth-child(4) {
      grid-column: 2;
    }
  }

  &:has(.player-card:nth-child(5)) {
    grid-template-columns: repeat(3, 1fr);

    .player-card:nth-child(4) {
      grid-column: 1;
      justify-self: end;
    }
    .player-card:nth-child(5) {
      grid-column: 3;
      justify-self: start;
    }
  }
`;

const PlayerCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  animation: ${slideIn} 0.5s ease-out;
  height: 70px;
  min-width: 200px;

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
    border-radius: 13px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: #ffde00;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const PlayerAvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 2px;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${PlayerCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const PlayerAvatarImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
`;

const PlayerInfo = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const PlayerName = styled.h3`
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

const TrainerBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: #ffde00;
  opacity: 0.8;
  transition: all 0.3s ease;

  ${PlayerCard}:hover & {
    opacity: 1;
    transform: translateX(3px);
  }
`;

const RemovePlayerButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ee1515;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  z-index: 2;

  ${PlayerCard}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: #ff0044;
    transform: scale(1.15);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  background: radial-gradient(circle at top left, #233975 0%, #132a57 100%);
  border-radius: 25px;
  width: 500px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  animation: slideUp 0.3s ease;
  border: 3px solid #ffde00;
  position: relative;

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

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;

  h2 {
    margin: 0;
    color: #ffde00;
    font-size: 1.6rem;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
    color: #ee1515;
  }
`;

const ModalContent = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffde00;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const FormHelp = styled.p`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const CancelButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  background: #ee1515;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  }
`;

const AvatarPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const AvatarPreview = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`;

const AvatarPreviewImage = styled.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
`;

const PreviewLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;
