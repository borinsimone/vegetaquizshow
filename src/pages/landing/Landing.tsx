import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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
  const { players, addPlayer } = useGlobalContext();
  // Stati locali solo per il form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();
  // Funzione per generare l'URL dell'avatar Pokémon
  const getPokemonAvatarUrl = (name: string) => {
    if (!name) return '';
    // Converti il nome in lowercase e rimuovi spazi o caratteri speciali
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
    if (playerName.trim()) {
      // Determina l'avatar
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

  return (
    <LandingContainer>
      <QuizTitle>
        <TitleSpan>VEGETA</TitleSpan>
        <TitleSpan>QUIZ</TitleSpan>
        <TitleSpan>SHOW</TitleSpan>
      </QuizTitle>
      <ButtonsContainer>
        <ActionButton
          onClick={() => setIsModalOpen(true)}
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
        >
          <ButtonIcon>
            <FaGamepad />
          </ButtonIcon>
          <span>Inizia Avventura</span>
        </ActionButton>
      </ButtonsContainer>

      <PlayersContainer>
        <PlayersHeader>
          <h2>Allenatori</h2>
          {players.length > 0 && (
            <PlayerCount>
              <PokeBallIcon
                small
                style={{
                  transform: 'rotate(180deg)',
                }}
              />
              {players.length}
            </PlayerCount>
          )}
        </PlayersHeader>
        {players.length === 0 ? (
          <EmptyPlayersList>
            <EmptyMessage>Nessun allenatore registrato</EmptyMessage>
            <AddPlayerPrompt onClick={() => setIsModalOpen(true)}>
              {/* <GiPokeballOpen style={{ marginRight: '8px' }} /> */}
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
                <PlayerName>{player.name}</PlayerName>
                <RemovePlayerButton
                  onClick={() => handleRemovePlayer(player.id)}
                >
                  <FaTimes />
                </RemovePlayerButton>
                <TrainerBadge>
                  <FaHatWizard />
                </TrainerBadge>
              </PlayerCard>
            ))}
          </PlayersList>
        )}
      </PlayersContainer>
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <h2>Registra Allenatore</h2>
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
                <SubmitButton onClick={handleAddPlayer}>Registra</SubmitButton>
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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pokeballWiggle = keyframes`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

// Styled Components
const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 10vh;
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

const QuizTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;

  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${pulse} 3s infinite ease-in-out;
  z-index: 1;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TitleSpan = styled.span`
  color: #ffde00;
  margin: 0 0.3rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;

  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #3b4cca;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

interface ColorProps {
  $color?: string;
}

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  font-size: 1.3rem;
`;

const ActionButton = styled.button<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  background: ${(props) => props.$color || '#EE1515'};
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
  }

  &.disabled {
    background: #666;
    box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const PlayersContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  z-index: 1;
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
    z-index: -1;
    border-radius: 17px;
  }
`;

const PlayersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.8rem;

  h2 {
    font-size: 1.8rem;
    margin: 0;
    color: #ffde00;
    text-shadow: 2px 2px 0 #3b4cca;
  }
`;

interface PokeBallIconProps {
  small?: boolean;
}

const PokeBallIcon = styled.div<PokeBallIconProps>`
  display: inline-block;
  width: ${(props) => (props.small ? '20px' : '30px')};
  height: ${(props) => (props.small ? '20px' : '30px')};
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;
  margin-right: ${(props) => (props.small ? '5px' : '8px')};
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    width: ${(props) => (props.small ? '6px' : '8px')};
    height: ${(props) => (props.small ? '6px' : '8px')};
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 ${(props) => (props.small ? '1px' : '2px')} #333,
      0 0 0 ${(props) => (props.small ? '3px' : '4px')} white;
  }
`;

const PlayerCount = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const EmptyPlayersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const EmptyMessage = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 1rem;
`;

const AddPlayerPrompt = styled.button`
  background: none;
  border: 2px dashed #ffde00;
  border-radius: 10px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 222, 0, 0.1);
    transform: translateY(-3px);
  }
`;

const PlayersList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffde00;
    border-radius: 10px;
  }
`;

const PlayerCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);

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
  }
`;

const TrainerBadge = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${PlayerCard}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`;

const PlayerAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  object-fit: contain;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);

  /* Effetto hover per evidenziare l'animazione */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${PlayerCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const PlayerName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 1;
`;

const RemovePlayerButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ee1515;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
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
    transform: scale(1.2);
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
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
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
  padding: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;

  h2 {
    margin: 0;
    color: #ffde00;
    font-size: 1.5rem;
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
  padding: 1.5rem;
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
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
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
  font-size: 0.8rem;
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
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: none;
  background: #ee1515;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
  }
`;
const AvatarPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

// const AvatarPreview = styled.div`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   background: rgba(0, 0, 0, 0.2);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   border: 3px solid #ffde00;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   margin-bottom: 8px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

const PreviewLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;
// Modifica questi componenti styled

// Contenitore dell'avatar
const PlayerAvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Effetto hover per evidenziare l'animazione */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${PlayerCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

// Immagine vera e propria dell'avatar
const PlayerAvatarImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`;

const AvatarPreviewImage = styled.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
`;
