import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Deck } from './memory';


$(document).ready(function() {
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);
});
