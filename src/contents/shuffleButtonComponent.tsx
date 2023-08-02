import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../states/store/card';
import { drawCard, shuffleDeck} from '../states/store/cardActions';
import { RootState } from '../states/store/store';
import { shuffle } from '../states/store/utils';
import { Button } from '@mui/material';
import { styled } from 'styled-components';

const suits: ("hearts" | "diamonds" | "clubs" | "spades")[] = ["hearts", "diamonds", "clubs", "spades"];
const values: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const button = styled(Button)({
  marginTop : '10vh',
}) as typeof Button;

const ShuffleButtonComponent: React.FC = () => {

  const dispatch = useDispatch();
  const deck = useSelector((state: RootState) => state.card.deck);
  const drawnCard = useSelector((state: RootState) => state.card.drawnCard);


  useEffect(() => {
    // 카드 덱 생성 및 섞기
    const newDeck: Card[] = [];
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ suit, value });
      }
    }
    const shuffledDeck = shuffle(newDeck);  

    dispatch(shuffleDeck(shuffledDeck ));
  }, [dispatch]);

  // 카드 뽑기
  const handleDrawCard = () => {
    dispatch(drawCard());
  };

  // 카드 섞기
  const handleShuffleDeck = () => {
    const shuffledDeck = shuffle([...deck]);  
    dispatch(shuffleDeck(shuffledDeck));  
  };
  

  return (
    <div>
    <Button variant="contained" color="primary" onClick={handleDrawCard}>
      카드 뽑기
    </Button>
    <Button variant="contained" color="primary" onClick={handleShuffleDeck}>
      카드 셔플
    </Button>
    {drawnCard && (
      <div>뽑힌 카드: {drawnCard.suit} {drawnCard.value}</div>
    )}
  </div>
  );
};

export default ShuffleButtonComponent;
