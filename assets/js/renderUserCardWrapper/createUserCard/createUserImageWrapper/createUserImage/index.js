const createUserImage = (user) => {
    const {
        profilePicture,
        firstName,
        lastName,
    } = user;
    const userImage = document.createElement('img');
    userImage.classList.add('user-image');
    userImage.setAttribute('src', profilePicture);
    userImage.setAttribute('alt', `${firstName} ${lastName}`.trim());
    return userImage;
}

export default createUserImage;
