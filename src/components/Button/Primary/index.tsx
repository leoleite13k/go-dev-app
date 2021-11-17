import React from 'react';

import { IButton } from '../interface';
import { Button } from './styles';

export const ButtonPrimary: React.FC<IButton> = ({ onClick, text }) => (
  <Button onClick={onClick}>{text}</Button>
);
