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
