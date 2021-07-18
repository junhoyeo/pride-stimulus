import React, { useEffect } from 'react';
import JSConfetti from 'js-confetti';
import styled from 'styled-components';

export const Card = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ['💸', '🇰🇷'],
      // @ts-ignore
      emojiSize: 256,
      confettiNumber: 30,
      confettiRadius: 6,
    });
  }, []);

  return (
    <Container>
      <Image src="/images/card.svg" />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 16px 36px rgba(0, 0, 0, 0.05);
`;
