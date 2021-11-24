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
  confirmPassword: yup.string().required('Confirmação de senha obrigatória'),
});

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  const handleSignUp = handleSubmit(
    async ({ email, password, confirmPassword }) => {
      try {
        setIsLoading(true);
        await signUp({ email, password, confirmPassword });
        history.push('/avatar');
      } catch (error) {
        addToast({
          title: 'Erro na criaçaõ de conta.',
          description:
            'Ocorreu um erro ao fazer seu cadastro, cofirme se não existe uma conta com o mesmo e-mail',
          type: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    },
  );

  return (
    <Container>
      <Card onSubmit={handleSignUp}>
        <h1>Cadastro</h1>
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
        <Input
          {...register('confirmPassword')}
          type="password"
          placeholder="Confirmar Senha"
          errorMessage={errors.confirmPassword?.message}
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
