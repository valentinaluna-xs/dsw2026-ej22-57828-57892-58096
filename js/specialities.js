document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById('specialities-table-body');
    const searchInput = document.getElementById('searchInput');
    const cardCantidad = document.querySelector('.dashboard-card .card__content-cant');

    fetch('specialties.json')
        .then(respuesta => respuesta.json())
        .then(data => {
            tbody.innerHTML = ""; 
            data.forEach(item => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${item.id}</td>
                    <td><strong>${item.name}</strong></td>
                    <td>${item.description}</td>
                    <td><span class="status status--active">Activo</span></td>
                    <td>
                        <button class="btn-edit" title="Editar">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button class="btn-delete" title="Eliminar">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </td>`;
                tbody.appendChild(fila);
            });

            // Actualizar contador dinámico en la tarjeta
            if (cardCantidad) {
                cardCantidad.textContent = data.length;
            }
        })
        .catch(error => console.error('Error al cargar el JSON:', error));

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const textoBusqueda = e.target.value.toLowerCase().trim();
            const filas = document.querySelectorAll('#specialities-table-body tr');

            filas.forEach(fila => {
                const contenidoFila = fila.textContent.toLowerCase();
                if (contenidoFila.includes(textoBusqueda)) {
                    fila.style.display = ''; 
                } else {
                    fila.style.display = 'none'; 
                }
            });
        });
    }
});