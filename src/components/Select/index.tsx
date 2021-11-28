import React from 'react';

import { ISelect } from './interface';
import { Container, Option } from './styles';

export const Select: React.FC<ISelect> = ({ options, title, ...rest }) => {
  return (
    <Container>
      <label htmlFor={`${title}-select`}>{title}</label>
      <Option name={`${title}-select`} {...rest}>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Option>
    </Container>
  );
};
