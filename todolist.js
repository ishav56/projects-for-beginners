const inputshow = document.querySelector('#inputbox');
const click = document.querySelector('#buttons');
const add = document.getElementById('main3');
const deletes = document.getElementById('delete');


click.addEventListener('click', function () {
    
        if (inputshow.value === ' ') {
            alert('enter some value');
        }
        else {
            const create = document.createElement('li')
            create.style.fontSize = "30px";
            create.innerHTML = inputshow.value
            add.appendChild(create)
            inputshow.value = ' ';

            let button = document.createElement("button");
            let txt = document.createTextNode("\u00D7");
            button.className = "close";
            button.appendChild(txt);
            create.appendChild(button);

        
        button.addEventListener('click', function () {

            if(create.innerHTML='')
                {
                    alert('your message was delete');
                }
                
        });
    }
})




