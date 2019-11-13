import { Deck } from './../src/memory';
import { declareVariable, exportAllDeclaration } from '@babel/types';

describe('Deck', () => {
    test('should correctly create a deck object', () => {
        var deck = new Deck();
        expect(deck.cards.length).toEqual(10);
    })
})