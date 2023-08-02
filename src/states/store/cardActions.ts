import { Card } from "./card";

// 액션명
export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const DRAW_CARD = 'DRAW_CARD';

// 카드 섞기
export const shuffleDeck = (deck: Card[]) => ({
  type: SHUFFLE_DECK,
  payload: deck,
});

// 카드 뽑기
export const drawCard = () => ({  
  type: DRAW_CARD
});
