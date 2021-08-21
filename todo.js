// selecting button
var btn=document.getElementById('btn');
console.log(btn);

// adding Event
btn.addEventListener('click',dosomthing)
 //to do function
 function dosomthing(e)
{
e.preventDefault();
// selecting inputText from entered input
var inputText=document.getElementById('item-text')
 // creating new list items
 var li=document.createElement('li');
 li.className='list-group-item'

 //picking my parent element
 var newItem=document.getElementById('items')

 //create span tag
  var span=document.createElement('span')
 span.textContent=inputText.value

 // creating delete button
 var delButton=document.createElement('button')
delButton.className='delete'
delButton.textContent='X'
delButton.style.marginLeft=200;


//appending element to


li.appendChild(span)
li.appendChild(delButton)
newItem.appendChild(li)
}