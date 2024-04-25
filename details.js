document.addEventListener('DOMContentLoaded', () => {

    const personaje =JSON.parse(localStorage.getItem('selectedCharacter'));

    console.log(personaje)

    const characterDetailsContainer = document.getElementById('character-details');
    characterDetailsContainer.classList.add("container");
    
    characterDetailsContainer.innerHTML =`
    
    <h2 class="name"> ${personaje.displayName} <h2/>
    <p class= "description"> ${personaje.description} <p/>
    <img src=${personaje.displayIcon}>` 
});

