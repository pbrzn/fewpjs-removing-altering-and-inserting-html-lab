// Write your code here!
const element = document.querySelector('main#main');
element.remove();

const h1 = document.createElement('h1');
h1.setAttribute('id', 'victory');
document.body.appendChild(h1);
const newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = '\"YOUR-NAME is the champion\"';
