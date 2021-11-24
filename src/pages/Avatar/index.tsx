import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BigHead } from '@bigheads/core';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { IoMdArrowDropright } from 'react-icons/io';
import { RiEqualizerLine } from 'react-icons/ri';

import { useProfile } from '../../hooks/profile';
import { getRandomOptions } from '../../utils/avatar';
import {
  ButtonPrimary,
  ButtonSecundary,
  ButtonIcon,
} from '../../components/Button';
import { Input } from '../../components/Input';
import { TFormData } from './interface';
import { Container, Content, ContentAvatar } from './styles';

const schema = yup.object({
  fullName: yup.string().required('Nome obrigatório'),
});

const Avatar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rotateDice, setRotateDice] = useState(false);
  const [options, setOptions] = useState(getRandomOptions());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });
  const { createProfile } = useProfile();
  const history = useHistory();

  const handleRandomAvatar = () => {
    setRotateDice(true);
    setOptions(getRandomOptions());
    setTimeout(() => setRotateDice(false), 500);
  };

  const handleCreateProfile = handleSubmit(async ({ fullName }) => {
    try {
      setIsLoading(true);
      await createProfile({ fullName, avatarOptions: options });
      history.push('/home');
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Container>
      <Content onSubmit={handleCreateProfile}>
        <h1>Criação do avatar</h1>

        <ContentAvatar>
          <BigHead {...options} />
          <ButtonIcon Icon={() => <RiEqualizerLine size={18} />} />
        </ContentAvatar>
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

        <span>Como gostaria de ser chamado[a]?</span>
        <Input {...register('fullName')} placeholder="Nome" />
        <ButtonSecundary
          text="Continuar"
          type="submit"
          isLoading={isLoading}
          RightIcon={() => <IoMdArrowDropright size={24} />}
        />
      </Content>
    </Container>
  );
};

export default Avatar;
