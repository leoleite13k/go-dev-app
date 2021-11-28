import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BigHead } from '@bigheads/core';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { IoMdArrowDropright } from 'react-icons/io';
import { RiEqualizerLine } from 'react-icons/ri';
import { useSpring } from 'react-spring';

import { useProfile } from '../../hooks/profile';
import { getRandomOptions } from '../../utils/avatar';
import {
  ButtonPrimary,
  ButtonSecundary,
  ButtonIcon,
} from '../../components/Button';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Switch } from '../../components/Switch';
import { TSelectOption } from '../../components/Select/interface';
import { optionsAvatar } from './contants';
import { TFormData } from './interface';
import {
  Container,
  Form,
  Content,
  ContentAvatar,
  ContentCustom,
  ContentSwitch,
} from './styles';

const schema = yup.object({
  fullName: yup.string().required('Nome obrigatório'),
});

const Avatar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rotateDice, setRotateDice] = useState(false);
  const [visibleCustom, setVisibleCustom] = useState(false);
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
      <h1>Criação do avatar</h1>

      <Content>
        <Form onSubmit={handleCreateProfile}>
          <ContentAvatar>
            <BigHead {...options} />
            <ButtonIcon
              type="button"
              onClick={() => setVisibleCustom(!visibleCustom)}
              Icon={() => <RiEqualizerLine size={18} />}
            />
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
        </Form>
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
    </Container>
  );
};

export default Avatar;
