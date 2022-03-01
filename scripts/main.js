import Splitting from "splitting";


document.addEventListener('DOMContentLoaded', () => {
  const nabei = document.getElementById('nabei');
  const titleStart = document.getElementById('title-start');
  const titleEnd = document.getElementById('title-end');
  let display = () => getSingleElement('nabei-text');
  const container = document.getElementById('text');
  Splitting({ target: nabei, by: 'chars' })
  Splitting({ target: titleStart, by: 'words' })
  Splitting({ target: titleEnd, by: 'chars' })
  Splitting({ target: display() });
  document.getElementById('title-middle').classList.add('animate');
  document.getElementById('more').addEventListener('click', () => {
    const newText = document.createElement('p');
    newText.innerText = randomItem(nabeisms);

    Splitting({ target: newText });
    newText.classList.add('nabei-text');
    container.removeChild(display());
    container.appendChild(newText);
    newText.classList.add('sliding');
  })
});
const getSingleElement = (className) => document.getElementsByClassName(className)[0];
const randomItem = (arr) => arr[arr.length * Math.random() | 0];
const nabeisms = [
  'when the bus driver see you running for it but he still drives off',
  'when you finally match with someone on tinder and it is your sibling',
  'when the grab driver cancels on you and you are literally 1 meter away',
  'when you friend is late and he says he is on the way, but he is really on the way out of his bed',
  'when you have the winning 4d numbers, but you bought the wrong date',
  'when it rains on your wedding day',
  'when a fire station burns down',
  'when a member of PETA wears leather shoes to protest at a slaughterhouse',
  'when your pilot has a fear of heights',
  'when someone complains about you complaining',
  "when the cobbler's kids can't afford shoes"
]