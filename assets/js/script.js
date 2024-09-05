// Selecciona todos los elementos con la clase 'card'
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const bottom = card.querySelector(".bottom"); // Selecciona el elemento 'bottom' dentro de cada 'card'

    // Evento para mostrar la parte inferior al hacer hover en la tarjeta
    card.addEventListener("mouseenter", () => {
        bottom.style.maxHeight = "250px"
    });

    // Evento para ocultar la parte inferior al salir del hover
    card.addEventListener("mouseleave", () => {
        bottom.style.maxHeight = "0"
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos y revisar que no esten vacios
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

        if (name === '' || email === '' || message === '') {
        alert("Por favor, rellena todos los campos.");
        return;
    }

        alert("message sent successfully");
        //limpiar el formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
});


