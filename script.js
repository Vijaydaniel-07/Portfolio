// Smooth scroll (already used before)
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


// Handle Contact Form Submission
const form = document.querySelector(".contact-form");
const statusText = document.createElement("p");
form.appendChild(statusText);

form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop normal form submission

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            statusText.innerText = "✅ Message Sent Successfully to Vijay's Inbox!";
            statusText.style.color = "#00ff00";
            form.reset();
        } else {
            statusText.innerText = "❌ Oops! Something went wrong.";
            statusText.style.color = "#ff0000";
        }
    } catch (error) {
        statusText.innerText = "❌ Network Error. Try again later.";
        statusText.style.color = "#ff0000";
    }
});
