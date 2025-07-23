const greeting = document.getElementById('greeting');
const btn = document.getElementById('changeText');

btn.addEventListener('click', () => {
  if (greeting.innerText === 'Hello, World!') {
    greeting.innerText = 'You clicked the button!';
  } else {
    greeting.innerText = 'Hello, World!';
  }
});