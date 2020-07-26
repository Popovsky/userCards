const createUserName = (user) => {
    const {
        firstName,
        lastName,
    } = user;
    const userName = document.createElement('h2');
    userName.classList.add('user-name');
    userName.append(document.createTextNode(`${firstName} ${lastName}`.trim()))
    return userName;
}

export default createUserName;
