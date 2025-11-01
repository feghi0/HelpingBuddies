const loginBox = document.getElementById('loginBox');
    const tablaPedidos = document.getElementById('tablaPedidos');
    const tablaBody = document.getElementById('tablaBody');
    const loginMsg = document.getElementById('loginMsg');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginBtn = document.getElementById('loginBtn');

    const countTotal = document.getElementById('countTotal');
    const countProceso = document.getElementById('countProceso');
    const countFinal = document.getElementById('countFinal');

    // Inicio de sesión
    loginBtn.addEventListener('click', () => {
      const user = document.getElementById('user').value;
      const pass = document.getElementById('pass').value;

      if (user === 'admin' && pass === 'admin') {
        localStorage.setItem('adminAuth', 'true');
        mostrarTabla();
      } else {
        loginMsg.textContent = 'Usuario o contraseña incorrectos.';
      }
    });

    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('adminAuth');
      location.reload();
    });

    // Mostrar tabla
    function mostrarTabla() {
      loginBox.style.display = 'none';
      tablaPedidos.style.display = 'block';
      logoutBtn.style.display = 'inline-block';
      cargarPedidos();
    }

    // Cargar pedidos desde localStorage
    function cargarPedidos() {
      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

      // Contadores
      const total = pedidos.length;
      const proceso = pedidos.filter(p => p.estado === 'En proceso').length;
      const finalizados = pedidos.filter(p => p.estado === 'Finalizado').length;

      countTotal.textContent = total;
      countProceso.textContent = proceso;
      countFinal.textContent = finalizados;

      // Tabla
      tablaBody.innerHTML = pedidos.length
        ? pedidos.map((p, i) => `
          <tr ${p.estado === 'En proceso' ? 'style="background-color:#e8f8e8;"' : p.estado === 'Finalizado' ? 'style="background-color:#f0f0f0;"' : ''}>
            <td>${p.nombre}</td>
            <td>${p.email}</td>
            <td>${p.animal}</td>
            <td>${p.fecha}</td>
            <td class="estado ${p.estado === 'En proceso' ? 'en-proceso' : p.estado === 'Finalizado' ? 'finalizado' : ''}">
              ${p.estado || 'Pendiente'}
            </td>
            <td>
              <button class="btn-tomar" onclick="tomarPedido(${i})">✅</button>
              <button class="btn-finalizar" onclick="finalizarPedido(${i})">🏁</button>
              <button class="btn-eliminar" onclick="eliminarPedido(${i})">⛔</button>
            </td>
          </tr>
        `).join('')
        : '<tr><td colspan="6">No hay pedidos registrados</td></tr>';
    }

    // Tomar pedido
    function tomarPedido(index) {
      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      pedidos[index].estado = 'En proceso';
      localStorage.setItem('pedidos', JSON.stringify(pedidos));
      cargarPedidos();
    }

    // Finalizar pedido
    function finalizarPedido(index) {
      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      pedidos[index].estado = 'Finalizado';
      localStorage.setItem('pedidos', JSON.stringify(pedidos));
      cargarPedidos();
    }

    // Eliminar pedido
    function eliminarPedido(index) {
      const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
      pedidos.splice(index, 1);
      localStorage.setItem('pedidos', JSON.stringify(pedidos));
      cargarPedidos();
    }

    // Mantener sesión activa
    if (localStorage.getItem('adminAuth') === 'true') mostrarTabla();

    // Exponer funciones globales
    window.tomarPedido = tomarPedido;
    window.finalizarPedido = finalizarPedido;
    window.eliminarPedido = eliminarPedido;