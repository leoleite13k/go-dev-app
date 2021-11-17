import React from 'react';

import { IInput } from './interface';
import { InputText } from './styles';

export const Input: React.FC<IInput> = ({ name, ...rest }) => (
  <InputText name={name} {...rest} />
);
