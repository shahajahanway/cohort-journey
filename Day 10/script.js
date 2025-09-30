
  const toggle = document.querySelector('.nav-toggle'); // Toggle button select
  const menu = document.getElementById('primary-menu'); // Menu select

  toggle.addEventListener('click', () => { // Click event
    const expanded = toggle.getAttribute('aria-expanded') === 'true'; // Check open/close state
    toggle.setAttribute('aria-expanded', !expanded); // Update ARIA attribute for accessibility
    menu.style.display = expanded ? 'none' : 'flex'; // Show/Hide menu
  });