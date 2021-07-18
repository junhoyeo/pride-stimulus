import React, { useMemo } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { convert } from 'uck';

import { Card } from './Card';
import { useCount } from './useCount';

const STIMULUS = 25 * 10000;

export const HomePage = () => {
  const [clicks, updateClicks] = useCount();
  const message = useMemo(() => {
    if (!clicks) {
      return '인증서를 눌러 돈을 찍어 보세요.';
    }
    return `${convert(',$.3s', STIMULUS * clicks)}을 찍어내셨네요.`;
  }, [clicks]);

  const messageTransition = useTransition(message, {
    from: {
      opacity: 0,
      transform: 'translateY(-24px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
  });

  return (
    <Container>
      <Card onClick={updateClicks} />
      {messageTransition((style, item) => (
        <Minted style={style}>{item}</Minted>
      ))}
      <Credits
        href="https://github.com/junhoyeo/pride-stimulus"
        target="_blank"
      >
        GitHub
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

const Minted = styled(animated.span)`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: 800;
  color: rgba(33, 37, 41, 0.85);
  background: linear-gradient(to right, #102a67, #1a2b56, #001030);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 16px rgba(71, 110, 251, 0.75);
`;

const Credits = styled.a`
  margin-top: 8px;
  font-weight: bold;
  font-size: 0.98rem;
  color: rgba(33, 37, 41, 0.85);
`;
