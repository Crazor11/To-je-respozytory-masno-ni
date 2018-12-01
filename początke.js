let x = true;
function onButtonClicked() {
    if (x) {
        (document.body.style.backgroundColor = 'red');
    }
    else {
        (document.body.style.backgroundColor = 'green');

    }
    x = !x;
    const greetingButtonsArray = document.querySelectorAll('.greeting');
    for (item of greetingButtonsArray) {
        item.addEventListener('click', onButtonClicked);
    }
}