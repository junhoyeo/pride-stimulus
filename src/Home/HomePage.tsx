import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';
import { useCount } from './useCount';

export const HomePage = () => {
  const [clicks, updateClicks] = useCount();

  return (
    <Container>
      <Card onClick={updateClicks} />
      <Minted>{clicks.toLocaleString('ko')}번 돈을 찍어내셨네요.</Minted>
      <Credits href="https://github.com/junhoyeo/pride-stimulus">
        GitHub@junhoyeo
      </Credits>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/images/gradient.webp');
  background-size: cover;
`;

const Minted = styled.span`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(33, 37, 41, 0.85);
`;

const Credits = styled.a`
  margin-top: 8px;
  font-weight: bold;
  font-size: 0.98rem;
`;
