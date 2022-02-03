let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem)
//delete event
itemList.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)

//add item function
function addItem(e){
    e.preventDefault();
   
    // get value of input
    let newItem = document.getElementById('item').value;

    // creat new li element
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //create a delete button element
    let deleteBtn = document.createElement('button');

    //add classes
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);

}


//remove item function
function removeItem(e){
if(e.target.classList.contains('delete')){
if(confirm('Are You Sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
}
}
}

//function filter Items
function filterItems(e){
    //comvert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //converting html collection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });

}
