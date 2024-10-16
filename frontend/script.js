document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    const result = await response.json();
    if (response.status === 201) {
      document.getElementById('message').textContent = 'Client registered successfully!';
    } else {
      document.getElementById('message').textContent = 'Error registering client!';
    }
  });
  