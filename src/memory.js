export function Card(value) {
  this.value = value;
}

Card.prototype.getImage = function() {
  return this.value + ".jpg";
} 


export function Deck() {
  this.cards = [new Card(1), new Card(1), new Card(2), new Card(2), new Card(3), new Card(3), new Card(4), new Card(4), new Card(5), new Card(5)];
}

Deck.prototype.shuffle = function () {
  let shuffledCards = [];
  let count = this.cards.length-1;
  while (count > 0) {
    var randomIndex = Math.round(Math.random()*(this.cards.length-1));
    if (this.cards[randomIndex]) {
      shuffledCards.push(this.cards[randomIndex]);
      count--;
      delete this.cards[randomIndex];
    }
  }
  this.cards = shuffledCards;
};