import { Card } from "./card";
import { DRAW_CARD, SHUFFLE_DECK } from "./cardActions";

type CardState = {
  deck: Card[];
  drawnCard: Card | null;
  drawnCards: Card[]; 
};

const initialState: CardState = {
  deck: [],
  drawnCard: null,
  drawnCards: [], 
};

export const cardReducer = (state = initialState, action: any): CardState => {
  switch (action.type) {
    case DRAW_CARD:
      if (state.deck.length === 0) {
        console.log('Deck is empty, cannot draw card');
        return state;
      }
      const newDeck = [...state.deck];
      const card = newDeck.pop() || null;
      const newDrawnCards = card ? [card, ...state.drawnCards] : [...state.drawnCards];
      return { ...state, deck: newDeck, drawnCard: card, drawnCards: newDrawnCards };
    case SHUFFLE_DECK:
      return { ...state, deck: action.payload };  // SHUFFLE_DECK 액션의 payload를 사용하여 덱을 업데이트
    default:
      return state;
  }
};
