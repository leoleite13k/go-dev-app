import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import { IToastContainer } from './interface';
import Toast from './Toast';

const ToastContainer: React.FC<IToastContainer> = ({ messages }) => {
  const messageWithTransitions = useTransition(messages, {
    keys: item => item.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messageWithTransitions((style, item) => (
        <Toast key={item.id} message={item} style={style} />
      ))}
    </Container>
  );
};

export default ToastContainer;
