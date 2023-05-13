"use strict";
let wrapper = document.querySelector('.wrapper');
let optionCategory = document.querySelector('#category');
const searchInput = document.querySelector('.search-input')

function dynamicCharacters(data) {
    const houseColors = {
      Gryffindor: "#B42826",
      Hufflepuff: "#BE9316",
      Ravenclaw: "#0198B9",
      Slytherin: "#268040",
      Hogwarts: "#000",
    };
  
    data.forEach((e) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const houseColor = houseColors[e.house] || "black";
  
      card.innerHTML = `
        <div class='card__image'>
          <img src="${e.image}">
        </div>
        <div class='card__content'>
          <h2>${e.name}</h2>  
          <p>Actor: ${e.actor}</p>
          <p class="house" style="color: ${e.houseColor}">House: ${e.house}</p>  
          <p>Birthday:${e.dateOfBirth}</p>  
          <p>Ancestry :${e.ancestry}</p>  
          <p>Species: ${e.species}</p>  
          <p class="${e.wizard === 'true' ? 'blue' : 'red'}">Wizard: ${e.wizard}</p>  
          <p>Eye Colour :${e.eyeColour}</p>  
          <p>Hair Color :${e.hairColour}</p>  
          <p class="${e.gender === 'male' ? 'green' : 'red'}">Gender: ${e.gender}</p>
          <p>Wand Wood: ${e.wand.wood}</p>  
          <p>Wand Core: ${e.wand.core}</p>  
          <p>Wand Length: ${e.wand.length}</p>  
          <p>Patronus: ${e.patronus}</p>  
          <p>HogwartsStudent: ${e.hogwartsStudent}</p>  
          <p>HogwartsStaff: ${e.hogwartsStaff}</p>  
        </div>
      `;
  
      wrapper.append(card);
    });
  }
  

dynamicCharacters(characters)

const dynamicOptions = () => {

    const category = [];
    characters.forEach((element) => {
        if (!category.includes(element.house)) {

            category.push(element.house)

            const option = document.createElement('option');

            option.textContent = element.house;

            optionCategory.append(option);


        }
    })

};

dynamicOptions()


optionCategory.addEventListener('change', (e) => {

    wrapper.innerHTML = "";

    const filterHouse = characters.filter((el) => el.house.toLowerCase() === e.target.value.toLowerCase())

    if (e.target.value === 'all') {
        dynamicCharacters(characters)
    } else {
        dynamicCharacters(filterHouse)
    }


});
const searchCharacters = () => {
    const searchValue = searchInput.value.toLowerCase();
    wrapper.innerHTML = '';

    const filteredCharacters = characters.filter((item) => {
        const lowerCaseName = item.name.toLowerCase();
        const lowerCaseHouse = item.house.toLowerCase();
        return lowerCaseName.includes(searchValue) || lowerCaseHouse.includes(searchValue);
    });

    filteredCharacters.forEach((e) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class='card__image'>
          <img src="${e.image}">
        </div>
        <div class='card__content'>
          <h2>${e.name}</h2>  
          <p>Actor: ${e.actor}</p>
          <p class="house" style="color: ${e.houseColor}">House: ${e.house}</p>  
          <p>Birthday:${e.dateOfBirth}</p>  
          <p>Ancestry :${e.ancestry}</p>  
          <p>Species: ${e.species}</p>  
          <p class="${e.wizard === 'true' ? 'blue' : 'red'}">Wizard: ${e.wizard}</p>  
          <p>Eye Colour :${e.eyeColour}</p>  
          <p>Hair Color :${e.hairColour}</p>  
          <p class="${e.gender === 'male' ? 'green' : 'red'}">Gender: ${e.gender}</p>
          <p>Wand Wood: ${e.wand.wood}</p>  
          <p>Wand Core: ${e.wand.core}</p>  
          <p>Wand Length: ${e.wand.length}</p>  
          <p>Patronus: ${e.patronus}</p>  
          <p>HogwartsStudent: ${e.hogwartsStudent}</p>  
          <p>HogwartsStaff: ${e.hogwartsStaff}</p>  
        </div>
      `;
  
        wrapper.appendChild(card);
    });

};

searchInput.addEventListener("input", searchCharacters);

