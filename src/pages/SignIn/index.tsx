import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { ButtonPrimary, ButtonSecundary } from '../../components/Button';
import { Container, Card } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSignIn = async () => {
    await signIn({ email, password });
    history.push('/home');
  };

  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <Input
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={event => setPassword(event.target.value)}
        />

        <div>
          <ButtonPrimary onClick={handleSignIn} text="Entrar" />
          <ButtonSecundary
            onClick={() => history.push('/SignUp')}
            text="Cadastrar"
          />
        </div>
      </Card>
    </Container>
  );
};

export default SignIn;
