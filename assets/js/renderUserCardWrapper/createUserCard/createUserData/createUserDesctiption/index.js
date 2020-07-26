const createUserDescription = (user) => {
    const userDescription = document.createElement('p');
    userDescription.classList.add('user-description');
    userDescription.append(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illum in ipsum itaque magni possimus reiciendis sunt vel! Accusamus, ad dolores eos minus nam officiis qui quisquam tempore. Deserunt, reprehenderit?'));
    return userDescription;
}

export default createUserDescription;
