// Create element function
function createEl(elName, classNames, textContent) {
  const el = document.createElement(elName);
  if (classNames) {
    el.classList.add(...classNames);
  }
  if (textContent) {
    el.textContent = textContent;
  }
  return el;
}

// Append child function
function appendChild(parent, child) {
  parent.appendChild(child); 
}

// Create elements
const container = createEl('div', ['container']);
const heading = createEl('h1', ['heading'], 'Counter');
const p = createEl('p', ['p'], 'Click the buttons to increment or decrement the counter.');

const counterContainer = createEl('div', ['counter']);
const counterText = createEl('p', ['counter-text'], 0);
const incrementBtn = createEl('button', ['my-btn'], '+');
const decrementBtn = createEl('button', ['my-btn'], '-');
const resetBtn = createEl('button', ['my-btn'], 'Reset');

// Create footer
const footerContainer = createEl('div', ['footer-container']);
const footer = createEl('footer', ['footer']);
const footerText = createEl('p', ['footer-text'], 'Created by Thomas Tinelli 2023');

// Event listener sul container per l'Event Delegation
container.addEventListener('click', (event) => {
  if (event.target.matches('.my-btn')) {
    const btnValue = event.target.textContent;
    if (btnValue === '+') {
      counterText.textContent++;
    } else if (btnValue === '-') {
      counterText.textContent--;
    } else if (btnValue === 'Reset') {
      counterText.textContent = 0;
    }
  }
});


// Append elements  
appendChild(container, heading);
appendChild(container, p);

appendChild(counterContainer, decrementBtn);
appendChild(counterContainer, counterText);
appendChild(counterContainer, incrementBtn);
appendChild(counterContainer, resetBtn);

appendChild(container, counterContainer);

appendChild(footer, footerText);
appendChild(footerContainer, footer);

appendChild(document.body, container);
appendChild(document.body, footerContainer);
