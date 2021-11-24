import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { IButton } from '../interface';
import { Button, Column } from './styles';

export const ButtonSecundary: React.FC<IButton> = ({
  text,
  isLoading,
  disabled = false,
  LeftIcon = () => null,
  RightIcon = () => null,
  ...rest
}) => (
  <Button {...rest} disabled={disabled || isLoading}>
    <Column>
      {!RightIcon && isLoading ? (
        <AiOutlineLoading className="svgLoading" color="#ffc300" />
      ) : (
        <LeftIcon />
      )}
    </Column>
    <Column justifyContent="center">
      {!LeftIcon && !RightIcon && isLoading ? (
        <AiOutlineLoading className="svgLoading" color="#ffc300" />
      ) : (
        text
      )}
    </Column>
    <Column justifyContent="flex-end">
      {!LeftIcon && isLoading ? (
        <AiOutlineLoading className="svgLoading" color="#ffc300" />
      ) : (
        <RightIcon />
      )}
    </Column>
  </Button>
);
