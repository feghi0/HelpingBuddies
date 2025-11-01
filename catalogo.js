const animales = [
      {nombre: 'Buddy', tipo: 'Perro de asistencia', ayuda: 'Movilidad y acompañamiento emocional', edad: '3 años', tam: 'Mediano', act: 'Muy activo y sociable', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDk-RwNIsVyIlx-uuVHI5icOc4oOOqGZR1A&s'},
      {nombre: 'Luna', tipo: 'Gato terapéutico', ayuda: 'Ansiedad y depresión', edad: '2 años', tam: 'Pequeño', act: 'Tranquilo y cariñoso', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6k-_4w1OSzG1XIW1IXMxNHxyQAnhE9Xybaw&s'},
      {nombre: 'Spirit', tipo: 'Caballo de terapia', ayuda: 'Terapias físicas y emocionales', edad: '7 años', tam: 'Grande', act: 'Sereno y paciente', img: 'https://www.zooplus.es/magazine/wp-content/uploads/2022/07/Caballo-oldenburgo-1.webp'},
      {nombre: 'Nieve', tipo: 'Conejo de compañía', ayuda: 'Acompañamiento emocional', edad: '1 año', tam: 'Pequeño', act: 'Activo pero dócil', img: 'https://cdn0.expertoanimal.com/es/razas/6/8/6/conejo-blanco-de-florida_686_1_600.jpg'},
      {nombre: 'Kiwi', tipo: 'Loro de apoyo comunicativo', ayuda: 'Estimulación del habla y socialización', edad: '4 años', tam: 'Pequeño', act: 'Muy activo y parlanchín', img: 'https://images.unsplash.com/photo-1648733366513-7cefc88f28ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9ybyUyMGdyYW5kZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000'},
      {nombre: 'Blue', tipo: 'Delfín terapéutico', ayuda: 'Terapias acuáticas y relajación emocional', edad: '6 años', tam: 'Grande', act: 'Energético y amable', img: 'data:image/jpeg;base64,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'}
    ];

    const catalogo = document.getElementById('catalogo');

    // Renderizado dinámico
    animales.forEach(animal => {
      const card = document.createElement('div');
      card.classList.add('animal-card');
      card.innerHTML = `
        <img src=\"${animal.img}\" alt=\"${animal.tipo}\">
        <div class=\"animal-info\">
          <h3>${animal.nombre}</h3>
          <p><strong>Tipo:</strong> ${animal.tipo}</p>
          <p><strong>Ayuda:</strong> ${animal.ayuda}</p>
          <p><strong>Edad:</strong> ${animal.edad}</p>
          <p><strong>Tamaño:</strong> ${animal.tam}</p>
          <p><strong>Actividad:</strong> ${animal.act}</p>
          <a href=\"#\" class=\"pedir-btn\" data-animal=\"${animal.nombre}\">Pedir</a>
        </div>`;
      catalogo.appendChild(card);
    });

    // Modal
    const modal = document.getElementById('pedidoModal');
    const closeModal = document.getElementById('closeModal');
    const confirmacion = document.getElementById('confirmacion');
    const animalTexto = document.getElementById('animalSeleccionado');

    document.addEventListener('click', e => {
      if (e.target.classList.contains('pedir-btn')) {
        e.preventDefault();
        const nombreAnimal = e.target.dataset.animal;
        animalTexto.textContent = `Estás solicitando a ${nombreAnimal}`;
        confirmacion.textContent = '';
        modal.style.display = 'flex';
        modal.dataset.animal = nombreAnimal;
      }
    });

    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

    // Guardar pedido en localStorage
    document.getElementById('enviarPedido').addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const animal = modal.dataset.animal;
      if (!nombre || !email) {
        confirmacion.style.color = 'red';
        confirmacion.textContent = 'Por favor completá tu nombre y correo.';
        return;
      }

      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      pedidos.push({nombre, email, animal, fecha: new Date().toLocaleString()});
      localStorage.setItem('pedidos', JSON.stringify(pedidos));

      confirmacion.style.color = 'green';
      confirmacion.textContent = '¡Pedido enviado con éxito! Te contactaremos pronto.';
      setTimeout(() => modal.style.display = 'none', 2000);
    });