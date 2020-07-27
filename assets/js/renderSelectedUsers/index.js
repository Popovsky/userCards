const createUserItem = (user) => {
    const li = document.createElement('li');
    li.append(document.createTextNode(`${user.firstName} ${user.lastName},`.trim()));
    return li;
};

const removeUserItem = ({user, userList}) => {
    for (const li of userList.childNodes) {
        if (li.innerHTML === `${user.firstName} ${user.lastName},`.trim()) {
            li.remove();
        }
    }
};

const renderSelectedUsers = (user) => {
    const userList = document.querySelector('.user-list');
    if (user.isSelected) {
        if (user.isDeleted) {
            removeUserItem({user, userList});
        } else {
            userList.append(createUserItem(user));
        }
    } else {
        removeUserItem({user, userList});
    }
};

export default renderSelectedUsers;
