# Day 20 task

## 1. Traverse and Toggle Classes

Build a navigation menu. On click of a list item:

- Traverse up to parent `<ul>`
- Remove .active class from all `<li>`
- Add .active only to the clicked `<li>`

### HTML

```html
<h1>Navigation Menu</h1>
<ul id="menu">
  <li class="active"><a class="link" href="#">Home</a></li>
  <li><a class="link" href="#">About</a></li>
  <li><a class="link" href="#">Contact</a></li>
</ul>
```

### CSS

```css
.link:link {
  text-decoration: none;
  color: #000;
  display: inline-block;
  padding: 10px;
}
li.active .link:link {
  background-color: yellow;
  font-weight: bold;
}
```

### JS

```js
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
```

## 2. Highlight Text Using Range

Use the Range API to highlight a portion of a paragraph by wrapping it with a `<mark>` tag.

### HTML

```html
<p id="highlight">
  Lorem ipsum dolor <span>sit amet consectetur adipisicing</span> elit.
  Dignissimos, quibusdam.
</p>
```

### JS

```js
const pEl = document.getElementById('highlight');
const range = document.createRange();
range.setStart(pEl, 1);
range.setEnd(pEl, 2);

const markElement = document.createElement('mark');
range.surroundContents(markElement);
```

## 3. Use DocumentFragment for Performance

Insert 100 list items into the DOM using:

- Plain DOM methods (one by one)
- DocumentFragment (all at once)

### HTML

```html
<button onclick="resetUl()">Reset Items</button>
<button onclick="insertPlainDom(100)">
  Insert (Plain DOM methods) 100 items
</button>
<button onclick="insertDocumentFragment(100)">
  Insert (DocumentFragment) 100 items
</button>
<ul id="performance"></ul>
```

### JS

```js
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
```

## 4. Build a “Smart Cloner”

Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually.

### HTML

```html
<div class="card-container">
  <div class="card">
    <h2 class="title">Example title 1</h2>
    <p class="desc">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
      veritatis?
    </p>
  </div>
</div>
<button onclick="createCard(true)">Clone UI</button>
```

### CSS

```css
.card {
  width: 200px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
```

### JS

```js
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
```

## 5. MutationObserver Watcher

Create a div and use MutationObserver to log whenever:

- A new child is added
- The class attribute changes
- Text is modified

### HTML

```html
<div id="targetDiv">Hello</div>
<button onclick="changeDOM()">Change DOM</button>
```

### JS

```js
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
```
