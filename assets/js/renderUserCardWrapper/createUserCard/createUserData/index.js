import createUserName from "./createUserName";
import createUserAge from "./createUserAge";
import createUserDescription from "./createUserDesctiption";

const createUserData = (user) => {
    const userData = document.createElement('div');
    userData.classList.add('user-data');
    userData.append(createUserName(user));
    userData.append(createUserAge(user));
    userData.append(createUserDescription(user));
    return userData;
}

export default createUserData;
