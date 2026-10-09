'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '展开导航' : '收起导航');
  navLinks.classList.toggle('open', !isOpen);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '展开导航');
  navLinks.classList.remove('open');
}));

document.querySelectorAll('[role="tablist"]').forEach(tablist => {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  function activate(activeTab) {
    tabs.forEach(tab => {
      const selected = tab === activeTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft') target = tabs[(index + tabs.length - 1) % tabs.length];
      if (event.key === 'Home') target = tabs[0];
      if (event.key === 'End') target = tabs[tabs.length - 1];
      if (target) { event.preventDefault(); activate(target); target.focus(); }
    });
  });
});

const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
document.querySelectorAll('[data-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.zoom;
    dialogImage.alt = button.querySelector('img').alt;
    document.getElementById('image-dialog-caption').textContent = button.dataset.caption;
    dialog.showModal();
  });
});
document.getElementById('close-image').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

const copyButton = document.getElementById('copy-citation');
const toast = document.getElementById('toast');
let toastTimer;
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex').textContent;
  try {
    await navigator.clipboard.writeText(citation);
    toast.textContent = 'BibTeX 已复制';
    copyButton.textContent = '已复制';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges(); selection.addRange(range);
    toast.textContent = '引用已选中，请按 Ctrl+C 或 ⌘C 复制';
  }
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible'); copyButton.textContent = '复制引用';
  }, 3000);
});
