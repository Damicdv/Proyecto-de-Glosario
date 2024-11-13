// Función para abrir la ventana modal
function openModal(type) {
    document.getElementById('modal-background').style.display = 'flex';
    document.querySelector(`.${type}--modal`).style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-background').style.display = 'none';
    const modals = document.querySelectorAll('.modal__Window');
    modals.forEach(modal => modal.style.display = 'none');
}
