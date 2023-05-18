//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].textContent = 'Hello 2';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';

// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length;i++)
// {
//     li[i].style.fontWeight = 'bold';
// }
//Query Selector //
// var header  = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'None';

//QuerySelectorall//
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var items = document.querySelectorAll('li:nth-child(2)');
// items[0].style.color='green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// //var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0;i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
//     //even[i].style.backgroundColor = '#ccc';
// }

//Traversing the DOM//
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
//console.log(itemList.lastChild);
//firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

//create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className='hello';

//Add id
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


//add next text
//create a div1
var newDiv1 = document.createElement('div');

//Add class
newDiv1.className='hello';

//Add id
newDiv1.id = 'hello1';

//Add attr
newDiv1.setAttribute('title','Hello Div');

var newDivText1 = document.createTextNode('Hello World');

//Add text to div
newDiv1.appendChild(newDivText1);

console.log(newDiv1);

newDiv1.style.fontSize = '30px';

itemList.insertBefore(newDiv1,itemList.childNodes[0]);