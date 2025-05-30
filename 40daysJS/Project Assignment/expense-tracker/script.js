'use strict';

function User(name, budget) {
  this.name = name;
  this.budget = budget;
}

function createExpenseTracker(user, initBudget) {
  const userExpense = [
    { id: '1', amount: 200, category: 'Food', description: 'Lunch' },
    { id: '2', amount: 500, category: 'Shopping', description: 'New Shoes' },
  ];
  const preFixedExpenseAmount = 700; // for example Data
  // to maintain data flow accurately, initBudget modified for example data
  const userData = new User(user, initBudget - preFixedExpenseAmount);

  return {
    addExpense(amount, category = '', discription = '') {
      if (amount && userData.budget > amount) {
        userData.budget -= amount;
        userExpense.push({
          id: crypto.randomUUID(),
          amount,
          category: category.trim(),
          discription: discription.trim(),
        });

        console.log(`Expense successfully added`);
      } else {
        console.log('Amount is exceeding your budget to add expense');
      }
    },

    removeExpense(expenseId) {
      const expense = userExpense.find(ex => ex.id === expenseId);
      if (expense) {
        userData.budget += expense.amount;
        userExpense.splice(
          userExpense.findIndex(ex => ex.id === expenseId),
          1
        );

        console.log(`Expense successfully removed`);
      } else {
        console.log(
          `ID didn't match to remove expense. Please try with correct ID`
        );
      }
    },

    updateExpense(expenseId, upAmount, upCategory = '', upDiscription = '') {
      const expense = userExpense.find(ex => ex.id === expenseId);
      if (expense) {
        if (upAmount && typeof upAmount === 'number') {
          if (upAmount < userData.budget) {
            userData.budget += expense.amount - upAmount;
            expense.amount = upAmount;
          } else
            console.log('Amount is exceeding your budget to update expense');
        } else {
          console.log(
            'An unknown error occurs. Please give amount as number type'
          );
        }
        if (upCategory && typeof upCategory === 'string')
          expense.category = upCategory;

        if (upDiscription && typeof upDiscription === 'string')
          expense.description = upDiscription;
      } else {
        console.log('Expense not found');
      }
    },

    updateUser(userName = '', userBudget) {
      if (userName && typeof userName === 'string') {
        userData.name = userName.trim();
      }
      if (userBudget && typeof userBudget === 'number') {
        userData.budget = userBudget;
      }
    },

    getTotalExpense() {
      const totalExpenseAmount = userExpense.reduce(
        (acc, ex) => (acc += ex.amount),
        0
      );
      const totalExpense = userExpense.length;
      return {
        expenses: totalExpense,
        totalAmount: totalExpenseAmount,
      };
    },

    getExpenseByCategory(categoryName) {
      const expenses = userExpense.filter(
        ex => ex.category.toLowerCase() === categoryName.toLowerCase().trim()
      );
      if (expenses.length > 0) return expenses;
      else console.log('No expense found');
    },

    getHighestExpense() {
      const maxExpenseAmount = userExpense.reduce((acc, el) => {
        if (el.amount > acc) acc = el.amount;
        return acc;
      }, 0);

      const maxExpenses = userExpense.filter(
        ex => ex.amount === maxExpenseAmount
      );

      return { amount: maxExpenseAmount, expense: maxExpenses };
    },

    getLowestExpense() {
      const lowestExpenseAmount = userExpense.reduce((acc, el) => {
        if (el.amount < acc) acc = el.amount;
        return acc;
      }, Infinity);

      const lowestExpenses = userExpense.filter(
        ex => ex.amount === lowestExpenseAmount
      );

      return { amount: lowestExpenseAmount, expense: lowestExpenses };
    },

    getUserInfo() {
      return { ...userData };
    },
    getAllExpense() {
      return {
        expenses: userExpense,
      };
    },
  };
}

function start() {
  const myExpenseTracker = createExpenseTracker('Sagor', 5000);
  // console.log(myExpenseTracker);

  console.log('User Info:', myExpenseTracker.getUserInfo());

  myExpenseTracker.addExpense(200, '   Food    ', 'breakfast');
  myExpenseTracker.addExpense(300, 'Entertainment', 'cinema hall');
  myExpenseTracker.addExpense(300, '  Food ', ' fruits');
  myExpenseTracker.removeExpense('1');
  myExpenseTracker.updateExpense('2', 100);
  console.log('Total Expense: ', myExpenseTracker.getTotalExpense());
  console.log(
    'Expenses by food Category:',
    myExpenseTracker.getExpenseByCategory('   food   ')
  );
  console.log('Highest Expense:', myExpenseTracker.getHighestExpense());
  console.log('Lowest Expense:', myExpenseTracker.getLowestExpense());
  console.log('User Info:', myExpenseTracker.getUserInfo());
  console.log('All expenses: ', myExpenseTracker.getAllExpense());
  myExpenseTracker.updateUser('Sagor Majomder');
  myExpenseTracker.updateUser('', 6000);
  console.log('User Info:', myExpenseTracker.getUserInfo());

  // console.log('=======Another User=======');
  // const myExpenseTracker1 = createExpenseTracker('Mehedi', 6000);

  // myExpenseTracker1.addExpense(300, 'Entertainment', 'cinema hall');

  // console.log('Total Expense: ', myExpenseTracker1.getTotalExpense());

  // console.log('User Info:', myExpenseTracker1.getUserInfo());
}

start();
