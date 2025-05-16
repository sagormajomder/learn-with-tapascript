# Day 11

## tasks

### 1. output of the following code

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
```

### Answer:

Output: 1, 2

Here, actually closure happen. we know, a function always remember its birth place environment at the moment it was create.

That's why after `outer()` functions' execute finished and pop out from EC, still the returning function remember it's parent functions' environment (in that case `outer()`). For this reason, `counter()` can access `count` and update it whenever it is called.

### 2. output of the following code

```js
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
```

### Answer:

Output: 100

Due to closure we get this output. After `testClosure()` functions' execute finished and pop out from EC, still the returning function remember it's parent functions' environment (in that case `testClosure()`). For this reason, returning function can access `x` and update it whenever it is called.

### 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

```js
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
```

### 4. A function createMultiplier(multiplier) that returns another function to multiply numbers.

```js
function createMultiplier(num = 1) {
  return function () {
    return num * num;
  };
}
console.log(createMultiplier(10)());
```

### 5. What happens if a closure references an object?

- The object remains in memory as long as the closure exists

### 6. function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

```js
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
```
