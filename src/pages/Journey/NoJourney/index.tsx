import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonPrimary } from '../../../components/Button';
import { Container } from './styles';

const NoJourney: React.FC = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push('/home');
  };

  return (
    <Container>
      <h1>Voce ainda não começou sua jornada</h1>
      <span>Está esperando o que?</span>

      <div className="contentButton">
        <ButtonPrimary
          type="button"
          text="Comece agora!"
          onClick={handleStart}
        />
      </div>
    </Container>
  );
};

export default NoJourney;
