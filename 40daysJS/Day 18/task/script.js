'use strict';

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
  // formEl.appendChild(divEl);
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
////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////
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
