document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Mensaje enviado correctamente!");
                form.reset();
            } else {
                alert("Error al enviar el mensaje.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al enviar el mensaje.");
        }
    });

    const modeToggle = document.getElementById("mode-toggle");
    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });
});
