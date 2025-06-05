# Day 18 tasks

## Online Link

[Live Link](https://sm-js40days-day18-task.netlify.app/)

## 1. Create a form dynamically using JavaScript and manipulate its behavior

- Add input fields dynamically based on user selection e.g., text, email, number
- Add a submit button that logs all the input values as an object.
- Add a reset button that clears the form.
- Use createElement, appendChild, setAttribute, and addEventListener.

### HTML

```html
<div id="form-container">
  <p>
    *** 1. Create a form dynamically using JavaScript and manipulate its
    behavior ***
  </p>
  <button id="btn-form-creation" type="button">Create Form</button>
  <div id="input-field-creation-container" class="hidden">
    <p>Which input field you want to create?</p>
    <button id="btn-text-filed" type="button">Text field</button>
    <button id="btn-email-filed" type="button">Email field</button>
    <button id="btn-number-filed" type="button">Number field</button>
    <button id="btn-password-filed" type="button">Password field</button>
  </div>
</div>
```

### CSS

```css
.hidden {
  display: none;
}
.visible {
  display: block;
}
#form-container {
  margin-top: 50px;
}
#form-el {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: aqua;
}

#form-el input {
  margin: 5px;
}

#form-el [type='submit'] {
  display: block;
  margin: 10px auto 0 auto;
}
#form-el [type='reset'] {
  display: block;
  margin: 10px auto 0 auto;
}
```

### JS

```js
function createEl(tagName) {
  const el = document.createElement(tagName);
  return el;
}

function enableFormButton(submitBtn, resetBtn) {
  submitBtn.removeAttribute('disabled');
  resetBtn.removeAttribute('disabled');
}

function disableFormButton(submitBtn, resetBtn) {
  submitBtn.setAttribute('disabled', 'true');
  resetBtn.setAttribute('disabled', 'true');
}

function formFieldCreation(
  filedType,
  fieldId,
  placeholder,
  labelText,
  formEl,
  btnEl
) {
  const divEl = createEl('div');

  const fieldEl = createEl('input');
  fieldEl.setAttribute('placeholder', placeholder);
  fieldEl.setAttribute('id', fieldId);
  fieldEl.setAttribute('name', fieldId);
  fieldEl.setAttribute('type', filedType);

  const fieldLabel = createEl('label');
  fieldLabel.setAttribute('for', fieldId);
  fieldLabel.textContent = labelText;

  divEl.appendChild(fieldLabel);
  divEl.appendChild(fieldEl);
  formEl.insertBefore(divEl, formEl.lastChild);
  btnEl.classList.add('hidden');
}

function formButtonCreate(btnType, btnValue, callback) {
  const formBtn = createEl('input');
  formBtn.type = btnType;
  formBtn.value = btnValue;
  formBtn.setAttribute('disabled', 'true');

  // Add event listener
  formBtn.addEventListener('click', e => {
    e.preventDefault();
    callback();
  });
  return formBtn;
}

function main() {
  const formContainerEl = document.getElementById('form-container');
  const btnFormCreateEl = document.getElementById('btn-form-creation');

  btnFormCreateEl.addEventListener('click', () => {
    // Create Form element
    const formEl = createEl('form');
    formEl.setAttribute('id', 'form-el');

    // choose which form element to create
    const inputFieldCreationCointainer = document.getElementById(
      'input-field-creation-container'
    );
    inputFieldCreationCointainer.classList.remove('hidden');

    // Field Creation
    const btnTextInputEl = document.getElementById('btn-text-filed');
    const btnEmailInputEl = document.getElementById('btn-email-filed');
    const btnNumberInputEl = document.getElementById('btn-number-filed');
    const btnPassInputEl = document.getElementById('btn-password-filed');

    const btnInputs = [
      {
        el: btnTextInputEl,
        type: 'text',
        id: 'input-text',
        placeholder: 'Enter text',
        label: 'Text Input: ',
      },
      {
        el: btnEmailInputEl,
        type: 'email',
        id: 'input-email',
        placeholder: 'Enter email',
        label: 'Email Input: ',
      },
      {
        el: btnNumberInputEl,
        type: 'number',
        id: 'input-number',
        placeholder: 'Enter number',
        label: 'Number Input: ',
      },
      {
        el: btnPassInputEl,
        type: 'password',
        id: 'input-password',
        placeholder: 'Enter password',
        label: 'Password Input: ',
      },
    ];

    btnInputs.forEach(btn => {
      btn.el.addEventListener('click', () => {
        enableFormButton(btnFormSubmitEl, btnFormResetEl);
        formFieldCreation(
          btn.type,
          btn.id,
          btn.placeholder,
          btn.label,
          formEl,
          btn.el
        );
      });
    });

    const divEl = createEl('div');

    // Create form submit button
    const btnFormSubmitEl = formButtonCreate('submit', 'Submit Form', () => {
      const formData = {};
      formEl.childNodes.forEach(child => {
        if (child !== formEl.lastChild) {
          formData[child.childNodes[1].type] = child.childNodes[1].value;
        }
      });

      console.log(formData);
    });

    divEl.appendChild(btnFormSubmitEl);

    // Create form reset button
    const btnFormResetEl = formButtonCreate('reset', 'Reset Form', () => {
      formEl.replaceChildren(divEl);
      disableFormButton(btnFormSubmitEl, btnFormResetEl);
      btnInputs.forEach(btn => {
        btn.el.classList.remove('hidden');
      });
    });

    divEl.appendChild(btnFormResetEl);

    formEl.appendChild(divEl);
    formContainerEl.appendChild(formEl);
  });
}

main();
```

## 2. Add, delete, and search rows in a dynamic table

- A form to add rows (Name, Age, Role).
- Each row should have a “Delete” button to remove it.
- Add a search input that filters the rows by name.
- Use insertRow, deleteRow, and textContent/innerText.

### HTML

```html
<div id="dynamic-table-container">
  <!-- Create Form -->
  <p>Enter table info</p>
  <form id="table-form">
    <div>
      <label for="text-name"> Name: </label>
      <input type="text" id="text-name" name="name" required />
    </div>
    <div>
      <label for="number-age"> Age: </label>
      <input type="number" id="number-age" name="age" required />
    </div>
    <div>
      <label for="select-role"> Role: </label>
      <select name="" id="select-rol">
        <option value="" disabled selected>Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>
    </div>
    <input type="submit" value="Submit Form" />
  </form>

  <p>Search Table</p>
  <input type="text" id="search-input" placeholder="Search by name" />
</div>
```

### CSS

```css
#table-form input {
  margin: 10px auto;
}

#dynamic-table,
#dynamic-table th,
#dynamic-table td {
  text-align: center;
  width: 100%;
  border: 1px solid black;
}

#search-input {
  margin-bottom: 10px;
}
```

### JS

```js
// Create a table dynamically and add it to the DOM
const tableContainerEl = document.getElementById('dynamic-table-container');
const tableElem = createEl('table');
tableElem.setAttribute('id', 'dynamic-table');
tableElem.classList.add('hidden');
const tableHTML = `
<thead>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Action</th>
        </thead>
        <tbody></tbody>
`;
tableElem.insertAdjacentHTML('afterbegin', tableHTML);
const tableBodyElem = tableElem.querySelector('tbody');

tableContainerEl.appendChild(tableElem);

// Get Form Elements
const formElem = document.getElementById('table-form');
const formSubmitBtn = document.querySelector(
  '#table-form input[type="submit"]'
);

// Add event listener to the form submit button to get form data and added it to the table
formSubmitBtn.addEventListener('click', e => {
  e.preventDefault();

  const formData = [...formElem.children].reduce((acc, child) => {
    if (child !== formElem.lastElementChild) {
      if (child.children[1].type === 'select-one') {
        acc[child.children[1].tagName.toLowerCase()] = child.children[1].value;
      } else {
        acc[child.children[1].type] = child.children[1].value;
      }
    }
    return acc;
  }, {});

  // Create new row and cells in the table
  const newRow = tableBodyElem.insertRow();
  Object.values(formData).forEach(value => {
    const newCell = newRow.insertCell();
    newCell.textContent = value;
  });
  // Create a delete button cell
  const deleteCell = newRow.insertCell();
  const deleteBtn = createEl('button');
  deleteBtn.textContent = 'Delete';
  // Add event listener to the delete button to remove the row
  deleteBtn.addEventListener('click', () => {
    newRow.remove();
    // Hide the table if there are no rows left
    if (tableBodyElem.children.length === 0) {
      tableElem.classList.add('hidden');
    }
  });
  deleteCell.appendChild(deleteBtn);

  // Show the table if it was hidden
  if (tableBodyElem.children.length === 1) {
    tableElem.classList.remove('hidden');
  }

  // Reset form fields
  formElem.reset();
});

const tableSearchInput = document.getElementById('search-input');
tableSearchInput.addEventListener('input', () => {
  const searchTerm = tableSearchInput.value.toLowerCase();
  const rows = tableBodyElem.querySelectorAll('tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const rowText = Array.from(cells)
      .map(cell => cell.textContent.toLowerCase())
      .join(' ');
    if (rowText.includes(searchTerm)) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });
});
```

## 3. Theme Switcher with Persistence

- Toggle theme using a button or switch.
- Persist the theme in localStorage and apply on page load.
- Change background and text color based on the theme.

### HTML

```html
<button id="theme-toggle">🌙</button>
```

### CSS

```css
#theme-toggle {
  position: absolute;
  top: 0;
  right: 0;
}
.dark-theme {
  background-color: #333;
  color: #fff;
}
.light-theme {
  background-color: #fff;
  color: #000;
}
```

### JS

```js
function selectThemeIcon() {
  if (document.body.classList.contains('dark-theme')) {
    btnThemeToggleEl.textContent = '☀️';
  } else {
    btnThemeToggleEl.textContent = '🌙';
  }
}

const btnThemeToggleEl = document.getElementById('theme-toggle');
// Set initial theme based on localStorage or default to light theme
document.body.classList.add(localStorage.getItem('theme') || 'light-theme');
selectThemeIcon();
btnThemeToggleEl.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark-theme')
      ? 'dark-theme'
      : 'light-theme'
  );
  selectThemeIcon();
});
```
