document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById('specialities-table-body');
    const searchInput = document.getElementById('searchInput');
    const cardCantidad = document.querySelector('.dashboard-card .card__content-cant');

    let specialties = JSON.parse(localStorage.getItem('specialties')) || [];

    function renderTable(data) {
        tbody.innerHTML = ""; 

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--grey-color);">No hay especialidades registradas.</td></tr>`;
            if (cardCantidad) cardCantidad.textContent = 0;
            return;
        }

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

        if (cardCantidad) {
            cardCantidad.textContent = data.length;
        }
    }

    renderTable(specialties);

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const textoBusqueda = e.target.value.toLowerCase().trim();
            const filteredData = specialties.filter(item => 
                item.name.toLowerCase().includes(textoBusqueda) || 
                item.description.toLowerCase().includes(textoBusqueda)
            );
            renderTable(filteredData);
        });
    }
});