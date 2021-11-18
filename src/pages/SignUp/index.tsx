import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { ButtonPrimary, ButtonSecundary } from '../../components/Button';
import { TFormData } from './interface';
import { Container, Card, ContentButton } from './styles';

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const handleSignUp = handleSubmit(
    async ({ email, password, confirmPassword }) => {
      try {
        setIsLoading(true);
        await signUp({ email, password, confirmPassword });
        history.push('/home');
      } finally {
        setIsLoading(false);
      }
    },
  );

  return (
    <Container>
      <Card onSubmit={handleSignUp}>
        <h1>Cadastro</h1>
        <Input {...register('email')} name="email" placeholder="Email" />
        <Input {...register('password')} type="password" placeholder="Senha" />
        <Input
          {...register('confirmPassword')}
          type="password"
          placeholder="Confirmar Senha"
        />

        <ContentButton>
          <ButtonPrimary type="submit" text="Cadastrar" isLoading={isLoading} />
          <ButtonSecundary
            type="button"
            onClick={() => history.push('/')}
            text="Entrar"
          />
        </ContentButton>
      </Card>
    </Container>
  );
};

export default SignUp;
