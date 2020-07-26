const createUserContactItem = (url) => {
    const iconObj = new URL(url);
    const arr = iconObj.host.split('.');
    const iconName = arr[arr.length - 2];

    const userContactItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', url)
    const icon = document.createElement('span');
    icon.classList.add('icon', `icon-${iconName}`);
    link.append(icon)
    userContactItem.append(link);

    return userContactItem;
}

export default createUserContactItem;
