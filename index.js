const form = document.getElementById("leadForm");
const successMessage = document.getElementById("successMessage");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            successMessage.classList.remove("d-none");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("Network error. Please try again.");
    }

    btn.disabled = false;
    btn.innerText = "Book Now";
});