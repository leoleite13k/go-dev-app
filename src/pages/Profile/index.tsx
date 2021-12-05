/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BigHead } from '@bigheads/core';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { RiEqualizerLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { useProfile } from '../../hooks/profile';
import { TSelectOption } from '../../components/Select/interface';
import { getRandomOptions } from '../../utils/avatar';
import { optionsAvatar } from '../Avatar/contants';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Switch } from '../../components/Switch';
import {
  ButtonPrimary,
  ButtonSecundary,
  ButtonIcon,
} from '../../components/Button';
import { TFormData } from './interface';
import {
  Container,
  Content,
  Form,
  ContentAvatar,
  ContentCustom,
  ContentSwitch,
} from './styles';

const schema = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  password: yup.string(),
  confirmPassword: yup.string(),
});

const Profile: React.FC = () => {
  const { user, updateAuth } = useAuth();
  const { addToast } = useToast();
  const { updateProfile } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCustom, setVisibleCustom] = useState(false);
  const [rotateDice, setRotateDice] = useState(false);
  const [options, setOptions] = useState(user.profile!.avatarOptions);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  const animateCustom = useSpring({
    width: !visibleCustom ? 0 : 380,
    opacity: !visibleCustom ? 0 : 1,
  });

  const handleRandomAvatar = () => {
    setRotateDice(true);
    setOptions(getRandomOptions());
    setTimeout(() => setRotateDice(false), 500);
  };

  const handleCustomizeAvatar = (field: string, value: string) => {
    setOptions(prevOptions => ({ ...prevOptions, [field]: value }));
  };

  const handleChangeProfile = handleSubmit(
    async ({ fullName, email, password, confirmPassword }) => {
      try {
        setIsLoading(true);
        await updateProfile({ fullName, avatarOptions: options });

        if (user.email !== email || !!password) {
          updateAuth({ email, password, confirmPassword });
          resetField('password');
          resetField('confirmPassword');
        }
      } catch (error) {
        addToast({
          title: 'Erro na atualização do perfil.',
          description:
            'Ocorreu um erro ao fazer a ataualização no perfil, tente mais tarde',
          type: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    },
  );

  return (
    <Container>
      <Content>
        <ContentAvatar>
          <BigHead {...options} />
          <ButtonIcon
            className="btnSettings"
            type="button"
            onClick={() => setVisibleCustom(!visibleCustom)}
            Icon={() => <RiEqualizerLine size={18} />}
          />
          <ButtonPrimary
            className="btnRandom"
            text="Random"
            type="button"
            LeftIcon={() => (
              <GiPerspectiveDiceSixFacesRandom
                className={rotateDice ? 'svgDice' : ''}
                size={28}
              />
            )}
            onClick={handleRandomAvatar}
          />
        </ContentAvatar>
        <ContentCustom style={animateCustom}>
          <div>
            <h1>Customizar</h1>
            {optionsAvatar.map(({ field, type, title, data }) =>
              type === 'select' ? (
                <Select
                  options={data as TSelectOption[]}
                  title={title}
                  value={options[field] as string}
                  onChange={event =>
                    handleCustomizeAvatar(field, event.target.value)
                  }
                />
              ) : (
                <ContentSwitch>
                  <Switch
                    title={title}
                    value={options[field] as boolean}
                    onClick={() =>
                      setOptions(prevOptions => ({
                        ...prevOptions,
                        [field]: !prevOptions[field],
                      }))
                    }
                  />
                </ContentSwitch>
              ),
            )}
          </div>
        </ContentCustom>
      </Content>

      <Form onSubmit={handleChangeProfile}>
        <Input
          {...register('fullName')}
          placeholder="Nome"
          defaultValue={user.profile?.fullName}
        />
        <Input
          {...register('email')}
          placeholder="Email"
          defaultValue={user.email}
        />
        <Input {...register('password')} type="password" placeholder="Senha" />
        <Input
          {...register('confirmPassword')}
          type="password"
          placeholder="Confirmar senha"
        />

        <ButtonSecundary text="Salvar" type="submit" isLoading={isLoading} />
      </Form>
    </Container>
  );
};

export default Profile;
