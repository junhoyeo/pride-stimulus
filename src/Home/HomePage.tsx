import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';
import { useCount } from './useCount';

export const HomePage = () => {
  const [clicks, updateClicks] = useCount();

  return (
    <Container>
      <Card onClick={updateClicks} />
      {clicks}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/gradient.webp');
  background-size: cover;
`;
