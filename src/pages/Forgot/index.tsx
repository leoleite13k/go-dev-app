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
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirmação de senha não é igual a senha',
    ),
});

const Forgot: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { forgot } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  const handleForgot = handleSubmit(
    async ({ email, password, confirmPassword }) => {
      try {
        setIsLoading(true);
        await forgot({ email, password, confirmPassword });
        reset();
        addToast({
          title: 'Troca de senha',
          description: 'Troca realizada com sucesso!',
          type: 'success',
        });
        history.push('/');
      } catch (error) {
        addToast({
          title: 'Erro na criaçaõ de conta.',
          description:
            'Ocorreu um erro tentar atualizar a senha, confirme suas credenciais',
          type: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    },
  );

  return (
    <Container>
      <Card onSubmit={handleForgot}>
        <h1>Trocar senha</h1>
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
          <ButtonPrimary type="submit" text="Alterar" isLoading={isLoading} />
          <ButtonSecundary
            type="button"
            onClick={() => history.push('/')}
            text="Voltar"
          />
        </ContentButton>
      </Card>
    </Container>
  );
};

export default Forgot;
