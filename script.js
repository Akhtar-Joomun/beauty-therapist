const ham = document.querySelector('.ham');
const header2 = document.querySelector('.header2');
const mob = document.querySelector('.mob');

function display() {
  header2.style.display
}

function clickFunction() {
  const para = document.getElementById('toggle-icon');
  para.classList.toggle('rotate-icon');
  if (header2.style.display !== 'flex') {
    header2.style.display = 'flex';
    mob.style.backgroundColor = '#fff';
  } else {
    header2.style.display = 'none';
    mob.style.backgroundColor = 'white';
  }
}


ham.addEventListener('click', clickFunction);

