//*************************ADD ITEMS TO LIST
let ul = document.querySelector('ul');
let btn = document.getElementById('add-btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    let addInput = document.getElementById('add-input');

    if (addInput.value != '') {

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


















