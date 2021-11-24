import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { IButtonIcon } from '../interface';
import { Button } from './styles';

export const ButtonIcon: React.FC<IButtonIcon> = ({
  Icon,
  isLoading,
  disabled = false,
  ...rest
}) => (
  <Button {...rest} disabled={disabled || isLoading}>
    {isLoading ? (
      <AiOutlineLoading className="svgLoading" color="#000814" />
    ) : (
      <Icon />
    )}
  </Button>
);
