var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem)
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    var Description = document.getElementById('description').value;

    // Create new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(Description));

    //Create delete button element 
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    // Add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-sm float-right editBtn';
    
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('EDIT'));

    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e)
{
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });
}

//local Storage
//localStorage.setItem('username','Mahesh')
//localStorage.getItem('username')

let myObj = {
    name : "Mahesh",
    age : 27
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deserialized);