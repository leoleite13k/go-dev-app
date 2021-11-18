import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { ButtonPrimary, ButtonSecundary } from '../../components/Button';
import { TFormData } from './interface';
import { Container, Card, ContentButton } from './styles';

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const handleSignIn = handleSubmit(async ({ email, password }) => {
    try {
      setIsLoading(true);
      await signIn({ email, password });
      history.push('/home');
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Container>
      <Card onSubmit={handleSignIn}>
        <h1>Login</h1>
        <Input {...register('email')} name="email" placeholder="Email" />
        <Input {...register('password')} type="password" placeholder="Senha" />

        <ContentButton>
          <ButtonPrimary type="submit" text="Entrar" isLoading={isLoading} />
          <ButtonSecundary
            type="button"
            onClick={() => history.push('/SignUp')}
            text="Cadastrar"
          />
        </ContentButton>
      </Card>
    </Container>
  );
};

export default SignIn;
