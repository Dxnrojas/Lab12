import { obtenerPersonajes } from "./utils.js";
const infoPersonajes = await obtenerPersonajes()
console.log(infoPersonajes);

const personajes = document.getElementById("contenedor");

infoPersonajes.forEach(personaje => {
    const cardPersonaje = document.createElement ("article");
    const icon = document.createElement('img')
    icon.src = personaje.displayIcon
    const name = document.createElement('h2')
    name.textContent = personaje.displayName
    const description = document.createElement('p')
    description.textContent = personaje.description
    const boton = document.createElement("button")
    boton.textContent = "Ver informacion detallada"

    cardPersonaje.appendChild(icon)
    cardPersonaje.appendChild(name)
    cardPersonaje.appendChild(description)
    cardPersonaje.appendChild(boton)
    
    personajes.appendChild(cardPersonaje)

    boton.addEventListener('click', () => {
        localStorage.setItem('selectedCharacter', JSON.stringify(personaje))
        window.location.href = `./character-details.html?name=${personaje.displayName}`
        console.log(personaje)
    })
});

