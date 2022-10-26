let button = document.createElement('button');
button.innerHTML = 'Do Something Different';
document.body.append(button);
button.style.display = 'block';
button.style.margin = '0 auto';
button.style.fontWeight = 'bold';


//store list items into array
//create click event to randomize 
function pickTask() {
    let items = [...document.getElementsByTagName('li')].map(li => li.innerText);
    let randomItem = items[Math.floor(Math.random() * items.length)];
    console.log(randomItem);
    return randomItem;
// highlight results
    function results(randomItem) {
        li.style.backgroundColor = 'yellow';
    }; results(randomItem);
};
button.addEventListener('click', pickTask);


