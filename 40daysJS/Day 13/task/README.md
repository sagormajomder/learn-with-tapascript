# Day 13

## Tasks

### 1. This keyword value in different situation

| **Situation**                                          | **Value**                                                                                 |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| At the Global Scope                                    | global object / window object                                                             |
| Inside an Object Method                                | the object itself                                                                         |
| Inside the Satandalone non-Arrow Function              | if strict mode, it is undefined. Otherwise global object / window object                  |
| Inside an Arrow Function(standalone)                   | global object / window object (inherit `this` value from their surrounding lexical scope) |
| Inside an Arrow Function(as object method)             | global object / window object (inherit `this` value from their surrounding lexical scope) |
| Inside an object created with the Constructor Function | the object                                                                                |

#### Example for Global Scope

```js
console.log(this);
```

#### Example for Object Method

```js
const obj = {
  normalMethod() {
    console.log(this);
  },
};

obj.normalMethod();
```

#### Example for Standalone Non-Arrow Function

```js
function test() {
  console.log(this);
}
test();
```

#### Example for Arrow Function (Standalone)

```js
const arrowThis = () => console.log(this);
arrowThis();
```

#### Example for Arrow Function (as Object Method)

```js
const obj1 = {
  arrowMethod: () => {
    console.log(this);
  },
};

obj1.arrowMethod();
```

#### Example for Object Created with Constructor Function

```js
function Pet(name, animal) {
  this.name = name;
  this.animal = animal;
  this.greet = function () {
    console.log(this);
    console.log(this.name + ' is a ' + this.animal);
  };
}

const keomi = new Pet('Kiomi', 'cat');
keomi.greet();
```

### 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
  name: 'tapaScript',
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

### Answer:

As arrow method use, `this` keyword inherit its value from surrounding lexical scope which is `window` object. That's why it does not print what we want.

To fix this, we can simply use function declaration as an object method. Then `this` keyword will point the object which call this `greet()` method.

```js
const user = {
  name: 'tapaScript',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

### 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
  name: 'Tom',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
```

### Answer:

As the object method `greet()` is assign to a variable `greetFn`, it detached from the object and transfer into a standalone function. In a standalone function, `this` value is either `undefined` for strict mode or `global object / window object`. That's why it gives problem.

To fix this, we shouldn't assign the method into a standalone function. But if we have to, then we can use `call()` or `bind()` method.

```js
const obj = {
  name: 'Tom',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn.call(obj);
// or
const newGreet = greetFn.bind(obj);
newGreet();
```

### 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
const user = {
  name: 'Alex',
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
```

### Answer:

In `greet()` method, there is a function named `inner()`. Though it is define inside the method but it is not a method. It is a standalone function and we know in standalone function,`this` is either `undefined` or `global object / window object`. As `this` does not point the object, it gives problem.

### 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

```js
function Sports(name, numsPlayer) {
  this.name = name;
  this.numsPlayer = numsPlayer;
  this.printDetails = function () {
    console.log(this.name + ' have total ' + this.numsPlayer + ' players');
  };
}

const footbal = new Sports('Footbal', 11);
footbal.printDetails();
const cricket = new Sports('Cricket', 11);
cricket.printDetails();
```

### 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

```js
const car1 = {
  brand: 'Audi',
  model: 'A8',
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: 'BMW',
  model: 'X1',
};
```

### Answer:

```js
const car1 = {
  brand: 'Audi',
  model: 'A8',
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: 'BMW',
  model: 'X1',
};

// Solution 1: method borrowing
car2.describe = car1.describe;
car2.describe();
// Solution 2: call() or bind()
const newDescribe = car1.describe;
newDescribe.call(car2);
const retDescribeFn = newDescribe.bind(car2);
retDescribeFn();
```

### 7. What will be the output of the following code and why?

```js
const person = {
  name: 'Charlie',
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```

### Answer:

Output: C: "Charlie" and "" (empty string)

As `sayHello()` method is called by `person` object, `this` is point to the object and print the `name` propertys' value.

On the other hand, `sayHelloArrow()` is an arrow method, that's why it point to the `window` object. As `window` object has a `name` property which value is a empty string(""), it print the empty string.
