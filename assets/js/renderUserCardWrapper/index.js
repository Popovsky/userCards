import createSelectedMode from "./createSelectedMode";
import createUserCard from "./createUserCard";


/**
 *
 * @param user
 */
const renderUserCardWrapper = (user) => {
    const cardsWrapper = document.querySelector('.user-cards-wrapper');
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('user-card-wrapper');
    cardWrapper.append(createSelectedMode(user));
    cardWrapper.append(createUserCard({user, cardWrapper}));
    cardsWrapper.append(cardWrapper);
}

export default renderUserCardWrapper;
