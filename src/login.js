document.addEventListener('DOMContentLoaded', () => {
    // Get references to the login form and its input fields
    const loginForm = document.querySelector('#login-form');
    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');

    // Add an event listener to the login form that triggers on submit
    loginForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values of the input fields
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // TODO: Validate the input fields

        // TODO: Send a request to the server to check the credentials and log the user in
        fetch("http://localhost/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(response => {
                if (response.ok) {
                    // Authentication succeeded, do something
                } else {
                    const errorMessage = document.getElementById("error-message");
                    const modal = document.getElementById("error-modal");
                    const span = document.getElementsByClassName("close")[0];

                    errorMessage.textContent = "Invalid email or password. Please try again.";
                    modal.style.display = "block";

                    span.onclick = function () {
                        modal.style.display = "none";
                    };

                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
            })
            .catch(error => {
                const errorMessage = document.getElementById("error-message");
                const modal = document.getElementById("error-modal");
                const span = document.getElementsByClassName("close")[0];

                errorMessage.textContent = "Invalid email or password. Please try again.";
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                };

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
                console.error("Error authenticating user:", error);
            });

        // For now, just log the values of the input fields to the console
        // console.log(`Email: ${email}`);
        // console.log(`Password: ${password}`);

        // Clear the input fields
        emailInput.value = '';
        passwordInput.value = '';
    });
})
