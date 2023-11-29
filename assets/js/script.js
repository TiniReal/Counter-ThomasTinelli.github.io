// Create elements
const container = document.createElement('div');
const heading = document.createElement('h1');
const p = document.createElement('p');
const counterContainer = document.createElement('div');
const counterText = document.createElement('p');
const incrementBtn = document.createElement('button');
const decrementBtn = document.createElement('button');
const resetBtn = document.createElement('button');

//Create footer
const footerContainer = document.createElement('div');
const footer = document.createElement('footer');
const footerText = document.createElement('p');

// Set classes
container.classList.add('container');
heading.classList.add('heading');
p.classList.add('p');
counterContainer.classList.add('counter');
counterText.classList.add('counter-text');
incrementBtn.classList.add('my-btn');
decrementBtn.classList.add('my-btn');
resetBtn.classList.add('my-btn');

//Set footer classes
footerContainer.classList.add('footer-container');
footer.classList.add('footer');
footerText.classList.add('footer-text');

// Set attributes and text content
heading.textContent = 'Counter';
p.textContent = 'Click the buttons to increment or decrement the counter.';
counterText.textContent = 0;
incrementBtn.textContent = '+';
decrementBtn.textContent = '-';
resetBtn.textContent = 'Reset';

// Set footer text content
footerText.textContent = 'Created by Thomas Tinelli 2023';

// Add event listeners
let counter = 0;
decrementBtn.addEventListener('click', () => {
  counter--;
  counterText.textContent = counter; 
});

incrementBtn.addEventListener('click', () => {
  counter++;
  counterText.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterText.textContent = counter;
});

// Append elements to the DOM
container.appendChild(heading);
container.appendChild(p);

container.appendChild(counterContainer);
counterContainer.appendChild(decrementBtn);
counterContainer.appendChild(counterText);
counterContainer.appendChild(incrementBtn);
counterContainer.appendChild(resetBtn);

//Append footer
footerContainer.appendChild(footer);
footer.appendChild(footerText);

// Append the container to the DOM
document.body.appendChild(container);
document.body.appendChild(footerContainer);



