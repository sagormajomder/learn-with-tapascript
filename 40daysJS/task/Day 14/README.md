# Day 14

## Tasks

### 1. What will be the output of the following code?

```js
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log('An error occurred:', error.name);
}
```

### Answer:

Output: ReferenceError

### 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

```js
const balance = 500;
function processPayment(amount) {
  try {
    console.log('Payment is processing...');
    if (amount < 0) {
      throw new Error('Invalid amount input. Input is: ' + amount);
    } else if (amount > balance) {
      throw new Error('You do not have enough balance to payment!');
    }

    console.log('Payment is done.');
  } catch (error) {
    console.error('An Error occurs!', error.message);
  }
}

// processPayment(-100);
processPayment(700);
```

### Implement a custom error handling system for an e-commerce website that categorizes errors as -

- UserError
- PaymentError
- ServerError
- EmailError

### Answer:

```js
// Error Handling System
function UserError(message) {
  this.name = 'UserError';
  this.message = message;
  this.stack = new Error().stack;
}
UserError.prototype = Object.create(Error.prototype);

function PaymentError(message) {
  this.name = 'PaymentError';
  this.message = message;
  this.stack = new Error().stack;
}

PaymentError.prototype = Object.create(Error.prototype);

function ServerError(message) {
  this.name = 'ServerError';
  this.message = message;
  this.stack = new Error().stack;
}

ServerError.prototype = Object.create(Error.prototype);

function EmailError(message) {
  this.name = 'EmailError';
  this.message = message;
  this.stack = new Error().stack;
}
EmailError.prototype = Object.create(Error.prototype);

//  E-commerce App
const dbEmail = 'hello@gmail.com';
const dbPassword = '12345';
const userBalace = 3000;

function payment(amount) {
  try {
    if (amount > userBalace) {
      throw new Error('You do not have enough balance to payment!');
    }

    console.log('Payment is done.');
    console.log('Thank you for shopping with us.');
  } catch (error) {
    console.error('An Error occurs!', error.message);
  }
}

function userLogin(email, password) {
  try {
    if (!email.includes('@')) throw new EmailError('Unknown email input');

    if (password !== dbPassword || email !== dbEmail) {
      throw new UserError('User not found');
    }

    console.log('User login successfull');
    console.log('items added to cart successfully');
    payment(2000);
  } catch (error) {
    console.error('An Error occurs!', error.message);
  }
}

function ServerStart(serverConfig) {
  try {
    if (!serverConfig) throw new ServerError('Server Stop unexpectfully');
    console.log('Server start successfully');
    userLogin('hello@gmail.com', '12345');
  } catch (error) {
    console.error('An Error occurs!', error.message);
  }
}
ServerStart(true);
```

### 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

```js
function fetchData(url) {
  try {
    if (!url.includes('https')) throw new Error('Invalid Url');
    console.log('url fetching is successfull');
  } catch (error) {
    console.error('An error occurs', error.message);
  }
}

fetchData('https://127.0.0.1:5500/');
```

### 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

```js
const userInput = { username: '', age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
```

### Answer:

```js
function ValidationError(message) {
  this.name = 'ValidationError';
  this.message = message;
  this.stack = new Error().stack;
}
ValidationError.prototype = Object.create(Error.prototype);

function validateUser({ username, age }) {
  try {
    if (!username) throw new ValidationError('Username cannot be empty');
    if (age < 0) throw new ValidationError('Age must be a positive number');
  } catch (error) {
    console.error('An error occurs', error.message);
  }
}
const userInput = { username: '', age: -2 };
validateUser(userInput);
```

### 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

```js
function readFile(filePath) {
  try {
    if (!filePath) throw new Error('File not found');
    console.log('file read successfully');
  } catch (error) {
    console.error('An error occur:', error.message);
  } finally {
    console.log('release the resources');
  }
}
readFile('');
```

### 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

```js
function parseJson(str) {
  try {
    const obj = JSON.parse(str);
    console.log('parsing is successfull');
  } catch (error) {
    console.log('Invalid JSON');
  }
}
// parseJson('{"fullName":"Sagor Majomder","age":25}');
parseJson({ fullName: 'Sagor Majomder', age: 25 });
```

### 8. What is the purpose of throw in JavaScript?

### Answer:

It creates a new error manually

### 9. What does the finally block do in a try...catch statement?

### Answer:

Runs regardless of whether an error occurs or not

### 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

Here's the table converted into **Markdown** format:

| **Keyword/Concept** | **Purpose**                                            | **Usage Example**                                 | **Notes**                                                               |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------- | ----------------------------------------------------------------------- |
| `try`               | Defines a block of code to test for errors             | `try { risky code... }`                           | Code in this block is monitored for errors                              |
| `catch`             | Defines a block of code to handle the error            | `catch (err) { console.log(err.message); }`       | Only runs if an error occurs in the `try` block                         |
| `throw`             | Manually creates and throws an error                   | `throw new Error("Something went wrong");`        | Used to trigger an error intentionally                                  |
| `rethrow`           | Re-throws an error inside a `catch` block              | `catch (err) { if (!canHandle(err)) throw err; }` | Useful when we want to let some errors bubble up after partial handling |
| `Error` object      | Standard JavaScript object to represent runtime errors | `new Error("Custom error message")`               | Includes properties like `name` and `message`                           |
