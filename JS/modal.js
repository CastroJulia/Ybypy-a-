const form = document.getElementById('formContato');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModal');

if (form && modal) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Valida as regras nativas de pattern (nome, email e telefone)
        if (form.checkValidity()) {
            modal.showModal();
            form.reset();
        } else {
            form.reportValidity();
        }
    });
}

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
        modal.close();
    });
}