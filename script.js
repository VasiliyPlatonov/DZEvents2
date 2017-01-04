let btnMakeDiv = document.getElementById('makeDiv');

btnMakeDiv.addEventListener('click', function makeDiv(e) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.style.backgroundColor = getRandomColor();
    newDiv.style.height = getRandomInt(250, 30) + 'px';
    newDiv.style.width = getRandomInt(250, 30) + 'px';
    newDiv.style.top = getRandomInt(document.documentElement.clientHeight, 5) + 'px';
    newDiv.style.left = getRandomInt(document.documentElement.clientWidth, 5) + 'px';
    document.body.appendChild(newDiv);
});




function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += getRandomInt(16, 0).toString(16);
    }
    return color;
}

// TODO: разобраться с opacity
// let timer = setInterval(() => {
//     newDiv.style.opacity += 1;
// }, 10);
//
// if (newDiv.style.opacity > 1) {
//     clearInterval(timer);
//     newDiv.style.opacity = 1;
// }
// });
