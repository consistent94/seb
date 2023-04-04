const toggleSwitch = document.querySelector('#toggle-dark-mode');
toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
