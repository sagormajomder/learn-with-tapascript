# Day 15 Tasks

### **T-001**: Create an array of 5 elements using the Array Constructor.

```js
const arr1 = new Array('🍇', '🍉', '🍒', '🍅', '🍓');
console.log(arr1);
```

### **T-002**: Create an array of 3 empty slots.

```js
const arr2 = new Array(3);
console.log(arr2);
```

### **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.

```js
const arr3 = ['🍇', '🍉', '🍒', '🍅', '🍓', '🍍'];
console.log(arr3[arr3.length - 3]); // 🍅
```

### **T-004**: Use the `for` loop on the above array to print elements in the odd index.

```js
const arr3 = ['🍇', '🍉', '🍒', '🍅', '🍓', '🍍'];

for (let i = 0; i < arr3.length; i++) {
  if (i % 2 !== 0) console.log(arr3[i]);
}
```

### **T-005**: Add one element at the front and the end of an array.

```js
const arr4 = ['🍉', '🍒', '🍅'];
console.log(arr4); //  ['🍉', '🍒', '🍅'];
arr4.unshift('🍇');
arr4.push('🍓');
console.log(arr4); // ['🍇', '🍉', '🍒', '🍅', '🍓'];
```

### **T-006**: Remove an element from the front and the end of an array.

```js
const arr5 = ['🍇', '🍉', '🍒', '🍅', '🍓'];
console.log(arr5); // ['🍇', '🍉', '🍒', '🍅', '🍓'];
arr5.shift();
console.log(arr5); //  [ '🍉', '🍒', '🍅', '🍓'];
arr5.pop(); //  [ '🍉', '🍒', '🍅'];
console.log(arr5);
```

### **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

```js
const fvtFood = [
  'Kacci',
  'Chicken biryani',
  'Polaw',
  'Chicken curry',
  'Burger',
  'Sandwich',
  'Meat box',
  'Rohu curry',
  'Jalebi',
  'Rasgulla',
];

const [, , , , , fastFood] = fvtFood;
console.log(fastFood);
```

### **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

```js
const fvtFood = [
  'Kacci',
  'Chicken biryani',
  'Polaw',
  'Chicken curry',
  'Burger',
  'Sandwich',
  'Meat box',
  'Rohu curry',
  'Jalebi',
  'Rasgulla',
];
const [, , ...restFood] = fvtFood;
console.log(restFood);
```

### **T-009**: Clone an Array(Shallow cloning)

```js
const fvtFood = [
  'Kacci',
  'Chicken biryani',
  'Polaw',
  'Chicken curry',
  'Burger',
  'Sandwich',
  'Meat box',
  'Rohu curry',
  'Jalebi',
  'Rasgulla',
];
const anotherFvtFood = [...fvtFood];
console.log(anotherFvtFood);
```

### **T-010**: Empty an array using its length property

```js
const fvtFood = [
  'Kacci',
  'Chicken biryani',
  'Polaw',
  'Chicken curry',
  'Burger',
  'Sandwich',
  'Meat box',
  'Rohu curry',
  'Jalebi',
  'Rasgulla',
];
fvtFood.length = 0;
console.log(fvtFood);
```

### **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.

```js
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] === 5) {
    numArr.length = 6;
  }
  console.log('value:', numArr[i]);
  console.log('Array:', numArr);
}
```

### **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.

```js
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArr);
numArr.splice(0);
console.log(numArr); // []
```

### **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?

### Answer:

- If we use `pop()` or `shift()` method, we have to use a loop to make the array empty. As a result, the complexity of the code will increase. So surely these two methods are not efficient to make an array empty.
- `splice()` method can delete or add N elements. So to make an array empty, its complexity also get increase when the elements of the array get increases. So surely it is also not so efficient to make an array empty.
- If we use `length` property or assign new empty array (`[]`) to the existing array, its complexity is always stable.
  - But when assinging new empty array (`[]`), it's not affect the original array. Its just replace the variable with another heap memory reference. If the array was referencing somewhere, then its element can be accessible through that reference.
  - But using `length` property, it affect the original array.
    So after consider all circumstances, we can say that using `length` property is the most efficient way to make an array empty.

### **T-014**: What happens when you concatenate two empty arrays?

### Answer:

we use `concat()` method to concatenated or merge two arrays into a new array. Now if we concatenated two empty arrays, then the new array will be also an empty array cause the two empty arrays doesn't have any element to be concatenated.

```js
numArr.splice(0);
console.log(numArr);

const empArr1 = [];
const empArr2 = [];

console.log(empArr1.concat(empArr2)); // []
```

### **T-015**: How can you check if a value is partially matching with any of the elements of an Array?

```js
const fvtFood = [
  'Kacci',
  'Chicken biryani',
  'Polaw',
  'Chicken curry',
  'Burger',
  'Sandwich',
  'Meat box',
  'Rohu curry',
  'Jalebi',
  'Rasgulla',
];
const partiallyMatch = fvtFood.some(el => el.toLowerCase() === 'kacci');
console.log(partiallyMatch); // true
```

### **T-016**: What is the difference between the slice() and splice() methods?

### Answer:

| Slice                                                    | Splice                                                           |
| -------------------------------------------------------- | ---------------------------------------------------------------- |
| It does not mutate the original array                    | It mutate the original array                                     |
| It return a portion of the original array as a new array | It return deleted elements as a new array of the original array. |
| It also work on string.                                  | It does not work on string                                       |

### **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

```js
const codes = ['a12', 'b1', 'A2', 'C3', 'a2', 'B10'];

const ascendingArr = codes.toSorted((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  if (a.toLowerCase() < b.toLowerCase()) return -1;
});

const descendingArr = codes.toSorted((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) return -1;
  if (a.toLowerCase() < b.toLowerCase()) return 1;
});
console.log('Original Array:', codes);
console.log('Ascending', ascendingArr);
console.log('Descending', descendingArr);
```

### **T-018**: Can you give examples of sparse and dense arrays?

```js
const denseArr = [1, 2, 3, 4, 5];
const sparseArr = [];
sparseArr[2] = 100;
console.log(denseArr);
console.log(sparseArr);
```

### **T-019**: Give a practical usages of the .fill() method

```js
const friendsInput = Number(
  prompt('How many friends do you have? (Give numeric value)')
);
const friendsArr = isNaN(friendsInput)
  ? null
  : new Array(friendsInput).fill('');

for (let i = 0; i < friendsArr.length; i++) {
  const friend = prompt(`Friend ${i + 1} name:`);
  friendsArr[i] = friend;
}
console.log(friendsArr);
```

### **T-020**: How to convert an array to a string?

```js
const codes = ['a12', 'b1', 'A2', 'C3', 'a2', 'B10'];
console.log(codes.join(',')); // "a12,b1,A2,C3,a2,B10"
```

### **T-021**: Can you filter employees who work in the "Engineering" department?

```js
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

const engDeptID = departments.find(
  dept => dept.name.toLowerCase() === 'engineering'
).id;

const engDepEmployees = employees.filter(emp => emp.departmentId === engDeptID);
console.log('Engineering department:', engDepEmployees);
```

### **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".

```js
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

const newEmployees = employees.map(emp => {
  const deptSuffix = departments.find(
    dept => dept.id === emp.departmentId
  ).name;
  return `${emp.name} (${deptSuffix})`;
});

console.log(newEmployees);
```

### **T-023**: Find the highest salary among employees.

```js
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

const highestSalary = employees.reduce(
  (acc, curr) => (acc < curr.salary ? curr.salary : acc),
  0
);
console.log(highestSalary);
```

### **T-024**: Check if there is at least one employee in the "Sales" department.

```js
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

const salesDeptID = departments.find(
  dept => dept.name.toLowerCase() === 'sales'
).id;

const hasSalesEmp = employees.some(emp => emp.departmentId === salesDeptID);
console.log(
  'Is there at least one employee in the "Sales" department',
  hasSalesEmp
);
```

### **T-025**: Write a function to filter employees earning more than 6000.

```js
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

function filterSalary(arr, filterAmount = 6000) {
  return arr.filter(el => el.salary > filterAmount);
}

const filterEmployeeSalary = filterSalary(employees, 6000);
console.log(filterEmployeeSalary);
```

### **T-026**: Create an array of employee names only.

```js
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

const employeeNameArr = employees.map(emp => emp.name);
console.log(employeeNameArr);
```

### **T-027**: Calculate the total salary of all employees using reduce

```js
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

const totalSalary = employees.reduce((acc, curr) => (acc += curr.salary), 0);
console.log(totalSalary);
```

### **T-028**: Is there any employee earning less than 5000?

```js
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

const lessthan5k = employees.some(emp => emp.salary < 5000);
console.log('Has Any Employee Salary less than 5K:', lessthan5k);
```

### **T-029**: Find the first employee who earns exactly 5100.

```js
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

const salary = 5100;
const exactEmp = employees.find(emp => emp.salary === salary);
console.log(exactEmp);
```

### **T-030**: Find the last employee in the "HR" department.

```js
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

const hrDeptId = departments.find(dept => dept.name.toLowerCase() === 'hr').id;
const lastHrEmp = employees.findLast(emp => emp.departmentId === hrDeptId);
console.log(lastHrEmp);
```

### **T-031**: Find the first employee in the "Marketing" department.

```js
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

const marketingDeptID = departments.find(
  dept => dept.name.toLowerCase() === 'marketing'
).id;
const firstMarktingEmp = employees.find(
  emp => emp.departmentId === marketingDeptID
);
console.log(firstMarktingEmp);
```

### **T-032**: Check if all employees earn more than 4000.

```js
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

const allMoreThan4k = employees.every(emp => emp.salary > 4000);
console.log('All employee earn more than 4k', allMoreThan4k);
```

### **T-033**: Find the first employee in the "Sales" and "HR" department.

```js
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

const deptId = deptName =>
  departments.find(dept => dept.name.toLowerCase() === deptName).id;

const findFirstEmp = deptId =>
  employees.find(emp => emp.departmentId === deptId);

const firstSalesEmp = findFirstEmp(deptId('sales'));
const firstHrEmp = findFirstEmp(deptId('hr'));

console.log(firstSalesEmp, firstHrEmp);
```

### **T-034**: Verify if all employees belong to a department listed in the departments array.

```js
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

const isBelongDept = employees.every(emp =>
  departments.some(dept => dept.id === emp.departmentId)
);

console.log('All employees belong to the departments', isBelongDept);
```

### **T-035**: Log each employee's name and department name to the console.

```js
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

employees.forEach(emp => {
  console.log(
    `${emp.name} from ${
      departments.find(dept => dept.id === emp.departmentId).name
    } department`
  );
});
```

### **T-036**: Extract all employee names into a single array.

```js
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

const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);
```

### **T-037**: Increment each employee's salary by 10%

```js
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

const increasePercent = 0.1;
const employeeSalaryIncrease = employees.map(emp => {
  emp.salary = emp.salary + emp.salary * increasePercent;
  return emp;
});
console.log(employeeSalaryIncrease);
```

### **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...]

```js
const randGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

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

const skills = [
  'Excel',
  'Management',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Data Analysis',
];

const skillsEmployees = employees.map(emp => {
  const newSkillArr = [];
  for (let i = 0; i < randGenerator(1, skills.length); i++) {
    newSkillArr.push(skills[i]);
  }
  emp['skills'] = newSkillArr;
  return emp;
});

console.log(skillsEmployees);

const flattenSkillArr = skillsEmployees.flatMap(emp =>
  emp.skills.map(skill => ({ name: emp.name, skill }))
);

console.log(flattenSkillArr);
```

### **T-039**: Find the total salary of all employees working in the "Engineering" department.

```js
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

const engDeptID = departments.find(
  dept => dept.name.toLowerCase() === 'engineering'
).id;

const totalSalary = employees
  .filter(emp => emp.departmentId === engDeptID)
  .map(emp => emp.salary)
  .reduce((acc, curr) => (acc += curr), 0);
console.log(totalSalary);
```

### **T-040**: Check if there is any department where all employees earn more than 5000.

```js
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

const deptMoreThan5k = departments.reduce((acc, dept) => {
  const fileteredDeptEmp = employees.filter(
    emp => emp.departmentId === dept.id
  );
  // console.log(fileteredDeptEmp);
  if (fileteredDeptEmp.every(emp => emp.salary > 5000))
    return (acc = dept.name);

  return (acc = '');
}, '');

console.log(
  deptMoreThan5k
    ? `all employees of "${deptMoreThan5k}" department earn more than 5000`
    : `There is no such department where all amployees earn more than 500  `
);
```

### **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.

```js
const projEmployees = [
  {
    id: 1,
    name: 'Alice',
    departmentId: 1,
    salary: 5000,
    projects: ['Project A', 'Project B'],
  },
  {
    id: 2,
    name: 'Bob',
    departmentId: 2,
    salary: 7000,
    projects: ['Project A', 'Project C'],
  },
  {
    id: 3,
    name: 'Charlie',
    departmentId: 3,
    salary: 4500,
    projects: ['Project B', 'Project D'],
  },
  {
    id: 4,
    name: 'Diana',
    departmentId: 1,
    salary: 5500,
    projects: ['Project X', 'Project G'],
  },
  {
    id: 5,
    name: 'Edward',
    departmentId: 2,
    salary: 8000,
    projects: ['Project A', 'Project F'],
  },
  {
    id: 6,
    name: 'Fiona',
    departmentId: 4,
    salary: 6000,
    projects: ['Project A', 'Project E'],
  },
  {
    id: 7,
    name: 'George',
    departmentId: 3,
    salary: 5200,
    projects: ['Project B', 'Project H'],
  },
  {
    id: 8,
    name: 'Helen',
    departmentId: 4,
    salary: 7200,
    projects: ['Project A', 'Project J'],
  },
  {
    id: 9,
    name: 'Ian',
    departmentId: 2,
    salary: 4800,
    projects: ['Project H', 'Project M'],
  },
  {
    id: 10,
    name: 'Jane',
    departmentId: 1,
    salary: 5100,
    projects: ['Project A', 'Project P', 'Project Q'],
  },
];

const uniqueProjects = projEmployees
  .flatMap(emp => emp.projects)
  .toSorted()
  .reduce((acc, proj, i, sortedArr) => {
    if (proj !== sortedArr[i + 1]) acc++;
    return acc;
  }, 0);

console.log('Total Unique Project: ', uniqueProjects);
```

### **T-042**: For each employee, find their department name and return an array of employee names with their department names.

```js
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

const emplyDept = employees.map(emp => {
  const deptName = departments.find(dept => dept.id === emp.departmentId).name;
  return {
    name: emp.name,
    departmentName: deptName,
  };
});
console.log(emplyDept);
```

### **T-043**: Get a list of names of employees earning more than 6000.

```js
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
const empMoreThan6k = employees.filter(emp => emp.salary > 6000);
console.log(empMoreThan6k);
```

### **T-044**: Write a for-of loop to print the names of all employees from the employees array.

```js
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

for (const { name } of employees) {
  console.log('Employee Name: ', name);
}
```

### **T-045**: Using a for-of loop, print the names of employees earning more than 5000.

```js
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
console.log('Employees name earning more than 5000:');
for (const { name, salary } of employees) {
  if (salary > 5000) console.log(name);
}
```

### **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.

```js
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
for (const { name, salary } of employees) {
  console.log('Name:', name);
  console.log('Salary:', salary);
  console.log('');
}
```

### **T-047**: Write a for-of loop to match employees with their departments and print the results.

```js
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

for (const { id, name: deptName } of departments) {
  for (const { name: empName, departmentId } of employees) {
    if (id === departmentId) {
      console.log('Employee Name:', empName);
      console.log('Department Name:', deptName);
      console.log('');
    }
  }
}
```

### **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

```js
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
for (const [index, { name }] of employees.entries()) {
  console.log(index, name);
}
```

### **T-049**: Given the array-like object below, access the second element and log it:

```js
const arrayLike = { 0: 'First', 1: 'Second', length: 2 };
const [, secondEl] = Array.from(arrayLike);
console.log(secondEl);
```

### **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

```js
function sum(a, b) {
  console.log('Array Like arguments obj', arguments);
  const argsArr = Array.from(arguments);
  console.log(argsArr);
  return a + b;
}
console.log(sum(10, 2));
```

### **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

```js
const allDivEl = document.querySelectorAll('div');
console.log(allDivEl);
const allDivElArr = Array.from(allDivEl);
console.log(allDivElArr);
```

### **T-052**: Merge these two arrays into a single array:

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);
```

### **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

```js
const dupArr = Array.from({ length: 5 }, () => 'A');
console.log(dupArr);
```

### **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.

```js
const strArr = Array.from('Hello');
console.log(strArr);
```

### **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

```js
const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
const letterGroup = Object.groupBy(fruits, el => el[0]);
console.log(letterGroup);
```

### **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

```js
const arr = [3, 7, 3, 2, 3, 8, 7, 7];

const counts = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
const maxFreq = Math.max(...Object.values(counts));
const mostRepeated = Object.keys(counts)
  .filter(key => counts[key] === maxFreq)
  .map(Number);
console.log('Most Repeated Number: ', mostRepeated.join(' and '));
```

### **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].

```js
const arr = [5, 2, 9, 1, 3, 6, 8];
const sortedArr = arr.toSorted((a, b) => a - b);
console.log(sortedArr);
const length = sortedArr.length;
const middileIndex = Math.floor(length / 2);
let median = 0;
if (length % 2 === 0) {
  median = (sortedArr[middileIndex - 1] + sortedArr[middileIndex]) / 2;
}
if (length % 2 !== 0) {
  median = sortedArr[middileIndex];
}

console.log('Median is', median);
```

### **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

```js
const arr = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];
const arrObject = arr
  .flatMap(el => el)
  .reduce((acc, value, i, arr) => {
    if (typeof value === 'string') acc[value] = arr[i + 1];
    return acc;
  }, {});
console.log(arrObject);
```

### **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

```js
const arr = [
  ['a', 'b'],
  ['c', 'd'],
];
const upperArr = arr.flatMap(el => el.map(e => e.toUpperCase()));
console.log(upperArr);
```

### **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

```js
const arr = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
const convertObj = arr.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] | 0) + 1;
  return acc;
}, {});

for (const [key, value] of Object.entries(convertObj)) {
  console.log(`${key} occurences ${value} times`);
}
```

### **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
const exactElementsArr = arr.slice(1, 4);
console.log(exactElementsArr);
```

### **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

```js
const arr = [9, 3, 1, 6, 8];
const sortedArr = arr.toSorted((a, b) => a - b);
console.log(sortedArr);
```

### **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

```js
const arr = [1, 2, 3, 4, 5];
const notMutateReverse = arr.toReversed(); // not mutate original array
console.log(arr, notMutateReverse); // both are not same

// const revereArr = arr.reverse(); // mutate original array
// console.log(arr, revereArr); // both are same
```

### **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):

```js
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

const groupArr = Object.groupBy(users, ({ age }) =>
  age > 18 ? 'Adult' : 'Non-Adult'
);
console.log(groupArr);
```

### **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

```js
const sentence = '40 Days of JavaScript by tapaScript is a powerful initiative';
const occureneObj = sentence.split(' ').reduce((acc, word) => {
  acc[word] = word.length;
  return acc;
}, {});

const maxLetter = Math.max(...Object.values(occureneObj));

const longestWord = Object.keys(occureneObj)
  .filter(key => occureneObj[key] === maxLetter)
  .map((word, i, arr) =>
    arr.length - 1 === i ? `and ${word}.` : arr.length > 1 ? `${word}, ` : word
  )
  .join('');

console.log('Longest Word in the sentence: ', longestWord);
```

### **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const commonEl = arr1.filter(el => arr2.some(el2 => el === el2));
console.log(commonEl);
```
