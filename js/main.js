// document.addEventListener('DOMContentLoaded', () => {
const messageElem = document.querySelector('.message');
const btnColorElem = document.querySelector('.btn-color');
const btnTextColorElem = document.querySelector('.btn-text-color');

messageElem.style.color = 'red';
messageElem.style.backgroundColor = 'lightblue';
messageElem.style.width = '20rem';
messageElem.style.padding = '1rem';
messageElem.style.borderRadius = '.5rem';
messageElem.style.border = '2px solid black';
messageElem.style.boxShadow = '5px 5px 1px #ff0000, 10px 10px 1px #0000ff';
messageElem.style.fontSize = "3rem";
//messageElem.innerText = "New <b>Message</b>";
messageElem.innerHTML = "Hello <b> World </b> ";

btnColorElem.addEventListener("click", () => {
	btnColorElem.style.backgroundColor = "red";
	btnColorElem.style.color = "yellow";
});

btnTextColorElem.addEventListener("click", () => {
	messageElem.style.color = "blue";
});
// });