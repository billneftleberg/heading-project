
document.getElementById("change-heading").addEventListener("click", function () {
    const heading = document.getElementById("main-heading");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Change the heading text
    heading.textContent = "Heading Updated Successfully!";

    // Show confirmation message
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = "Heading changed successfully!";

    // Hide message after 3 seconds
    setTimeout(() => {
        confirmationMessage.classList.add("hidden");
    }, 3000);
});
