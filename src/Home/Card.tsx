import React, { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';
import styled from 'styled-components';

export const Card = () => {
  const confetti = useRef<JSConfetti | null>(null);

  const popEmoji = () =>
    confetti.current?.addConfetti({
      emojis: ['🇰🇷', '💸', '💵', '💖'],
      // @ts-ignore
      emojiSize: 256,
      confettiNumber: 30,
      confettiRadius: 6,
    });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      confetti.current = new JSConfetti();
      popEmoji();
    }
  }, []);

  return (
    <Container onClick={popEmoji}>
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
