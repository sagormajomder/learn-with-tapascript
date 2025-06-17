'use strict';
const ulEl = document.getElementById('menu');

ulEl.addEventListener('click', e => {
  if (e.target.classList.contains('link')) {
    e.preventDefault();

    const parentEl = e.target.parentElement;
    console.log(parentEl);

    const parentNextEl = parentEl.nextElementSibling;
    if (parentNextEl) {
      console.log(parentNextEl);
    }

    const grandParentEl = parentEl.parentElement;
    console.log(grandParentEl);

    const allActiveLiEls = grandParentEl.querySelectorAll('li.active');
    allActiveLiEls.forEach(li => {
      li.classList.remove('active');
    });

    parentEl.classList.add('active');
  }
});

////////////////////////////////////////////////////////
const pEl = document.getElementById('highlight');
const range = document.createRange();
range.setStart(pEl, 1);
range.setEnd(pEl, 2);

const markElement = document.createElement('mark');
range.surroundContents(markElement);
///////////////////////////////////////////////////////
const ulEl2 = document.getElementById('performance');

function resetUl() {
  ulEl2.innerHTML = '';
}

function insertPlainDom(num) {
  resetUl();
  for (let i = 0; i < num; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `Item ${i + 1}`;
    ulEl2.appendChild(liEl);
  }
}

function insertDocumentFragment(num) {
  resetUl();
  const frag = document.createDocumentFragment();
  for (let i = 0; i < num; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `Item ${i + 1}`;
    frag.appendChild(liEl);
  }
  ulEl2.appendChild(frag);
}
////////////////////////////////////////////////////////////////
const cardContainerEl = document.querySelector('.card-container');
function createCard(isDeepClone) {
  const cardClone = cardContainerEl.firstElementChild.cloneNode(isDeepClone);
  if (cardClone.querySelector('.title'))
    cardClone.querySelector('.title').textContent = 'Deep Cloned Card';
  if (cardClone.querySelector('.desc'))
    cardClone.querySelector('.desc').textContent =
      'Deep Cloned Card description goes here.';
  cardContainerEl.appendChild(cardClone);
}
////////////////////////////////////////////////////////////////
const targetEl = document.getElementById('targetDiv');

const observer = new MutationObserver(mutationsList => {
  for (const mutation of mutationsList) {
    console.log(`Type of mutation: ${mutation.type}`);

    if (mutation.type === 'childList') {
      console.log('A child node was added or removed.');
    }

    if (mutation.type === 'attributes' && mutation.attributeName === 'class')
      console.log('The class attribute has changed.');

    if (mutation.type === 'characterData') {
      console.log(`Text content changed to: "${mutation.target.textContent}"`);
    }
  }
});

observer.observe(targetEl, {
  subtree: true,
  characterData: true,
  childList: true,
  attributes: true,
  attributeFilter: ['class'],
});

function changeDOM() {
  targetEl.firstChild.textContent = 'Goodbye!';
  targetEl.setAttribute('class', 'greeting');
  const newChild = document.createElement('p');
  newChild.textContent = 'New P element added!';
  targetEl.appendChild(newChild);
}
