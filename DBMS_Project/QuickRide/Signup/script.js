document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Invalid phone number. It should be 10 digits.");
        return;
    }

    alert("Signup successful!");
    // Here you can add API call logic to send data to the backend
});
