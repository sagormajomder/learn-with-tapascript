# Day 12

## Tasks

### 1. What will be the output and why?

```js
const user = { name: 'Alex', age: undefined };
console.log(user.age ?? 'Not provided');
```

### Answer:

output: "Not provided"

Here we use `nullish coalescing` operator. This operator works in a such way that if first expression produces `null` or `undefined` value , then it return second expression, Otherwise first expression.

As `user.age` is `undefined`, it return `Not provided`;

### 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

### Answer:

As we use static method `Object.freeze()` on `obj`, it become completely immutable. Means we can't modify or added new property or delete property from `obj`.

In `strict mode`, it gives error. Otherwise it print `1`.

### 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: 'Tapas',
  company: {
    name: 'tapaScript',
    location: {
      city: 'Bangalore',
      zip: '94107',
    },
  },
};

const {
  name,
  company,
  company: {
    location: { city },
  },
} = person;
console.log(name, company, city);
```

### 4.Build a Student Management System

```js
const student = {
  name: 'John',
  age: 26,
  takenCreditHours: {
    english: 2,
    bangla: 2,
    math: 3,
    highermath: 3,
    physics: 3,
    chemistry: 3,
    biology: 3,
    sociology: 2,
  },
  obtainGrades: {
    english: 5,
    bangla: 4,
    math: 5,
    highermath: 5,
    physics: 4,
    chemistry: 4,
    biology: 5,
    sociology: 3,
  },
  calcGpa() {
    let tQuaPoints = 0;
    let tCreHours = 0;
    for (const [key, value] of Object.entries(this.obtainGrades)) {
      tQuaPoints += value * this.takenCreditHours[key];
      tCreHours += this.takenCreditHours[key];
    }
    // console.log(tQuaPoints, tCreHours);
    const avgGpa = tQuaPoints / tCreHours;
    console.log('Average Grade:', avgGpa.toFixed(3));
  },
};

student.calcGpa();
```

### 5. Book Store Inventory System

```js
const bookStore = {
  books: [
    'Introduction to Algorithms',
    'The Art of Computer Programming',
    'Modern Operating',
    "Alice's Adventures in Wonderland",
    'The Hobbit',
    "Harry Potter and the Sorcerer's Stone",
  ],
  isAvailable: 1,
  checkAllBook() {
    console.log(this.books);
  },
  reStock(bookName) {
    this.books.push(bookName);
  },
  checkAvailable(bookName) {
    for (let book = 0; book < this.books.length; book++) {
      if (this.books[book].toLowerCase() === bookName.toLowerCase()) {
        console.log(bookName + ' is available in the store');
        this.isAvailable--;
        break;
      }
    }
    if (this.isAvailable) {
      console.log(bookName + ' is not available in the store');
    }
    this.isAvailable++;
  },
};
bookStore.checkAllBook();
bookStore.checkAvailable('The Hobbit');
```

### 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

### Answer:

Both return an array but the element of the array is different.

`Object.keys()` return an array where the elements is the property name of the object.

`Object.entries()` return an array which also contain some arrays (where each array contain two element: object key and value) depend on the object.

```js
const obtainGrades = {
  english: 5,
  bangla: 4,
  math: 5,
  highermath: 5,
  physics: 4,
  chemistry: 4,
  biology: 5,
  sociology: 3,
};
console.log(Object.keys(obtainGrades));
console.log(Object.entries(obtainGrades));
```

### 7. How do you check if an object has a certain property?

```js
const obtainGrades = {
  english: 5,
  bangla: 4,
  math: 5,
  highermath: 5,
  physics: 4,
  chemistry: 4,
  biology: 5,
  sociology: 3,
};
// if obtainGrades have english property, return true. Otherwise return false
console.log(Object.hasOwn(obtainGrades, 'english'));
```

### 8. What will be the output and why?

```js
const person = { name: 'John' };
const newPerson = person;
newPerson.name = 'Doe';
console.log(person.name);
```

output: "Doe"

In the above code, we assign the `person` reference into `newPerson` means they are pointing same reference. That's why when we change `newPerson.name` value, it also change into `person.name`.

### 9. What’s the best way to deeply copy a nested object? Explain with examples

### Answer:

We can easily do deeply copy a nested object with `struturedClone()` of window object.

```js
const student = {
  name: 'John',
  age: 26,
  obtainGrades: {
    english: 5,
    bangla: 4,
    math: 5,
    highermath: 5,
    physics: 4,
    chemistry: 4,
    biology: 5,
    sociology: 3,
  },
};

const newStudent = structuredClone(student);
newStudent.obtainGrades.english = 2;
console.log(newStudent.obtainGrades.english); // 2
console.log(student.obtainGrades.english); // 5
```

### 10. Loop and print values using Object destructuiring

```js
const users = [
  {
    name: 'Alex',
    address: '15th Park Avenue',
    age: 43,
  },
  {
    name: 'Bob',
    address: 'Canada',
    age: 53,
  },
  {
    name: 'Carl',
    address: 'Bangalore',
    age: 26,
  },
];

for (const obj of users) {
  const { name, address, age } = obj;
  console.log(name, address, age);
}
```
