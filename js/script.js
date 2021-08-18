/******************************************
Treehouse FSJS Techdegree:
project 1A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack communityhttps://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Initialises an array containing quote objects
const quotes = [
  {
      quote: "You know as well as I do that fear only exists for one purpose... to be conquered.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      episode: "Season 2, Episode 23",
      year: "1996"
  },
  {
      quote: "You can use logic to justify almost anything. That's its power and its flaw.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      episode: "Season 1, Episode 10",
      year: "1995"
  },
  {
      quote: "One voice can be stronger than a thousand voices.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      episode: "Season 4, Episode 2",
      year: "1997"
  },
  {
      quote: "We're Starfleet officers. 'Weird' is part of the job.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      episode: "Season 2, Episode 21",
      year: "1996"
  },
  {
      quote: "There are three things to remember about being a starship captain: keep your shirt tucked in, go down with the ship, and never abandon a member of your crew.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      episode: "Season 5, Episode 15",
      year: "1999"
  },
  {
      quote: "I Have Never Subscribed To The Theory That Political Power Flows From The Barrel Of A Gun.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      episode: "Season 3, Episode 12",
      year: "1990"
  },
  {
      quote: "The First Duty Of Every Starfleet Officer Is To The Truth. It Is The Guiding Principle Upon Which Starfleet Is Based.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      episode: "Season 5, Episode 19",
      year: "1992"
  },
  {
      quote: "I Do Not Fire On Defenseless People.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      episode: "Season 5, Episode 14",
      year: "1992"
  },
  {
      quote: "You Must Not Kneel To Me. I Do Not Deserve It.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      episode: "Season 3, Episode 4",
      year: "1989"
  },
  {
      quote: "The First Speech Censured, The First Thought Forbidden, The First Freedom Denied...Chains Us All, Irrevocably.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      episode: "Season 4, Episode 21",
      year: "1991"
  }
]





/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  // Generates a random number based on the length of the quotes array
  let randomNumber = Math.floor(Math.random() * quotes.length); 
  // Stores a random quotes based on the index number generated
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `getRandomColor` function
***/

const getRandomDC = () => {
  // Generators a random decimal code between 0 and 255
  let randomNumber = Math.floor(Math.random() * 255); 
  return randomNumber;
}

const getRandomRGB = () => {
  // Generates an rgb string with three random decimal codes
  let randomRGB = `rgb(${getRandomDC()}, ${getRandomDC()}, ${getRandomDC()})`;
  return randomRGB;
}




/***
 * `printQuote` function
***/

const printQuote = () => {

  // Stores the random quote object in a variable
  let randomQuote = getRandomQuote();

  // Initialises an empty string to store html
  let quoteHtml = ``;

  // Dynamically builds html string using random quote object properties
  quoteHtml = `
      <p class="quote"> ${randomQuote.quote} </p>
      <p class="source"> ${randomQuote.source}
      `;

  if (randomQuote.citation) {
    quoteHtml += `
      <span class="citation">${randomQuote.citation}</span>
      `;
  }
  // Additional object property inserted (for episode reference)
  if (randomQuote.year) {
    quoteHtml += `
      <span class="year">${randomQuote.episode}</span>
      `;    
  }
  if (randomQuote.year) {
    quoteHtml += `
      <span class="year">${randomQuote.year}</span>
      `;    
  }

  quoteHtml += `</p>`;

  // Updates the innertHTML of the quote box using dynamic quote content
  document.getElementById('quote-box').innerHTML = quoteHtml; 

  // Updates the background colour with a random RGB
  document.querySelector('body').style.backgroundColor = `${getRandomRGB()}`;
}


/***
 * `printQuote` interval
***/

const autoPlay = (duration) => {
  // Sets an interval on the printQuote function
  setInterval(printQuote, duration);
}

// Duration set to 5s (5000ms);
autoPlay(5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);