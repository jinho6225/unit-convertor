document.addEventListener(
  'input',
  function (event) {
    // Only run on our select menu
    if (event.target.id !== 'unitConvertor') return;
  },
  false
);

let map = {
  kg: 'lbs',
  lbs: 'kg',
  cm: 'inch',
  inch: 'cm',
};

let btn = document.querySelector('.subBtn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  let unit = document.querySelector('#unitConvertor').value;
  let number = document.querySelector('.enteredNum').value;
  if (map[unit]) {
    if (unit === 'kg') {
      number = number * 2.20462;
    } else if (unit === 'lbs') {
      number = number * 0.453592;
    } else if (unit === 'cm') {
      number = number * 0.393701;
    } else if (unit === 'inch') {
      number = number * 2.54;
    }
  }

  document.querySelector('#resultTarget').innerText = `${number.toFixed(2)}`;
  document.querySelector('.matchingUnit').innerText = `${map[unit]}`;
});
