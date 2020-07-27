const createSelectedMode = (user) => {
    const selectedMode = document.createElement('div');
    selectedMode.classList.add('selected-mode');
    return selectedMode;
}

export default createSelectedMode;
