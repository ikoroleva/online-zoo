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

const petsGallery = document.querySelector('.pets__gallery')

petsArray.forEach((pet) => {
    const petCard = document.createElement('div');
    petCard.classList.add('item');
    petCard.classList.add('pet__card');
    petCard.id = pet.id;
    petCard.innerHTML = createCard(pet);
    petsGallery.append(petCard);
});