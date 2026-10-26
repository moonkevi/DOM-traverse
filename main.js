let output;

const parent= document.querySelector('.parent');
output = parent.children[1].innerText='child two';
output = parent.children[1].style.color='red';

parent.firstElementChild.innerText = 'child one';
parent.firstElementChild.style.color = 'green';

parent.lastElementChild.textContent = 'child three';
parent.lastElementChild.style.color = 'purple';
  
// parent element

const show = document.querySelector('.child');
output= show.parentElement;
output = show.parentElement.style.border = '1px solid blue'
output = show.parentElement.style.padding = '10px'
output = show.parentElement.style.width = '200px'

// siblings element

const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem;
// output = secondItem.nextElementSibling.style.width = '40px'
output = secondItem.nextElementSibling.innerText;
output = secondItem.nextElementSibling.style.background = 'beige'

console.dir(output)