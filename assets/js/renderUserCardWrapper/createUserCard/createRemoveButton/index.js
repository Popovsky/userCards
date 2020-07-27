import renderSelectedUsers from "../../../renderSelectedUsers";

const createRemoveButton = (user) => {
    const removeButton = document.createElement('span');
    removeButton.classList.add('fa', 'fa-times');
    removeButton.addEventListener('click', event => {
        event.target.parentNode.parentNode.remove();
        user.isDeleted = true;
        renderSelectedUsers(user);
    });
    return removeButton;
}

export default createRemoveButton;
