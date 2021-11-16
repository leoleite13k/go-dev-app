import React from 'react';

import { IButton } from './interface';
// import { Container } from './styles';

const Button: React.FC<IButton> = ({ text }) => {
  return (
    <button>{text}</button>
  );
}

export default Button;