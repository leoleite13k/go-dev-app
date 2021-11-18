import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { IButton } from '../interface';
import { Button } from './styles';

export const ButtonSecundary: React.FC<IButton> = ({
  text,
  isLoading,
  ...rest
}) => (
  <Button {...rest}>
    {isLoading ? <AiOutlineLoading color="#ffc300" /> : text}
  </Button>
);
