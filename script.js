/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
      quote: "You know as well as I do that fear only exists for one purpose... to be conquered.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      year: "Season 2, Episode 23 - 1996"
  },
  {
      quote: "You can use logic to justify almost anything. That's its power and its flaw.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      year: "Season 1, Episode 10 - 1995"
  },
  {
      quote: "One voice can be stronger than a thousand voices.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      year: "Season 4, Episode 2 - 1997"
  },
  {
      quote: "We're Starfleet officers. 'Weird' is part of the job.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      year: "Season 2, Episode 21 - 1996"
  },
  {
      quote: "There are three things to remember about being a starship captain: keep your shirt tucked in, go down with the ship, and never abandon a member of your crew.",
      source: "Captain Kathryn Janeway",
      citation: "Star Trek: Voyager",
      year: "Season 5, Episode 15 - 1999"
  },
  {
      quote: "I Have Never Subscribed To The Theory That Political Power Flows From The Barrel Of A Gun.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      year: "Season 3, Episode 12 - 1990"
  },
  {
      quote: "The First Duty Of Every Starfleet Officer Is To The Truth. It Is The Guiding Principle Upon Which Starfleet Is Based.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      year: "Season 5, Episode 19 - 1992"
  },
  {
      quote: "I Do Not Fire On Defenseless People.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      year: "Season 5, Episode 14 - 1992"
  },
  {
      quote: "You Must Not Kneel To Me. I Do Not Deserve It.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      year: "Season 3, Episode 4 - 1989"
  },
  {
      quote: "The First Speech Censured, The First Thought Forbidden, The First Freedom Denied...Chains Us All, Irrevocably.",
      source: "Captain Jean-Luc Picard",
      citation: "Star Trek: The Next Generation",
      year: "Season 4, Episode 21 - 1991"
  }
]





/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length); 
  let randomQuote = arr[randomNumber];
  return randomQuote;
}


/***
 * `printQuote` function
***/

const printQuote = (arr) => {
  let randomQuote = getRandomQuote(arr);

  let quoteHtml = ``;

  quoteHtml = `
      <p class="quote"> ${randomQuote.quote} </p>
      <p class="source"> ${randomQuote.source}
      `;

  if (randomQuote.citation) {
    quoteHtml += `
      <span class="citation">${randomQuote.citation}</span>
      `;
  }
  if (randomQuote.year) {
    quoteHtml += `
      <span class="year">${randomQuote.year}</span>
      `;    
  }

  quoteHtml += `</p>`;

  document.getElementById('quote-box').innerHTML = quoteHtml; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);