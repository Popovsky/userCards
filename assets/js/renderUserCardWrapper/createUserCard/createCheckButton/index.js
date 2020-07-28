import renderSelectedUsers from "../../../renderSelectedUsers";

const createCheckButton = ({user, cardWrapper}) => {
    const checkButton = document.createElement('span');
    checkButton.classList.add('fa', 'fa-circle-o');
    checkButton.addEventListener('click', ({target}) => {
        switch (target.classList[1]) {
            case 'fa-circle-o':
                target.classList.remove('fa-circle-o');
                target.classList.add('fa-check-circle');
                cardWrapper.childNodes[0].classList.add('checked');
                user.isSelected = true;
                renderSelectedUsers(user);
                break;
            case 'fa-check-circle':
                target.classList.remove('fa-check-circle');
                target.classList.add('fa-circle-o');
                cardWrapper.childNodes[0].classList.remove('checked');
                user.isSelected = false;
                renderSelectedUsers(user);
        }
    });
    cardWrapper.addEventListener('mouseenter', event => {
        checkButton.style.color = '#1e90ff';
    });
    cardWrapper.addEventListener('mouseleave', event => {
        checkButton.style.color = 'transparent';
    });
    return checkButton;
}

export default createCheckButton;
