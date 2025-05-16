console.log(this);

// const obj = {
//   normalMethod() {
//     console.log(this);
//   },
// };

// obj.normalMethod();

function test() {
  console.log(this);
}
test();

const arrowThis = () => console.log(this);
arrowThis();

const obj1 = {
  arrowMethod: () => {
    console.log(this);
  },
};

obj1.arrowMethod();

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

const user = {
  name: 'tapaScript',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();

const obj = {
  name: 'Tom',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
// greetFn.call(obj);
// or
const newGreet = greetFn.bind(obj);
newGreet();

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
