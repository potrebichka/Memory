import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Deck } from './memory';


$(document).ready(function() {
  const deck = new Deck();
  deck.shuffle();
  deck.cards.forEach((element,idx) => {
    if (element.state) {
      $("#" + (idx+1)).html("<img src='./../src/img/" + element.getImage() + "' alt='image " + element.value + "'>");
    }
  });

  $("#game").click(function(event) {
    if (deck.play(event.target.id-1)) {
      let previous = deck.previous;
      let idx = event.target.id;
      $("#" + (idx)).html("<img src='./../src/img/" + deck.cards[idx-1].getImage() + "' alt='image " + deck.cards[idx-1].value + "'>");
      $("#" + (previous+1)).html("<img src='./../src/img/" + deck.cards[previous].getImage() + "' alt='image " + deck.cards[previous].value + "'>");
      setTimeout(function() {
        $("#" + (idx)).html("");
        $("#" + (previous+1)).html("");
      }, 1000)
    } else {
      deck.cards.forEach((element,idx) => {
        if (element.state) {
          $("#" + (idx+1)).html("<img src='./../src/img/" + element.getImage() + "' alt='image " + element.value + "'>");
        } else {
          $("#" + (idx+1)).html("");
        }
      });
    }
    
  });
});
