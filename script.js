import { obtenerPersonajes } from "./utils.js";

const render = async () => {
    const infoPersonajes = await obtenerPersonajes();
    const contenedorPersonajes = document.getElementById("contenedor");
    contenedorPersonajes.classList.add("contenedor-personajes");

    const renderizarPersonajes = (personajes) => {
        contenedorPersonajes.innerHTML = "";
        personajes.forEach(personaje => {
            const cardPersonaje = document.createElement("article");
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

            const trash = document.createElement("button");
            trash.textContent = "Eliminar";
            trash.classList.add("trash");

            cardPersonaje.appendChild(icon);
            cardPersonaje.appendChild(name);
            cardPersonaje.appendChild(description);
            cardPersonaje.appendChild(boton);
            cardPersonaje.appendChild(trash);

            contenedorPersonajes.appendChild(cardPersonaje);

            boton.addEventListener('click', () => {
                localStorage.setItem('selectedCharacter', JSON.stringify(personaje));
                window.location.href = `./character-details.html?name=${personaje.displayName}`;
                console.log(personaje);
            });

            trash.addEventListener('click', () => {
                cardPersonaje.remove();
            });
        });
        
    };

    const filtrarPersonajes = (textoBusqueda) => {
        const personajesFiltrados = infoPersonajes.filter(personaje => {
            return personaje.displayName.toLowerCase().includes(textoBusqueda.toLowerCase());
        });
        renderizarPersonajes(personajesFiltrados);
    };

    const inputBusqueda = document.getElementById("searchInput");
    inputBusqueda.addEventListener("input", (event) => {
        const textoBusqueda = event.target.value;
        filtrarPersonajes(textoBusqueda);
    });

    renderizarPersonajes(infoPersonajes);
};

document.addEventListener("DOMContentLoaded", render);
