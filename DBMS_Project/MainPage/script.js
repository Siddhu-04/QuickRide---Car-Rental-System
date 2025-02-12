// Toggle active trip type button
document.querySelectorAll(".trip-type button").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelector(".trip-type .active").classList.remove("active");
        this.classList.add("active");
    });
});

// Explore Cabs Button Click
document.querySelector(".explore-btn").addEventListener("click", function() {
    alert("Searching for available cabs...");
});

// Login Modal Functionality
const modal = document.getElementById("loginModal");
const loginBtn = document.querySelector(".login-btn");
const closeModal = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal box
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Login Button Click
document.getElementById("loginSubmit").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@example.com" && password === "123456") {
        alert("Login Successful!");
        modal.style.display = "none";
    } else {
        alert("Invalid Credentials. Try again.");
    }
});
