import createUserImage from "./createUserImage";
import createUserInitials from "./createUserInitials";
import createSpinner from "./spinner";
import stringToHexColor from "../../../stringToHexColor";

const getGenderName = (isMale) => {
    switch (isMale) {
        case true:
            return 'male';
        case false:
            return 'female';
        default:
            return 'unknown';
    }
};

const createUserImageWrapper = (user) => {
    const {
        isMale,
        firstName,
        lastName,
        id,
    } = user;
    const userImageWrapper = document.createElement('div');
    userImageWrapper.classList.add('user-image-wrapper', getGenderName(isMale), 'flex-center');
    userImageWrapper.style.backgroundColor = stringToHexColor(`${id}${firstName}${lastName}` || 'default');
    userImageWrapper.append(createUserInitials(user));
    userImageWrapper.append(createSpinner());
    const userImage = createUserImage(user);
    userImage.addEventListener('load', event => {
        userImageWrapper.append(userImage);
    });
    return userImageWrapper;
};

export default createUserImageWrapper;
