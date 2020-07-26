import createSelectedMode from "./createSelectedMode";
import createUserCard from "./createUserCard";

const renderUserCardWrapper = (user) => {
    const cardsWrapper = document.querySelector('.user-cards-wrapper');
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('user-card-wrapper');
    cardWrapper.append(createSelectedMode(user));
    cardWrapper.append(createUserCard(user));
    cardsWrapper.append(cardWrapper);

    cardWrapper.addEventListener('mouseenter', event => {
        event.target.childNodes[1].childNodes[0].style.color = '#1e90ff';
    });
    cardWrapper.addEventListener('mouseleave', event => {
        event.target.childNodes[1].childNodes[0].style.color = 'transparent';
    });

    cardWrapper.addEventListener('mouseenter', event => {
        event.target.childNodes[1].childNodes[1].style.color = 'red';
    });
    cardWrapper.addEventListener('mouseleave', event => {
        event.target.childNodes[1].childNodes[1].style.color = 'transparent';
    });
}

export default renderUserCardWrapper;
