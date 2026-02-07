document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax/Scroll Effect for Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Simple interaction for buttons to show they work
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.innerText;
            // Don't change text if it has an icon
            if (!btn.querySelector('i')) {
                btn.innerText = 'Loading...';
                setTimeout(() => {
                    btn.innerText = originalText;
                    alert('This is a demo interaction!'); // Simple feedback
                }, 500);
            }
        });
    });
    // Login Modal & Functionality
    const loginBtn = document.querySelector('.auth-buttons .btn-secondary');

    // Create Modal HTML
    const modalHTML = `
        <div id="loginModal" class="modal">
            <div class="modal-content glass">
                <span class="close">&times;</span>
                <h2>Welcome Back</h2>
                <form id="loginForm">
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required placeholder="Enter your email">
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" required placeholder="Enter your password">
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Login</button>
                    <div id="loginMessage" style="margin-top: 1rem; text-align: center;"></div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        loginMessage.textContent = '';
        loginMessage.className = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            loginMessage.textContent = '';
            loginMessage.className = '';
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const submitBtn = loginForm.querySelector('button');

        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';
        submitBtn.disabled = true;

        try {
            // Adjust API URL as needed for your PHP server setup
            const response = await fetch('http://localhost:8000/api/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.className = 'success';
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));

                // Update UI to show logged in state
                setTimeout(() => {
                    modal.style.display = 'none';
                    authButtons.innerHTML = `
                        <span style="margin-right: 1rem;">Hi, ${data.user.full_name}</span>
                        <button class="btn btn-secondary" onclick="logout()">Logout</button>
                    `;
                }, 1500);
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            loginMessage.textContent = error.message;
            loginMessage.className = 'error';
        } finally {
            submitBtn.innerHTML = 'Login';
            submitBtn.disabled = false;
        }
    });

    // Check if already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        authButtons.innerHTML = `
            <span style="margin-right: 1rem;">Hi, ${user.full_name}</span>
            <button class="btn btn-secondary" id="logoutBtn">Logout</button>
        `;
        // Re-attach listener for dynamic logout button
        document.getElementById('logoutBtn').addEventListener('click', logout);
    }
});

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
}
