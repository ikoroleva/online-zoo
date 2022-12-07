const tabletSize = 640;
const mobileSize = 320;
const smallDesktopSize = 1000;
let screenSize;

window.addEventListener('resize', () => {
    const currentScreenSize = screenSize;
    getScreenSize();

    if (currentScreenSize != screenSize) {
        document.querySelectorAll('.pet__card').forEach((child) => { child.remove(); })
        fill(screenSize == 'desktop' || screenSize == 'smallDesktop' ? 6 : 4);
    }
})

const shuffle = (array, count) => {
    let pets = [].concat(array);
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pets[i], pets[j]] = [pets[j], pets[i]];
    }
    return pets.slice(0, count);
}

const getScreenSize = () => {
    let screenWidth = this.document.documentElement.clientWidth;

    if (screenWidth > smallDesktopSize) {
        screenSize = 'desktop';
    }
    else if (screenWidth > tabletSize) {
        screenSize = 'smallDesktop';
    }
    else if (screenWidth > mobileSize) {
        screenSize = 'tablet';
    }
    else {
        screenSize = 'mobile';
    }
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

const getColumnDesktop = (index) => {

    switch (index) {
        case 0:
        case 3:
            return 'column2';
        case 1:
        case 4:
            return 'column3';
        case 2:
        case 5:
            return 'column4';
        default:
            return '';
    }
}

const getColumnSmallDesktop = (index) => {

    switch (index) {
        case 0:
        case 3:
            return 'column1';
        case 1:
        case 4:
            return 'column2';
        case 2:
        case 5:
            return 'column3';
        default:
            return '';
    }
}

const getRowSmallDesktop = (index) => {
    switch (index) {
        case 0:
        case 1:
        case 2:
            return 'row1';
        case 3:
        case 4:
        case 5:
            return 'row3';
        default:
            return '';
    }
}


const getColumnTablet = (index) => {
    switch (index) {
        case 0:
        case 2:
            return 'column1';
        case 1:
        case 3:
            return 'column2';
        default:
            return '';
    }
}

const getRowTablet = (index) => {
    switch (index) {
        case 0:
        case 1:
            return 'row1';
        case 2:
        case 3:
            return 'row3';
        default:
            return '';
    }
}

const fill = (size) => {
    shuffle(petsArray, size).forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.classList.add('item');
        petCard.classList.add('pet__card');

        petCard.id = pet.id;
        petCard.innerHTML = createCard(pet);
        if (screenSize == 'desktop') {
            petCard.classList.add(getColumnDesktop(index));
        }
        else if (screenSize == 'smallDesktop') {
            petCard.classList.add(getColumnSmallDesktop(index));
            petCard.classList.add(getRowSmallDesktop(index));
        }
        else if (screenSize == 'tablet') {
            petCard.classList.add(getColumnTablet(index));
            petCard.classList.add(getRowTablet(index));
        }
        petsGallery.append(petCard);
    });
}

getScreenSize();
fill(screenSize == 'desktop' || screenSize == 'smallDesktop' ? 6 : 4);

document.querySelector('.left').addEventListener('click', () => {
    document.querySelectorAll('.pet__card').forEach((child) => { child.remove(); })
    fill(screenSize == 'desktop' || screenSize == 'smallDesktop' ? 6 : 4);
})

document.querySelector('.right').addEventListener('click', () => {
    document.querySelectorAll('.pet__card').forEach((child) => { child.remove(); })
    fill(screenSize == 'desktop' || screenSize == 'smallDesktop' ? 6 : 4);
})