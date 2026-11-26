document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');
    const modal = document.getElementById('myModal');
    const btnEnviar = document.getElementById('btnEnviar');
    const closeModalBtn = document.getElementById('closeModal');

    if (btnEnviar && form && modal) {
        btnEnviar.addEventListener('click', () => {
            // Verifica a validação dos padrões (Nome, E-mail e Telefone)
            if (form.checkValidity()) {
                modal.showModal();
                form.reset();
            } else {
                // Exibe os alertas visuais de campo inválido nativos do navegador
                form.reportValidity();
            }
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.close();
        });
    }
});