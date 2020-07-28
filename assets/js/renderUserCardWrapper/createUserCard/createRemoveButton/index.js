import renderSelectedUsers from "../../../renderSelectedUsers";

const createRemoveButton = ({user, cardWrapper}) => {
    const removeButton = document.createElement('span');
    removeButton.classList.add('fa', 'fa-times');
    removeButton.addEventListener('click', event => {
        cardWrapper.remove();
        user.isDeleted = true;
        renderSelectedUsers(user);
    });
    cardWrapper.addEventListener('mouseenter', event => {
        removeButton.style.color = 'red';
    });
    cardWrapper.addEventListener('mouseleave', event => {
        removeButton.style.color = 'transparent';
    });
    return removeButton;
}

export default createRemoveButton;
