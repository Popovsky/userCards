const getGenderName = (isMale) => {
    switch (isMale) {
        case true:
            return 'male';
        case false:
            return 'female';
        default:
            return 'unknown';
    }
}

const createUserImage = (user) => {
    const {
        profilePicture,
        firstName,
        lastName,
        isMale,
    } = user;
    const userImage = document.createElement('img');
    userImage.classList.add('user-image', getGenderName(isMale));
    userImage.setAttribute('src', profilePicture);
    userImage.setAttribute('alt', `${firstName} ${lastName}`.trim());
    return userImage;
}

export default createUserImage;
