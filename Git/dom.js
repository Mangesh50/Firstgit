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
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'GoodBye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';

//items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length;i++)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// var li = document.getElementsByClassName('list-group-item');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';

// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length;i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// var header  = document.querySelector('#min-header');
// header.getElementsByClassName.borderbotto = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';