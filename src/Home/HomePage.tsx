import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';

export const HomePage = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
