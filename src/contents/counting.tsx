// Counting.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store/store';
import { Card } from '../states/store/card';

const Counting: React.FC = () => {
  // 상태 불러오기
  const { deck, drawnCard, drawnCards } = useSelector((state: RootState) => state.card);

  // 컴포넌트 렌더링
  return (
    <div>
      {drawnCards.map((card: Card, index: number) => (
        <div key={index}>뽑힌 카드: {card.suit} {card.value}</div>
      ))}
    </div>
  );
};

export default Counting;
