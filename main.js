



const heading = document.querySelector('#title');
heading.textContent = 'My Web Development Skills';

const firstParagraph = document.querySelector('.info');

const paragraphs = document.querySelectorAll('.info');

const topicList = document.querySelector('#topics');
const firstTopic = topicList.firstElementChild;
const secondTopic = firstTopic.nextElementSibling;
const thirdTopic = secondTopic.nextElementSibling;

// add a new element 

const newTopic = document.createElement('li');
newTopic.textContent = 'DOM manipulation';
topicList.appendChild(newTopic);

// remove an element

const removeTopic = firstTopic.nextElementSibling;
removeTopic.remove()

// css features
secondTopic.style.color = 'red'
topicList.firstElementChild.style.color = 'blue';
topicList.lastElementChild.style.color = 'green'

console.log(topicList);

