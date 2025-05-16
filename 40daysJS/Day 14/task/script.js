'use strict';
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log('An error occurred:', error.name);
}
/////////////////////////////////////////////////////
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
// processPayment(700);

/////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////
function fetchData(url) {
  try {
    if (!url.includes('https')) throw new Error('Invalid Url');
    console.log('url fetching is successfull');
  } catch (error) {
    console.error('An error occurs', error.message);
  }
}

fetchData('https://127.0.0.1:5500/');

/////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////
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
