const form = document.getElementById("feedbackForm");
const message = document.getElementById("feedbackMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("feedbackName").value.trim();
    const email = document.getElementById("feedbackEmail").value.trim();
    const rating = document.getElementById("rating").value;
    const category = document.getElementById("feedbackType").value;
    const comments = document.getElementById("comments").value.trim();

    if (!name || !email || !rating || !category || !comments) {
        message.textContent = "Please fill all fields!";
        message.className = "error";
        return;
    }

    if (comments.length < 10) {
        message.textContent = "Write at least 10 characters.";
        message.className = "error";
        return;
    }

    message.textContent =
        "Thank you, " + name + "! Feedback submitted successfully.";
    message.className = "success";

    console.log({ name, email, rating, category, comments });
    form.reset();
});

// Footer year
document.getElementById("year").textContent =
    new Date().getFullYear();