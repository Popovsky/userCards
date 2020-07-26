const createCheckButton = (user) => {
    const checkButton = document.createElement('span');
    checkButton.classList.add('fa', 'fa-circle-o');
    return checkButton;
}

export default createCheckButton;
