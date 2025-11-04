

  const form = document.getElementById('login-form');
  const message = document.getElementById('message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        const err = await res.json();
        message.textContent = err.message || 'Error al iniciar sesión';
        message.style.color = 'red';
        return;
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      message.textContent = 'Inicio de sesión exitoso';
      message.style.color = 'green';
    } catch (err) {
      console.error(err);
      message.textContent = 'Error de conexión con el servidor';
      message.style.color = 'red';
    }
  });

const logoutBtn = document.getElementById('logout-btn');

  logoutBtn.addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('No hay sesión activa');

    const res = await fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    const data = await res.json();
    alert(data.message);
    localStorage.removeItem('token');
  });


  
