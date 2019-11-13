import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Card, Deck } from './memory';


$(document).ready(function() {
  const deck = new Deck();
  deck.shuffle();
  deck.cards.forEach((element,idx) => {
    $("#" + idx).html("<img src='../src/img/" + element.getImage() + "' alt='image " + element.value + "'>");
  });
});
