// var code =
//   'var bodyText = document.querySelector("body").innerText;alert(bodyText);';
// chrome.tabs.executeScript({ code: code });

// let btn = document.querySelector('.subBtn');
// btn.addEventListener('click', () => {
//   let unit = document.querySelector('#unitConvertor');
//   document.querySelector('#resultTarget').innerText = `${number}`;
// });

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
    alert(map[unit]);
  }

  document.querySelector('#resultTarget').innerText = `${number}`;
  document.querySelector('.matchingUnit').innerText = `${map[unit]}`;
});
