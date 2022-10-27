let button = document.createElement('button');
button.innerHTML = 'Do Something Different';
document.body.append(button);
button.style.display = 'block';
button.style.margin = '0 auto';
button.style.fontWeight = '600';
button.style.borderRadius = '25px';
button.style.marginTop = '20px';


//store list items into array
//create click event to randomize 
function pickTask() {
    let selected = document.querySelector('.selected');
    if(selected) {
        selected.classList.remove('selected')
    }
    let items = [...document.getElementsByClassName('back')];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    console.log(randomItem);
    randomItem.classList.add('selected')
    return randomItem;
// highlight results
    function results(randomItem) {
        li.style.backgroundColor = 'yellow';
    }; results(randomItem);
};
button.addEventListener('click', pickTask);


