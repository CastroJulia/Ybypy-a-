const form = document.getElementById('formContato');
const modal = document.getElementById('myModal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.showModal();
    form.reset();
});

document.getElementById('closeModal').addEventListener('click', () => modal.close());