/**
 * Function to randomly select and return a quote. Uses the Math.random() method and the length of the quotes array to randomly generate a number within the available range. This is further manipulated with the Math.floor() function to ensure that the random integer is a whole number within the possible range, and contains no decimals.
 * @returns {object} - Returns a random quote object selected from the quotes array.
 */
const getRandomQuote = () => {
  // Generates a random number based on the length of the quotes array
  let randomNumber = Math.floor(Math.random() * quotes.length);
  // Stores a random quotes based on the index number generated
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};

/**
 * A refactored random color generator function.
 * Generates a random number between 0 and 360, which is then interpolated into an HSL expression. The random number passed as the hue value represents a degree or angle on the colour circle. Saturation and Lightness are reduced to 40% to improve contrast against white text.
 * @returns {string} - a randomly generated hsl colour
 */
const getRandomHue = () => {
  let randomHue = Math.floor(Math.random() * 360);
  let randomColor = `hsl(${randomHue}, 40%, 40%)`;
  return randomColor;
};

/**
 * Prepares and displays a random quote on the DOM. A random quote is selected from the array of quote objects, and then dynamically injected into an existing HTML template. Additional quote details are conditionally rendered if present in the dataset.
 */
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

  // Include citation if provided
  if (randomQuote.citation) {
    quoteHtml += `
      <span class="citation">${randomQuote.citation}</span>
      `;
  }
  // Include episode reference if provided
  if (randomQuote.episode) {
    quoteHtml += `
      <span class="year">${randomQuote.episode}</span>
      `;
  }
  // Include publication year if provided
  if (randomQuote.year) {
    quoteHtml += `
      <span class="year">${randomQuote.year}</span>
      `;
  }

  // Inserts element closing tag
  quoteHtml += `</p>`;

  // Updates the innerHTML of the quote box using dynamic quote content
  document.getElementById("quote-box").innerHTML = quoteHtml;

  // Updates the background colour with a random HSL value
  document.querySelector("body").style.backgroundColor = `${getRandomHue()}`;
};

/**
 * Autoplay interval to change quote every 5 seconds
 */
setInterval(printQuote, 5000);

/**
 * Implements additional click event handling to manually change quote
 */
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
