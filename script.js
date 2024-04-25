import { obtenerPersonajes } from "./utils.js";

const render = async () => {

const infoPersonajes = await obtenerPersonajes()
console.log(infoPersonajes);

const personajes = document.getElementById("contenedor");
personajes.classList.add("contenedor-personajes")

infoPersonajes.forEach(personaje => {
    const cardPersonaje = document.createElement ("article");
    cardPersonaje.classList.add("article");

    const icon = document.createElement('img');
    icon.src = personaje.displayIcon;

    const name = document.createElement('h2');
    name.textContent = personaje.displayName;
    name.classList.add("title");

    const description = document.createElement('p');
    description.textContent = personaje.description;
    description.classList.add("parrafo");

    const boton = document.createElement("button");
    boton.textContent = "Ver informacion detallada";
    boton.classList.add("boton");

    cardPersonaje.appendChild(icon);
    cardPersonaje.appendChild(name);
    cardPersonaje.appendChild(description);
    cardPersonaje.appendChild(boton);
    
    personajes.appendChild(cardPersonaje);

    boton.addEventListener('click', () => {
        localStorage.setItem('selectedCharacter', JSON.stringify(personaje));
        window.location.href = `./character-details.html?name=${personaje.displayName}`
        console.log(personaje)
    })
});

}

document.addEventListener("DOMContentLoaded", render);

