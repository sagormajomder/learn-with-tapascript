'use strict';

const questionAnswer = [
  {
    question: 'What is JavaScript?',
    answer: 'JavaScript is a programming language used for web development.',
  },
  {
    question: 'What is HTML?',
    answer:
      'HTML stands for HyperText Markup Language and is used to create the structure of web pages.',
  },
  {
    question: 'What is CSS?',
    answer:
      'CSS stands for Cascading Style Sheets and is used to style web pages.',
  },
];

const grandPaDivEl = document.createElement('div');
grandPaDivEl.classList.add('faq');

questionAnswer.forEach(item => {
  const parentDivEl = document.createElement('div');
  parentDivEl.classList.add('faq__item');

  const questionEl = document.createElement('div');
  questionEl.classList.add('faq__question');
  questionEl.textContent = item.question;

  const answerEl = document.createElement('div');
  answerEl.classList.add('faq__answer');
  answerEl.textContent = item.answer;

  parentDivEl.appendChild(questionEl);
  parentDivEl.appendChild(answerEl);
  grandPaDivEl.appendChild(parentDivEl);
});
document.body.appendChild(grandPaDivEl);

function hideAllAnswers() {
  const answerEls = grandPaDivEl.querySelectorAll('.faq__answer.show');
  answerEls.forEach(el => {
    el.classList.remove('show');
  });
}

grandPaDivEl.addEventListener('click', e => {
  if (e.target.classList.contains('faq__question')) {
    e.stopPropagation();
    const currentItem = e.target.parentElement;
    const answerEl = currentItem.querySelector('.faq__answer');
    if (!answerEl.classList.contains('show')) {
      hideAllAnswers();
    }
    answerEl.classList.toggle('show');
  }
});

document.addEventListener('click', hideAllAnswers);
