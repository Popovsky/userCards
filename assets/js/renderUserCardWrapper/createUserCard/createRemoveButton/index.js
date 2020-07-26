const createRemoveButton = (user) => {
    const removeButton = document.createElement('span');
    removeButton.classList.add('fa', 'fa-times');
    return removeButton;
}

export default createRemoveButton;
