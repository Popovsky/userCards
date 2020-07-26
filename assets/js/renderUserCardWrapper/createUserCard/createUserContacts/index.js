import createUserContactItem from "./createUserContactItem";

const createUserContacts = (user) => {
    const {contacts} = user;
    const userContacts = document.createElement('ul');
    userContacts.classList.add('user-contacts');
    for (const item of contacts) {
        userContacts.append(createUserContactItem(item));
    }
    return userContacts;
}

export default createUserContacts;
