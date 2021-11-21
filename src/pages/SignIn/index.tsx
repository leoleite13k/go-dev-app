import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Input } from '../../components/Input';
import { ButtonPrimary, ButtonSecundary } from '../../components/Button';
import { TFormData } from './interface';
import { Container, Card, ContentButton } from './styles';

const schema = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  const handleSignIn = handleSubmit(async ({ email, password }) => {
    try {
      setIsLoading(true);
      await signIn({ email, password });
      history.push('/home');
    } catch (error) {
      addToast({
        title: 'Erro na autenticação.',
        description: 'Ocorreu um erro ao fazer login, verifique as credenciais',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Container>
      <Card onSubmit={handleSignIn}>
        <h1>Login</h1>
        <Input
          {...register('email')}
          name="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
        />
        <Input
          {...register('password')}
          type="password"
          placeholder="Senha"
          errorMessage={errors.password?.message}
        />

        <ContentButton>
          <ButtonPrimary type="submit" text="Entrar" isLoading={isLoading} />
          <ButtonSecundary
            type="button"
            onClick={() => history.push('/signup')}
            text="Cadastrar"
          />
        </ContentButton>
      </Card>
    </Container>
  );
};

export default SignIn;
