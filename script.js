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
    alert(event.target.value);
  },
  false
);
