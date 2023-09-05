
  document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const data = {
      nombre,
      apellido,
      fechaNacimiento
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del servidor aquí (por ejemplo, mostrarla en la consola)
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      // Manejar errores aquí
      console.error('Error:', error);
    });
  });