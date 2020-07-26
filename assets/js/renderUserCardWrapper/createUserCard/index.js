import createCheckButton from "./createCheckButton";
import createRemoveButton from "./createRemoveButton";
import createUserImageWrapper from "./createUserImageWrapper";
import createUserData from "./createUserData";
import createUserContacts from "./createUserContacts";

const getSeasonBackground = (str) => {
    const [,month] = str.split(' ');
    switch (month) {
        case 'December':
        case 'January':
        case 'February':
            return 'bg-winter';
        case 'March':
        case 'April':
        case 'May':
            return 'bg-spring';
        case 'June':
        case 'July':
        case 'August':
            return 'bg-summer';
        case 'September':
        case 'October':
        case 'November':
            return 'bg-spring';
        default:
            return 'bg-default';
    }
}

const createUserCard = (user) => {
    const {birthday} = user;
    const userCard = document.createElement('article');
    userCard.classList.add('user-card', getSeasonBackground(birthday));
    userCard.append(createCheckButton(user));
    userCard.append(createRemoveButton(user));
    userCard.append(createUserImageWrapper(user));
    userCard.append(createUserData(user));
    userCard.append(createUserContacts(user));
    return userCard;
}

export default createUserCard;
