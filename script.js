//*************************ADD NOTE TO LIST */
const ul = document.querySelector('ul');
const btn = document.getElementById('add-btn');



btn.addEventListener('click', function (e) {
    e.preventDefault();

    let addInput = document.getElementById('add-input');

    if (addInput.value !== '') {

        let li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        addInput.value = '';
    }
});

//******************************EDIT NOTES */

ul.addEventListener('click', function (e) {
    //When the edit button is pressed
    if (e.target.classList[1] === 'fa-pencil-square-o') {

        let parentPar = e.target.parentNode;
        let note = parentPar.previousElementSibling;
        let input = parentPar.nextElementSibling;

        parentPar.style.display = 'none';
        input.style.display = 'block';
        input.value = note.textContent + " ";

        input.addEventListener('keypress', function (e) {

            if (e.keyCode === 13) {
                //Check if input is empty or only has spaces
                if (input.value.replace(/\s/g, '').length > 0) {
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                } else {
                    let li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });
        //When the Delete button is pressed
    } else if (e.target.classList[1] === 'fa-times') {
        let list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
});

//******************************HIDE ITEMS */

let hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function (e) {
    let label = document.querySelector('label');
    if (hideItem.checked) {
        ul.style.display = 'none';
        label.textContent = 'Unhide notes';
    } else {
        ul.style.display = 'block';
        label.textContent = 'Hide notes';
    }
});












