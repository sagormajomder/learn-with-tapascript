'use strict';
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

/////////////////////////////////////////////////

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

////////////////////////////////////
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
///////////////////////////////////////////////////////
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
