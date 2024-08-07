document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.cta-button');
    const modal = document.getElementById('serverDetailsModal');
    const closeModalButton = document.querySelector('.close-button');
    const serverDetailsForm = document.getElementById('serverDetailsForm');
    const controlPanelForm = document.getElementById('controlPanelForm');
    const editServerForm = document.querySelector('#edit-server form');

    // Show modal when "Buy Now" is clicked
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Generate a Transaction ID and store it
            const transactionId = generateTransactionId();
            alert(`Your Transaction ID is: ${transactionId}. Remember to keep it safe as you'll need it to manage your server.`);
            document.getElementById('transactionId').value = transactionId;
            modal.style.display = 'block';
        });
    });

    // Close the modal
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Function to generate a unique Transaction ID
    function generateTransactionId() {
        return 'TX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    // Form submission handlers
    serverDetailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Server details submitted successfully. Please remember to enter your Transaction ID into PayPal.');
        // Here you can add additional form submission handling, like sending data to your server
        modal.style.display = 'none';
    });

    controlPanelForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Control panel action submitted successfully.');
        // Perform control panel actions (e.g., start, stop, restart server)
        // You can add AJAX or Fetch requests here to perform the actions on the server
    });

    editServerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Server update submitted successfully.');
        // You can add AJAX or Fetch requests here to submit form data
    });
});
