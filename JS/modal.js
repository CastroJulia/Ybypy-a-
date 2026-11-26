const form = document.getElementById('formContato');
const modal = document.getElementById('myModal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Valida o formulário nativamente
    if (form.checkValidity()) {
        modal.showModal();
        form.reset();
    } else {
        form.reportValidity();
    }
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.close();
    });
}