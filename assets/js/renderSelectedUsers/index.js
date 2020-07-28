const createUserItem = ({firstName, lastName}) => {
    const li = document.createElement('li');
    li.append(document.createTextNode(`${firstName} ${lastName},`.trim()));
    return li;
};

const removeUserItem = ({user: {firstName, lastName}, userList}) => {
    for (const li of userList.childNodes) {
        if (li.innerHTML === `${firstName} ${lastName},`.trim()) {
            li.remove();
        }
    }
};

const renderSelectedUsers = (user) => {
    const {isSelected, isDeleted} = user;
    const userList = document.querySelector('.user-list');
    if (isSelected) {
        if (isDeleted) {
            removeUserItem({user, userList});
        } else {
            userList.append(createUserItem(user));
        }
    } else {
        removeUserItem({user, userList});
    }
};

export default renderSelectedUsers;
