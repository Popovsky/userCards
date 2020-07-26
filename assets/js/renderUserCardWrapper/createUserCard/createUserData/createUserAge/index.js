const getUserFullYear = (str) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const [userDay, userMonth, userYear] = str.split(' ');
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const fullUserYears = currentYear - userYear;
    for (let i = 0; i < months.length; i++) {
        if (userMonth === months[i]) {
            if (i > currentMonth) {
                return fullUserYears - 1 ?? '';
            }
            if (i < currentMonth) {
                return fullUserYears ?? '';
            }
            if (i === currentMonth) {
                if (userDay <= currentDay) {
                    return fullUserYears ?? '';
                } else return fullUserYears - 1 ?? '';
            }
        }
    }
}

const createUserAge = (user) => {
    const {birthday} = user;
    const userAge = document.createElement('p');
    userAge.classList.add('user-age');
    userAge.append(document.createTextNode(getUserFullYear(birthday)));
    return userAge;
}

export default createUserAge;
