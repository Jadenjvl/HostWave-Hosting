document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.cta-button');
    const modal = document.getElementById('serverDetailsModal');
    const closeModal = document.querySelector('.close-button'); // Make sure this selector matches your HTML
    const serverDetailsForm = document.getElementById('serverDetailsForm');
    const editServerForm = document.getElementById('edit-server-form'); // Make sure this ID matches your HTML

    // Show modal when "Buy Now" is clicked
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Generate a Transaction ID and store it
            const transactionId = generateTransactionId();
            alert(`Your Transaction ID is: ${transactionId}. Remember to keep it safe as you'll need it to manage your server.`);
            document.getElementById('transactionId').value = transactionId; // Set Transaction ID in the form
            document.getElementById('transactionIdEdit').value = transactionId; // Set Transaction ID in the edit form
            modal.style.display = 'block';
        });
    });

    // Close the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Function to generate a unique Transaction ID
    function generateTransactionId() {
        return 'TX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
});
