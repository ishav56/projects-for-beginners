let count = 0;
let set;

let zero = document.querySelector('#zero')
let btn = document.querySelectorAll('button');

let button = Array.from(btn);

button.forEach((btu) => {
    btu.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'INCREASE') {
            count++;
            zero.innerHTML = count;
            if (zero.innerHTML == 10) {
                zero.style.display = 'none';
                alert('your countdown is over');
            }
        }
        else if (e.target.innerHTML === 'DECREASE') {
            count--;
            zero.innerHTML = count;
        }
        else if (e.target.innerHTML === 'RESET') {
            count = 0;
            zero.innerHTML = count;
        }
        if (count < 0) {
            zero.style.color = "red";
        }
        else if (count > 0) {
            zero.style.color = "green";
        }
        else if (count === 0) {
            zero.style.color = "black";
        }


    })
})

