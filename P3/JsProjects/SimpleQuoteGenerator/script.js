const btn = document.querySelector('#rndmbtn');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [


	{
		person : "- Dalai Lama",
		quote : '"The purpose of our lives is to be happy."'
	},

	{
		person : "- John Lennon",
		quote : '"Life is what happens when you are busy making other plans."'
	},

	{
		person : "- Stephen King",
		quote : '"Get busy living or get busy dying"'
	},

	{
		person : "- Mae West",
		quote : '"You only live once, but if you do it right, once is enough."'
	},

	{
		person : "- Thomas A. Edison",
		quote : '"Many of life’s failures are people who did not realize how close they were to success when they gave up."'
	},

	{
		person : "- Sigma Male",
		quote : '"You can always be thinner be better."'
	},

	

];

function randomQuote(){

	let rn = Math.floor(Math.random() * quotes.length);
	person.innerText = quotes[rn].person;
	quote.innerText = quotes[rn].quote;
}

btn.addEventListener('click',randomQuote);