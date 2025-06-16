# Day 19 Tasks

## 1. Create a Dynamic Tabbed Interface

Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content. It mimics real-world use like dashboards, profile settings, or pricing plans.

### Functional Requirements

- ✅ Clicking a tab title shows the corresponding content.
- ✅ Only one tab content is visible at a time.
- ✅ The active tab should have a visual highlight.
- ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.
- ✅ Use event delegation to handle tab clicks.
- ✅ Use classList to manage active state.
- ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).
- ✅ Use stopPropagation() if needed during advanced control.

### HTML

```html
<div class="tabs">
  <div class="tabs__header">
    <button class="tab__button active" data-tab="tab1">Tab 1</button>
    <button class="tab__button" data-tab="tab2">Tab 2</button>
    <button class="tab__button" data-tab="tab3">Tab 3</button>
  </div>
  <div class="tabs__content">
    <div class="content active" id="tab1">
      <h2>Content for Tab 1</h2>
      <p>This is the content of the first tab.</p>
    </div>
    <div class="content" id="tab2">
      <h2>Content for Tab 2</h2>
      <p>This is the content of the second tab.</p>
    </div>
    <div class="content" id="tab3">
      <h2>Content for Tab 3</h2>
      <p>This is the content of the third tab.</p>
    </div>
  </div>
</div>
```

### CSS

```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.tabs {
  background-color: antiquewhite;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  max-width: 500px;
}
.tabs__header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.tabs__header button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.tabs__header button:hover {
  background-color: #45a049;
}

.tabs__header button.active {
  background-color: #a3940d;
}

.tabs__content .content {
  display: none;
}
.tabs__content .content.active {
  display: block;
}
```

### JS

```js
'use strict';

// Activating Tab functionality
function activateTab(tabElement) {
  const activeTab = document.querySelector('.tab__button.active');
  const activeContent = document.querySelector('.content.active');

  if (activeTab) activeTab.classList.remove('active');
  if (activeContent) activeContent.classList.remove('active');

  tabElement.classList.add('active');
  const contentId = tabElement.getAttribute('data-tab');
  const newContent = document.getElementById(contentId);

  if (newContent) {
    newContent.classList.add('active');
  }
  // Dispatch a custom event when the tab is switched
  const customTabEvents = new CustomEvent('tabSwitched', {
    detail: {
      message: 'Tab switched to ',
      tabName: tabElement.textContent,
    },
  });
  document.dispatchEvent(customTabEvents);
}

const tabsEl = document.querySelector('.tabs');

tabsEl.addEventListener('click', e => {
  if (e.target.classList.contains('tab__button')) {
    activateTab(e.target);
  }
});

function switchTab(tabNumber) {
  const newTab = document.querySelector(
    `.tab__button[data-tab="tab${tabNumber}"]`
  );
  if (newTab) {
    activateTab(newTab);
  }
}

document.addEventListener('keydown', e => {
  if (e.key === '1') switchTab(1);
  else if (e.key === '2') switchTab(2);
  else if (e.key === '3') switchTab(3);
});

document.addEventListener('tabSwitched', e => {
  console.log(e.detail.message + e.detail.tabName);
});
```
