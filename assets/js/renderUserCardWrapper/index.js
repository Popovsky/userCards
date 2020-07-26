import createUserCard from "./createUserCard";

const renderUserCardWrapper = (user) => {
    const cardsWrapper = document.querySelector('.user-cards-wrapper');
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('user-card-wrapper');
    cardWrapper.append(createUserCard(user));
    cardsWrapper.append(cardWrapper);
}

export default renderUserCardWrapper;
