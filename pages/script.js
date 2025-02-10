document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mock users
    const users = [
        { username: 'Admin', password: 'caimanrouter', role: 'admin' },
        { username: 'crocodzila', password: 'caimanrouter', role: 'read-only' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = user.role === 'admin' ? 'admin.html' : 'read-only.html';
    } else {
        alert('Invalid username or password');
    }
});
