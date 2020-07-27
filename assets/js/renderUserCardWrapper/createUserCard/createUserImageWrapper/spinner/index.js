const createSpinner = () => {
    const spinner = document.createElement('div');
    spinner.classList.add('loader');
    return spinner;
};

export default createSpinner;
