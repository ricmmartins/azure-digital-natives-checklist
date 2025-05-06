document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('li.task-list-item input[type="checkbox"]')
    .forEach((cb, idx) => {
      cb.removeAttribute('disabled');
      const key = window.location.pathname + '::' + idx;
      const saved = localStorage.getItem(key);
      if (saved !== null) cb.checked = saved === 'true';
      cb.addEventListener('change', () => {
        localStorage.setItem(key, cb.checked);
      });
    });
});
