const createCheckButton = (user) => {
    const checkButton = document.createElement('span');
    checkButton.classList.add('fa', 'fa-circle-o');
    checkButton.addEventListener('click', event => {
        switch (event.target.classList[1]) {
            case 'fa-circle-o':
                event.target.classList.remove('fa-circle-o');
                event.target.classList.add('fa-check-circle');
                event.target.parentNode.parentNode.childNodes[0].classList.add('checked');
                user.isSelected = true;
                break;
            case 'fa-check-circle':
                event.target.classList.remove('fa-check-circle');
                event.target.classList.add('fa-circle-o');
                event.target.parentNode.parentNode.childNodes[0].classList.remove('checked');
                user.isSelected = false;
        }
        // console.dir(event.target.parentNode.parentNode.childNodes[0]);
    });
    return checkButton;
}

export default createCheckButton;
