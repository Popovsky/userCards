const createUserInitials = (user) => {
    const {
        firstName,
        lastName,
    } = user;
    const userInitials = document.createElement('span');
    userInitials.classList.add('user-initials');
    userInitials.append(document.createTextNode(`${firstName[0] ?? ''}${lastName[0] ?? ''}`));
    return userInitials;
}

export default createUserInitials;
