'use strict';
// Create Button Element
const bodyEl = document.body;
const button = document.createElement('button');
button.innerText = 'Click me';
button.type = 'button';
bodyEl.appendChild(button);

// add click event handler
function clickCounter() {
  let count = 0;
  // console.log('hello');
  return function () {
    count++;
    console.log('button click ', count);
  };
}

// we should not call callback function ever
// but in order to attach a click event handler using a closure, we call the callback function
button.addEventListener('click', clickCounter());

// ===== task: 6 ===========
function fnFactory() {
  let count = 0;

  return {
    increment(value) {
      if (value > 0) {
        count += value;
        console.log('given value ' + value + ', count value ' + count);
      } else console.warn('Please give positive number');
    },
    decrement(value) {
      if (value > 0) {
        count -= value;
        console.log('given value ' + value + ', count value ' + count);
      } else console.warn('Please give positive number');
    },
    reset() {
      count = 0;
      console.log('count value:', count);
    },
  };
}

const counterFn = fnFactory();
counterFn.increment(5);
counterFn.decrement(2);
counterFn.reset();
