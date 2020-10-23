// Card Constructor
// Create a constructor Card. A card object will have 2 properties:

// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.
// A card will be created thus:

function Card(face, suit) {
    this.face = face;
    this.suit = suit;
}

var myCard = new Card(5, 'diamonds')

// And you can access the individual properties like:
// myCard.face 5
// myCard.suit 'diamonds'

console.log(myCard.face)
console.log(myCard.suit)

// getImageUrl()
// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. 
// The method should return the URL path to the png image file for the card.
// Person.prototype.greet = function(other) {
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!');
// };react-objects-and-constructors/images/2_of_clubs.png
Card.prototype.getImageUrl = function() {
    return `/images/${this.face}_of_${this.suit}.png`
}

myCard.getImageUrl()
// 'images/5_of_diamonds.png'

// Hand constructor
// A hand is simply represented as a collection of cards, 
// but it would also be convenient for a hand to be able to 
// return it's point value. We would like to be able to do this with a Hand constructor:

// [
//     new Card(2, 'diamonds'),
//     new Card(3, 'hearts'),
//     new Card(4, 'spades'),
//     new Card(5, 'clubs')
// ]

function Hand() {
    this.cards = []
}

Hand.prototype.addCard = function(newCard) {
    return this.cards.push(newCard)
} 

// Hand.prototype.getPoints = function() {
//     console.log(`this`)
// } 

Hand.prototype.getPoints = function () {
    points = 0
    this.cards.forEach(element => {
        if (element.face === 'ace') {
            points += 1
        } else if (element.face === 'jack' || element.face === 'queen' || element.face === 'king') {
            points += 10
        } else {
            points += element.face
        }
    });
    this.cards.forEach(element => {
        if (element.face === 'ace' && points < 12) {
            points += 10
        }
    });
    return points;
}

const myHand = new Hand()
myHand.addCard(new Card('ace', 'spades'))
myHand.addCard(new Card('jack', 'clubs'))
myHand.addCard(new Card('queen', 'hearts'))
myHand.addCard(new Card('king', 'diamonds'))

console.log(myHand)
console.log(myHand.getPoints())

// myHand.getPoints()

// 15

// Implement a Hand constructor that will allow the code above to work. 
// Hint: you will want to store as a property of a hand object - an array of card objects.

// Deck constructor
// A deck is also represented as a collection of cards, 
// but it would also be convenient for it to be able to shuffle itself, 
// and be asked to draw a card. We would like to be able to do this with a Deckconstructor:

function Deck() {
    var deck = []
    var suits = [
        'clubs',
        'spades',
        'hearts',
        'diamonds'
      ]
      // for each suit
    for (let i = 0; i < suits.length; i++) {
        // find the suit we are working with
        // const suit = suits[i];
        // for each rank from 1 - 13
        for (let j = 1; j <= 13; j++) {
          // create a new card object
        //   const card = {
        //     j: j,
        //     suit: suit,
        //   };
        const nextCard = new Card(j, suits[i]) 
          // then push it into the deck array
          deck.push(nextCard);
        }
      }
      this.deck = deck
}
Deck.prototype.draw = function() {
  // remove and return a card from the deck pop() or splice()
  let drawCard = this.deck.pop()
  console.log(drawCard)
}

Deck.prototype.shuffle = function() {
    const deck = myDeck.deck
  // shuffle the deck for each suit
  // for each card in the deck
  for (let i = 0; i < deck.length; i++) {
    // create a random number (which we will use as an index) between 0 and i
    // (i starts at 0 and increases until we reach the length of the array)
    const randomIndex = Math.floor(Math.random() * i);
    // get the card at position i and store the value in a temporary variable
    const temporary = deck[i]
    // reassign the card at position i with a card in another random spot
    deck[i] = deck[randomIndex];
    // reassign the card at the position we pulled the random card from
    // the card we stored in the temporary variable earlier
    deck[randomIndex] = temporary;
    // repeat until we get to the end of the deck
  }
  this.deck = deck
  console.log(deck)
}

Deck.prototype.numCardsLeft = function() {
  // return the total number of cards left in the deck
  let cardsLeft = this.deck.length
  console.log('CARDS LEFT')
  console.log(cardsLeft)
}

// Deck.cards = array of 52 cards

var myDeck = new Deck()
console.log(myDeck)
// let x = myDeck.draw()
// console.log(x)

// Card {point: 6, suit: "clubs"}

myDeck.draw()

// Card {point: 1, suit: "spades"}

myDeck.shuffle()
myDeck.numCardsLeft()

// 50

// Implement a Deck constructor that will allow for the above code to work.