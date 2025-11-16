document.addEventListener('DOMContentLoaded', () => {
    const $ = id => document.getElementById(id);

    const overlay = $('login-overlay');
    const loginButton = $('login-button');
    const usernameInput = document.querySelector('.login-input[type="text"]');

    overlay.onclick = () => {
        overlay.classList.toggle('shown');
        $('login-modal').classList.toggle('shown');
    };

    loginButton.onclick = () => {
        const username = usernameInput.value;

        switch (username) {
            case 'jose.garcia@gmail.com':
            case 'maria.perez@gmail.com':
            case 'pedro.mueller@gmail.com':
                localStorage.setItem('username', username);
                window.location = '/profile.html';
                break;
            default:
                usernameInput.classList.toggle('error');
                break;
        }
    };

    [...document.querySelectorAll('[aria-label="Iniciar sesión"]')]
        .forEach(btn => {
            btn.onclick = () => {
                $('login-modal').classList.toggle('shown');
                $('login-overlay').classList.toggle('shown');
            };
        });
});
