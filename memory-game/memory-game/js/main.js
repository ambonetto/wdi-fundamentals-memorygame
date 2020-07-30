//Test to see JavaScript is working in the Developer Tools
//console.log("Up and running!");

//Card Identities
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{ 
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//User input to an empty array
var cardsInPlay = [];

//Checking the user selections of cards for a match and display an alert message
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
};

//When a card is clicked it will flip over and display the cards image: rank and suit
function flipCard() {
	cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + (cards[cardId].rank));
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

//Checking two cards on the board
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
//Checking the remainder cards on the board
	if (cardsInPlay.length	=== 4) {
		checkForMatch();
	}
	
};

//Setting up the game board
function createBoard() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

	cardsInPlay = [];
};

//Starting the game for the first time
createBoard();
