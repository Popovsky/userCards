import createUserImage from "./createUserImage";

const createUserImageWrapper = (user) => {
    const userImageWrapper = document.createElement('div');
    userImageWrapper.classList.add('user-image-wrapper');
    userImageWrapper.append(createUserImage(user));
    return userImageWrapper;
}

export default createUserImageWrapper;
