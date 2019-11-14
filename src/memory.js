import $ from 'jquery';

export function Card(value) {
  this.value = value;
  this.state = false;
}

Card.prototype.getImage = function() {
  return this.value + ".jpg";
}; 


export function Deck() {
  this.cards = [new Card(1), new Card(1), new Card(2), new Card(2), new Card(3), new Card(3), new Card(4), new Card(4), new Card(5), new Card(5)],
  this.state = false,
  this.previous = false;
}

Deck.prototype.shuffle = function () {
  let shuffledCards = [];
  let count = this.cards.length-1;
  while (count >= 0) {
    var randomIndex = Math.round(Math.random()*(this.cards.length-1));
    if (this.cards[randomIndex]) {
      shuffledCards.push(this.cards[randomIndex]);
      count--;
      delete this.cards[randomIndex];
    }
  }
  this.cards = shuffledCards;
};

Deck.prototype.play = function(index) {
  if (index == -1) {
    return false
  }
  if (!this.cards[index].state) {
    if (this.state) {
      if (this.cards[this.previous].value === this.cards[index].value) {
        this.cards[index].state = true;
        this.previous = false;
        this.state = false;
      } else {
        const temp = this.previous;
        this.cards[index].state = false;
        this.cards[this.previous].state = false;
        this.state = false;
        return temp
      }
    
    } else {
      this.previous = index;
      this.state = true;
      this.cards[this.previous].state = true; 
    }
    return false;
  }
};