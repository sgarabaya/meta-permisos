document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalCloseButton = document.querySelector('.modal>.button');

    modalCloseButton.onclick = () => modal.classList.toggle('shown');

    [...document.querySelectorAll('abbr')]
        .forEach(ab => ab.onclick = () => {
            modal.classList.toggle('shown');
        });
});