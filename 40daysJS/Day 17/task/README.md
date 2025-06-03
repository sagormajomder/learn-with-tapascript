# Day 17 tasks

## 1. Find the Most Frequent Word in a Paragraph

Consider the follwoing HTML:

```html
<div id="text">This is a test. This test is only a test.</div>
```

Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

Hints:

- Use document.querySelector() or getElementById() to select the paragraph.
- Convert the text into an array of words.
- Use querySelector() to display the most frequent word along with the count inside another `<div>`.

### Answer:

```html
<div id="text">This is a test. This test is only a test.</div>
<div id="text-result"></div>
```

```js
const textEl = document.getElementById('text');
const textResultEl = document.querySelector('#text-result');
textResultEl.innerHTML = `****List of frequest word and its count**** \n`;

const wordCountObj = textEl.innerText
  .replace(/\./g, '')
  .split(' ')
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

const maxFrequent = Math.max(...Object.values(wordCountObj));

for (const [word, count] of Object.entries(wordCountObj)) {
  if (wordCountObj[word] === maxFrequent) {
    textResultEl.innerHTML += `<p>Frequent word: "${word}" and count: ${count} </p>`;
  }
}
```

## 2. Create a zebra pattern

Consider the following HTML:

```html
<ul id="cars">
  <li>BMW</li>
  <li>Mahindra</li>
  <li>Audi</li>
  <li>Toyota</li>
  <li>Honda</li>
  <li>Hundai</li>
  <li>Tata</li>
  <li>Suzuki</li>
</ul>
```

Now put alternate colors and background colors to each of the list tags. for example,

- If the BMW is in white color text, the background should be in black color.
- Then for the next car it will be reversed, the color is black and the background is white.
- Then again the next one is white color and background black
- So on.

## Answer:

```html
<div>
  <p>***zebra pattern***</p>
  <ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
  </ul>
</div>
```

```js
const listEls = document.querySelectorAll('#cars li');

listEls.forEach((el, i) => {
  if (i % 2 === 0) {
    el.style.backgroundColor = '#ED9A12';
    el.style.color = '#1265ED';
  } else {
    el.style.backgroundColor = '#1265ED';
    el.style.color = '#ED9A12';
  }
});
```

## 3. Write different ways we can access DOM and what they returns

## Answer:

| **DOM Access Method**               | **Return Value**                                                  |
| ----------------------------------- | ----------------------------------------------------------------- |
| getElementById("id_name")           | HTML element associated with the id                               |
| getElementByTagName("tag_name")     | Specific HTML elements (HTMLCollection)                           |
| getElementByClassName("class_name") | Specific HTML elements associated with the class (HTMLCollection) |
| querySelector("css_selector")       | First matching HTML element with the selector                     |
| uerySelectorAll("css_selector")     | All matching HTML elements with the selector (NodeList)           |

## 4. Find and Replace Text Inside a Page

Write a script that finds all occurrences of a word inside a `<p>` tag and replaces them with another word dynamically.

## Answer:

```html
<div>
  <p>***Find and Replace Text Inside a Page***</p>
  <p id="text-replace">This is a test. This test is only a test.</p>
  <p>Input find word: <input type="text" id="find-word" /></p>
  <p>Input replace word: <input type="text" id="replace-word" /></p>
  <button id="replace-word-action">Replace Words</button>
</div>
```

```js
const replaceTextEl = document.getElementById('text-replace');
const findWordInputEl = document.getElementById('find-word');
const replaceWordInputEl = document.getElementById('replace-word');
const replaceWordButtonEl = document.getElementById('replace-word-action');

replaceWordButtonEl.addEventListener('click', function () {
  const findWordValue = findWordInputEl.value;
  const replaceWordValue = replaceWordInputEl.value;

  // check if both input element have value or not
  if (findWordValue !== '' && replaceWordValue !== '') {
    if (
      replaceTextEl.innerText
        .toLowerCase()
        .includes(findWordValue.toLowerCase())
    ) {
      let str = '';
      replaceTextEl.innerText.split(' ').forEach(word => {
        if (word.toLowerCase().includes(findWordValue.toLowerCase())) {
          str += word.replace(word, replaceWordValue);
          if (word.includes('.')) str += '. ';
        } else str += ' ' + word + ' ';
      });

      replaceTextEl.innerText = str.trim();
    } else alert("Don't find the word in the sentence");
  } else {
    alert('Please Enter value for both find word and replace word');
  }
});
```

## 5. Extract and Count Unique Links from a Page

Count all the unique hyperlinks (`<a>`) in a page and display their count.

```html
<div>
  <p>***Extract and Count Unique Links from a Page***</p>
  <p><a href="https://www.google.com/">Google</a></p>
  <p><a href="https://www.facebook.com/">Facebook</a></p>
  <p><a href="https://www.youtube.com/">Youtube</a></p>
  <p><a href="https://www.google.com/">Google</a></p>
  <p><a href="https://www.youtube.com/">Youtube</a></p>
  <p id="count"></p>
</div>
```

```js
const linksEl = document.querySelectorAll('a[href]');
const countEl = document.querySelector('#count');
const uniqueHrefsEL = [];

linksEl.forEach(link => {
  const href = link.href;
  if (!uniqueHrefsEL.includes(href)) {
    uniqueHrefsEL.push(href);
  }
});
countEl.innerText = `Unique hyperlinks count: ${uniqueHrefsEL.length}`;
```
