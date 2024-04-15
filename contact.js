document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // You can add your own validation logic here
        
        // Example: Check if required fields are not empty
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Example: Send the form data to a server-side script or email service
        // Replace this with your actual submission logic
        console.log("Form submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Optionally, you can reset the form after submission
        contactForm.reset();
    });
});
