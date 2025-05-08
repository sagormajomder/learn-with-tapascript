# Day 10

## The Scope Table

### Comparison Table: `var` vs `let` vs `const`

| Feature                     | `var`                                               | `let`                                       | `const`                                                                |
| --------------------------- | --------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| **Scope**                   | Function scope                                      | Block scope `{}`                            | Block scope `{}`                                                       |
| **Hoisting**                | Hoisted & initialized as `undefined`                | Hoisted but in **Temporal Dead Zone (TDZ)** | Hoisted but in **Temporal Dead Zone (TDZ)**                            |
| **Attached to `window`?**   | ✅ Yes                                              | ❌ No                                       | ❌ No                                                                  |
| **Can be Re-declared?**     | ✅ Yes                                              | ❌ No                                       | ❌ No                                                                  |
| **Can be Reassigned?**      | ✅ Yes                                              | ✅ Yes                                      | ❌ No                                                                  |
| **Initial Value Required?** | ❌ No                                               | ❌ No                                       | ✅ Yes (Must be initialized)                                           |
| **Mutability**              | Mutable                                             | Mutable                                     | Immutable (Can't be reassigned but mutable if it's an object or array) |
| **Use in Loops**            | Allowed but not recommended (function scope issues) | ✅ Recommended                              | ❌ Not recommended for changing values                                 |

## Tasks

### 1. Output of the following code

```js
let user = 'Alice';

function outer() {
  function inner() {
    console.log(user);
  }
  let user = 'Bob';
  inner();
}

outer();
```

### Answer:

Output: "Bob'

when `inner()` function try to print `user` variable, it first check inside `inner()` function is there has any `user` variable. As it not, then it will checking its' scope chain and it found `user` into `outer()` function. so it is print `outer()` functions' `user` variable value;

### 2. Mistake in the code

```js
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
```

### Answer:

As `total` declared into global scope, entire app can access its value. That's not good most of the case. That's why when we call `add()` twice, its value just get increasing. In that case, We can declare a local variable into the function and return it so that the function doesn't have side effect and remain pure.

Also the function parameter doesn't have defaut value. We must assign defaut value to avoid errors.

### 3. Function with a nested function and log a variable from the parent function.

### Answer:

```js
function outerFn() {
  const value = 'outer';
  (function () {
    console.log(value);
  })();
}
outerFn();
```

### 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

```js
// never have access
function justify() {
  // can access here if declare with var
  //can't access here if declare with let
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

justify();
```

### 5. A function that tries to access a variable declared inside another function.

### Answer:

- If the function is the inner function, then it can access variable that is declared in the outer function.
  ```js
  function outerFn() {
    const value = 'outer';
    (function () {
      console.log(value);
    })();
  }
  outerFn();
  ```
- If the variable is declare inside inner function, then it can't access in the outer function.

  ```js
  function outerFn() {
    console.log(value); // reference error

    function inner() {
      const value = 'outer';
      console.log(value);
    }
    inner();
  }
  outerFn();
  ```

- if the functions are sibling each other then the variable can't be access in the other function

  ```js
  function firstFn() {
    const variable = 'Hi';
    console.log(variable);
  }
  function secondFn() {
    console.log(variable); // Reference Error
  }

  firstFn();
  secondFn();
  ```

### 6. Output of the following code

```js
console.log(a);
let a = 10;
```

### Answer:

Output: refference error

variable `a` is declare with `let`. So if we want to access it before declaration, it gives `Refference Error` due to `Temporal Dead Zone`.

### 7. Where is the age variable accessible?

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age); // Reference Error
```

### Answer:

B: Only inside showAge

As the variable declared in `showAge()` function, then it will only be access in that function. Without that, anywhere it gives `Reference Error`.

### 8. Output of the following code

```js
let message = 'Hello';

function outer() {
  let message = 'Hi';

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

### Answer:

Output: "Hi"

### 9. Output of the following code

```js
let x = 'Global';

function outer() {
  let x = 'Outer';

  function inner() {
    let x = 'Inner';
    console.log(x);
  }

  inner();
}

outer();
```

### Answer:

Output: "Inner"

### 10. Output of the following code

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
```

### Answer:

Output: -1, -2

Here, actually closure happen. we know, a function always remember its birth place environment at the moment it was create.

That's why after `counter()` function execute finished and pop out from EC, still the returning function remember it's outer functions' environment (in that case `counter()`). For this reason, `reduce()` can access `count` and update it whenever it is called.
