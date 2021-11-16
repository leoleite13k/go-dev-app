import React from 'react';

import { ButtonPrimary, ButtonSecundary } from '../../components/Button';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <div>
      <h1>SignIn</h1>
      <ButtonPrimary onClick={() => console.log('click')} text="Cadastrar" />
      <ButtonSecundary onClick={() => console.log('click')} text="Entrar" />
    </div>
  );
}

export default SignIn;
