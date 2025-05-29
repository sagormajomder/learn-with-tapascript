'use strict';
// const arr1 = new Array('🍇', '🍉', '🍒', '🍅', '🍓');
// console.log(arr1);

// const arr2 = new Array(3);
// console.log(arr2);

// const arr3 = ['🍇', '🍉', '🍒', '🍅', '🍓', '🍍'];
// console.log(arr3[arr3.length - 3]); // 🍅

// for (let i = 0; i < arr3.length; i++) {
//   if (i % 2 !== 0) console.log(arr3[i]);
// }

// const arr4 = ['🍉', '🍒', '🍅'];
// console.log(arr4); //  ['🍉', '🍒', '🍅'];
// arr4.unshift('🍇');
// arr4.push('🍓');
// console.log(arr4); // ['🍇', '🍉', '🍒', '🍅', '🍓'];

// const arr5 = ['🍇', '🍉', '🍒', '🍅', '🍓'];
// console.log(arr5); // ['🍇', '🍉', '🍒', '🍅', '🍓'];
// arr5.shift();
// console.log(arr5); //  [ '🍉', '🍒', '🍅', '🍓'];
// arr5.pop(); //  [ '🍉', '🍒', '🍅'];
// console.log(arr5);

// const fvtFood = [
//   'Kacci',
//   'Chicken biryani',
//   'Polaw',
//   'Chicken curry',
//   'Burger',
//   'Sandwich',
//   'Meat box',
//   'Rohu curry',
//   'Jalebi',
//   'Rasgulla',
// ];

// const [, , , , , fastFood] = fvtFood;
// console.log(fastFood);

// const [, , ...restFood] = fvtFood;
// console.log(restFood);

// const anotherFvtFood = [...fvtFood];
// console.log(anotherFvtFood);

// // fvtFood.length = 0;
// // console.log(fvtFood);

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numArr);
// // for (let i = 0; i < numArr.length; i++) {
// //   if (numArr[i] === 5) {
// //     numArr.length = 6;
// //   }
// //   console.log('value:', numArr[i]);
// //   console.log('Array:', numArr);
// // }

// numArr.splice(0);
// console.log(numArr);

// const empArr1 = [];
// const empArr2 = [];

// console.log(empArr1.concat(empArr2));

// const partiallyMatch = fvtFood.some(el => el.toLowerCase() === 'kacci');
// console.log(partiallyMatch); // true

// const codes = ['a12', 'b1', 'A2', 'C3', 'a2', 'B10'];

// const ascendingArr = codes.toSorted((a, b) => {
//   if (a.toLowerCase() > b.toLowerCase()) return 1;
//   if (a.toLowerCase() < b.toLowerCase()) return -1;
// });

// const descendingArr = codes.toSorted((a, b) => {
//   if (a.toLowerCase() > b.toLowerCase()) return -1;
//   if (a.toLowerCase() < b.toLowerCase()) return 1;
// });
// console.log('Original Array:', codes);
// console.log('Ascending', ascendingArr);
// console.log('Descending', descendingArr);

// const denseArr = [1, 2, 3, 4, 5];
// const sparseArr = [];
// sparseArr[2] = 100;
// console.log(denseArr);
// console.log(sparseArr);

// const friendsInput = Number(
//   prompt('How many friends do you have? (Give numeric value)')
// );
// const friendsArr = isNaN(friendsInput)
//   ? null
//   : new Array(friendsInput).fill('');

// for (let i = 0; i < friendsArr.length; i++) {
//   const friend = prompt(`Friend ${i + 1} name:`);
//   friendsArr[i] = friend;
// }
// console.log(friendsArr);

// console.log(codes.join(',')); // a12,b1,A2,C3,a2,B10

const employees = [
  { id: 1, name: 'Alice', departmentId: 1, salary: 5000 },
  { id: 2, name: 'Bob', departmentId: 2, salary: 7000 },
  { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
  { id: 4, name: 'Diana', departmentId: 1, salary: 5500 },
  { id: 5, name: 'Edward', departmentId: 2, salary: 8000 },
  { id: 6, name: 'Fiona', departmentId: 4, salary: 6000 },
  { id: 7, name: 'George', departmentId: 3, salary: 5200 },
  { id: 8, name: 'Helen', departmentId: 4, salary: 7200 },
  { id: 9, name: 'Ian', departmentId: 2, salary: 4800 },
  { id: 10, name: 'Jane', departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: 'HR' },
  { id: 2, name: 'Engineering' },
  { id: 3, name: 'Marketing' },
  { id: 4, name: 'Sales' },
];

// const engDeptID = departments.find(
//   dept => dept.name.toLowerCase() === 'engineering'
// ).id;

// const engDepEmployees = employees.filter(emp => emp.departmentId === engDeptID);
// console.log('Engineering department:', engDepEmployees);

////////////////////////////////////////////////////////////////

// const newEmpoyees = employees.map(emp => {
//   const deptSuffix = departments.find(
//     dept => dept.id === emp.departmentId
//   ).name;
//   return `${emp.name} (${deptSuffix})`;
// });

// console.log(newEmpoyees);

////////////////////////////////////////////////////////////////

// const highestSalary = employees.reduce(
//   (acc, curr) => (acc < curr.salary ? curr.salary : acc),
//   0
// );
// console.log(highestSalary);

////////////////////////////////////////////////////////////////

// const salesDeptID = departments.find(
//   dept => dept.name.toLowerCase() === 'sales'
// ).id;

// const hasSalesEmp = employees.some(emp => emp.departmentId === salesDeptID);
// console.log(
//   'Is there at least one employee in the "Sales" department',
//   hasSalesEmp
// );

////////////////////////////////////////////////////////////////

// function filterSalary(arr, filterAmount = 6000) {
//   return arr.filter(el => el.salary > filterAmount);
// }

// const filterEmployeeSalary = filterSalary(employees, 6000);
// console.log(filterEmployeeSalary);

////////////////////////////////////////////////////////////////
// const employeeNameArr = employees.map(emp => emp.name);
// console.log(employeeNameArr);
////////////////////////////////////////////////////////////////
// const totalSalary = employees.reduce((acc, curr) => (acc += curr.salary), 0);
// console.log(totalSalary);
////////////////////////////////////////////////////////////////
// const lessthan5k = employees.some(emp => emp.salary < 5000);
// console.log('Salary less than 5K:', lessthan5k);
////////////////////////////////////////////////////////////////
// const salary = 5100;
// const exactEmp = employees.find(emp => emp.salary === salary);
// console.log(exactEmp);
////////////////////////////////////////////////////////////////
// const marketingDeptID = departments.find(
//   dept => dept.name.toLowerCase() === 'marketing'
// ).id;
// const firstMarktingEmp = employees.find(
//   emp => emp.departmentId === marketingDeptID
// );
// console.log(firstMarktingEmp);
////////////////////////////////////////////////////////////////
// const allMoreThan4k = employees.every(emp => emp.salary > 4000);
// console.log('All employee earn more than 4k', allMoreThan4k);
////////////////////////////////////////////////////////////////

// const deptId = deptName =>
//   departments.find(dept => dept.name.toLowerCase() === deptName).id;

// const findFirstEmp = deptId =>
//   employees.find(emp => emp.departmentId === deptId);

// const firstSalesEmp = findFirstEmp(deptId('sales'));
// const firstHrEmp = findFirstEmp(deptId('hr'));

// console.log(firstSalesEmp, firstHrEmp);
////////////////////////////////////////////////////////////////
// const isBelongDept = employees.every(emp =>
//   departments.some(dept => dept.id === emp.departmentId)
// );

// console.log('All employees belong to the departments', isBelongDept);
////////////////////////////////////////////////////////////////
// employees.forEach(emp => {
//   console.log(
//     `${emp.name} from ${
//       departments.find(dept => dept.id === emp.departmentId).name
//     } department`
//   );
// });
////////////////////////////////////////////////////////////////
// const employeeNames = employees.map(emp => emp.name);
// console.log(employeeNames);
////////////////////////////////////////////////////////////////
// const increasePercent = 0.1;
// const employeeSalaryIncrease = employees.map(emp => {
//   emp.salary = emp.salary + emp.salary * increasePercent;
//   return emp;
// });
// console.log(employeeSalaryIncrease);
////////////////////////////////////////////////////////////////
// const randGenerator = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const skills = [
//   'Excel',
//   'Management',
//   'JavaScript',
//   'React',
//   'Node.js',
//   'Python',
//   'Data Analysis',
// ];

// const skillsEmployees = employees.map(emp => {
//   const newSkillArr = [];
//   for (let i = 0; i < randGenerator(1, skills.length); i++) {
//     newSkillArr.push(skills[i]);
//   }
//   emp['skills'] = newSkillArr;
//   return emp;
// });

// console.log(skillsEmployees);

// const flattenSkillArr = skillsEmployees.flatMap(emp =>
//   emp.skills.map(skill => ({ name: emp.name, skill }))
// );

// console.log(flattenSkillArr);
////////////////////////////////////////////////////////////////
// const engDeptID = departments.find(
//   dept => dept.name.toLowerCase() === 'engineering'
// ).id;

// const totalSalary = employees
//   .filter(emp => emp.departmentId === engDeptID)
//   .map(emp => emp.salary)
//   .reduce((acc, curr) => (acc += curr), 0);
// console.log(totalSalary);
////////////////////////////////////////////////////////////////

// const allMoreThan5k = departments.reduce((acc, dept) => {
//   const fileteredDeptEmp = employees.filter(
//     emp => emp.departmentId === dept.id
//   );
//   // console.log(fileteredDeptEmp);
//   if (fileteredDeptEmp.every(emp => emp.salary > 5000))
//     return (acc = dept.name);

//   return (acc = '');
// }, '');

// console.log(
//   allMoreThan5k
//     ? `all employees of "${allMoreThan5k}" department earn more than 5000`
//     : `There is no such department where all amployees earn more than 500  `
// );
////////////////////////////////////////////////////////////////
// const projEmployees = [
//   {
//     id: 1,
//     name: 'Alice',
//     departmentId: 1,
//     salary: 5000,
//     projects: ['Project A', 'Project B'],
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     departmentId: 2,
//     salary: 7000,
//     projects: ['Project A', 'Project C'],
//   },
//   {
//     id: 3,
//     name: 'Charlie',
//     departmentId: 3,
//     salary: 4500,
//     projects: ['Project B', 'Project D'],
//   },
//   {
//     id: 4,
//     name: 'Diana',
//     departmentId: 1,
//     salary: 5500,
//     projects: ['Project X', 'Project G'],
//   },
//   {
//     id: 5,
//     name: 'Edward',
//     departmentId: 2,
//     salary: 8000,
//     projects: ['Project A', 'Project F'],
//   },
//   {
//     id: 6,
//     name: 'Fiona',
//     departmentId: 4,
//     salary: 6000,
//     projects: ['Project A', 'Project E'],
//   },
//   {
//     id: 7,
//     name: 'George',
//     departmentId: 3,
//     salary: 5200,
//     projects: ['Project B', 'Project H'],
//   },
//   {
//     id: 8,
//     name: 'Helen',
//     departmentId: 4,
//     salary: 7200,
//     projects: ['Project A', 'Project J'],
//   },
//   {
//     id: 9,
//     name: 'Ian',
//     departmentId: 2,
//     salary: 4800,
//     projects: ['Project H', 'Project M'],
//   },
//   {
//     id: 10,
//     name: 'Jane',
//     departmentId: 1,
//     salary: 5100,
//     projects: ['Project A', 'Project P', 'Project Q'],
//   },
// ];

// const uniqueProjects = projEmployees
//   .flatMap(emp => emp.projects)
//   .toSorted()
//   .reduce((acc, proj, i, sortedArr) => {
//     if (proj !== sortedArr[i + 1]) acc++;
//     return acc;
//   }, 0);

// console.log('Total Unique Project: ', uniqueProjects);
////////////////////////////////////////////////////////////////
// const emplyDept = employees.map(emp => {
//   const deptName = departments.find(dept => dept.id === emp.departmentId).name;
//   return {
//     name: emp.name,
//     departmentName: deptName,
//   };
// });
// console.log(emplyDept);
////////////////////////////////////////////////////////////////
// const empMoreThan6k = employees.filter(emp => emp.salary > 6000);
// console.log(empMoreThan6k);
////////////////////////////////////////////////////////////////
// for (const { name, salary } of employees) {
//   console.log('Name:', name);
//   console.log('Salary:', salary);
//   console.log('');
// }
////////////////////////////////////////////////////////////////
// for (const { id, name: deptName } of departments) {
//   for (const { name: empName, departmentId } of employees) {
//     if (id === departmentId) {
//       console.log('Employee Name:', empName);
//       console.log('Department Name:', deptName);
//       console.log('');
//     }
//   }
// }
////////////////////////////////////////////////////////////////
// for (const [index, { name }] of employees.entries()) {
//   console.log(index, name);
// }
////////////////////////////////////////////////////////////////
// const arrayLike = { 0: 'First', 1: 'Second', length: 2 };
// const [, secondEl] = Array.from(arrayLike);
// console.log(secondEl);
////////////////////////////////////////////////////////////////
// function sum(a, b) {
//   console.log('Array Like arguments obj', arguments);
//   const argsArr = Array.from(arguments);
//   console.log(argsArr);
//   return a + b;
// }
// console.log(sum(10, 2));
////////////////////////////////////////////////////////////////
// const allDivEl = document.querySelectorAll('div');
// console.log(allDivEl);
// const allDivElArr = Array.from(allDivEl);
// console.log(allDivElArr);
////////////////////////////////////////////////////////////////
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const mergeArr = [...arr1, ...arr2];
// console.log(mergeArr);
////////////////////////////////////////////////////////////////
// const dupArr = Array.from({ length: 5 }, () => 'A');
// console.log(dupArr);
////////////////////////////////////////////////////////////////
// const strArr = Array.from('Hello');
// console.log(strArr);
////////////////////////////////////////////////////////////////
// const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
// const letterGroup = Object.groupBy(fruits, el => el[0]);
// console.log(letterGroup);
////////////////////////////////////////////////////////////////

// const arr = [3, 7, 3, 2, 3, 8, 7, 7];

// const counts = arr.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// const maxFreq = Math.max(...Object.values(counts));
// const mostRepeated = Object.keys(counts)
//   .filter(key => counts[key] === maxFreq)
//   .map(Number);
// console.log('Most Repeated Number: ', mostRepeated.join(' and '));

////////////////////////////////////////////////////////////////
// const arr = [5, 2, 9, 1, 3, 6, 8];
// const sortedArr = arr.toSorted((a, b) => a - b);
// console.log(sortedArr);
// const length = sortedArr.length;
// const middileIndex = Math.floor(length / 2);
// let median = 0;
// if (length % 2 === 0) {
//   median = (sortedArr[middileIndex - 1] + sortedArr[middileIndex]) / 2;
// }
// if (length % 2 !== 0) {
//   median = sortedArr[middileIndex];
// }

// console.log('Median is', median);

////////////////////////////////////////////////////////////////
// const arr = [
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ];
// const arrObject = arr
//   .flatMap(el => el)
//   .reduce((acc, value, i, arr) => {
//     if (typeof value === 'string') acc[value] = arr[i + 1];
//     return acc;
//   }, {});
// console.log(arrObject);
////////////////////////////////////////////////////////////////
// const arr = [
//   ['a', 'b'],
//   ['c', 'd'],
// ];
// const upperArr = arr.flatMap(el => el.map(e => e.toUpperCase()));
// console.log(upperArr);
////////////////////////////////////////////////////////////////
// const arr = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
// const convertObj = arr.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] | 0) + 1;
//   return acc;
// }, {});

// for (const [key, value] of Object.entries(convertObj)) {
//   console.log(`${key} occurences ${value} times`);
// }

////////////////////////////////////////////////////////////////
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const exactElementsArr = arr.slice(1, 4);
// console.log(exactElementsArr);

////////////////////////////////////////////////////////////////
// const arr = [9, 3, 1, 6, 8];
// const sortedArr = arr.toSorted((a, b) => a - b);
// console.log(sortedArr);
////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5];
// const notMutateReverse = arr.toReversed(); // not mutate original array
// console.log(arr, notMutateReverse); // both are not same

// const revereArr = arr.reverse(); // mutate original array
// console.log(arr, revereArr); // both are same
////////////////////////////////////////////////////////////////
// const users = [
//   { name: 'Alice', age: 55 },
//   { name: 'Bob', age: 3 },
//   { name: 'Charlie', age: 25 },
// ];

// const groupArr = Object.groupBy(users, ({ age }) =>
//   age > 18 ? 'Adult' : 'Non-Adult'
// );
// console.log(groupArr);
////////////////////////////////////////////////////////////////
// const sentence = '40 Days of JavaScript by tapaScript is a powerful initiative';
// const occureneObj = sentence.split(' ').reduce((acc, word) => {
//   acc[word] = word.length;
//   return acc;
// }, {});

// const maxLetter = Math.max(...Object.values(occureneObj));

// const longestWord = Object.keys(occureneObj)
//   .filter(key => occureneObj[key] === maxLetter)
//   .map((word, i, arr) =>
//     arr.length - 1 === i ? `and ${word}.` : arr.length > 1 ? `${word}, ` : word
//   )
//   .join('');

// console.log('Longest Word in the sentence: ', longestWord);

////////////////////////////////////////////////////////////////
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const commonEl = arr1.filter(el => arr2.some(el2 => el === el2));
console.log(commonEl);
