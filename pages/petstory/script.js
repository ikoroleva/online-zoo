const tabletSize = 640;
const mobileSize = 320;

let screenSize;
const changeSlider = new Event('changeSlider');

const shuffle = (array, count) => {
    let pets = [].concat(array);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pets[i], pets[j]] = [pets[j], pets[i]];
    }
    return pets.slice(0, count);
}

let screenWidth = this.document.documentElement.clientWidth;
let slider;

if (screenWidth > tabletSize) {
    screenSize = 'desktop';
} else if (screenWidth > mobileSize) {
    screenSize = 'tablet';
} else {
    screenSize = 'mobile';
}

const createCard = (pet) => {
    return `
    <div class="pet__card__pic">
        <img src="${pet.src}" alt="funny penguin">
    </div>
    <div class="pet__card__description">
        <div class="pet__card__title">
            <h3>${pet.name}</h3>
            <p>${pet.area}</p>
        </div>
        <img class="pet__card__diet-icon" src="${pet.diet}"
            alt="meat based diet icon">
    </div>`;
}

const petsGallery = document.querySelector('.pets__gallery');

const getColumn = (index) => {
    if (index == 0 || index == 3) {
        return 'column2';
    } if (index == 1 || index == 4) {
        return 'column3';
    } if (index == 2 || index == 5) {
        return 'column4';
    } return '';
}

const fill = (size) => {
    shuffle(petsArray, size).forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.classList.add('item');
        petCard.classList.add('pet__card');
        petCard.classList.add(getColumn(index));
        petCard.id = pet.id;
        petCard.innerHTML = createCard(pet);
        petsGallery.append(petCard);
    });
};
fill(screenSize == 'desktop' ? 6 : 4);

document.querySelector('.left').addEventListener('click', () => {
    document.querySelectorAll('.pet__card').forEach((child) => { child.remove(); })
    fill(screenSize == 'desktop' ? 6 : 4);
})

document.querySelector('.right').addEventListener('click', () => {
    document.querySelectorAll('.pet__card').forEach((child) => { child.remove(); })
    fill(screenSize == 'desktop' ? 6 : 4);
})