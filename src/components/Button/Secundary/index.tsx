import React from 'react';

import { IButton } from '../interface';
import { Button } from './styles';

export const ButtonSecundary: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <Button onClick={onClick}>{text}</Button>
  );
}
