//Single element

const section2 = document.getElementById('about');

console.log(section2);

const section1 = document.querySelector('.container');

console.log(section1);

//Multiple element selector

//Mostly use querySelectors

const selector1 = document.querySelectorAll('.box');

console.log(selector1);

const selector2 = document.getElementsByClassName('box');

console.log(selector2);

//Editing current html

const ul = document.querySelector('.container');

//ul.firstElementChild.textContent = 'Noodles';

//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.button1');

/*btn.addEventListener('click', (e) => {
	//e.preventDefault(); to prevent flash 
	document.querySelector('#my-form').style.background = 'blue';
}) */

const myForm = document.querySelector('#my-form');
const firstinput = document.querySelector('.first');
const lastinput = document.querySelector('.last');
const emailinput = document.querySelector('.email');
const msg = document.querySelector('.message');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){



	if(firstinput.value === '' || lastinput.value === '' || emailinput.value === '' || msg.value === '')
	{
		msg.innerHTML = "Please enter all fields";
	}
	else
	{
		console.log('success');
	}
}