document.addEventListener('DOMContentLoaded', () => {
    const personaje =JSON.parse(localStorage.getItem('selectedCharacter'))

    console.log(personaje)

    const characterDetailsContainer = document.getElementById('character-details')
    console.log(characterDetailsContainer)
    characterDetailsContainer.innerHTML =`
    <h2> ${personaje.displayName} <h2/>
    <p> ${personaje.description} <p/>` 
})