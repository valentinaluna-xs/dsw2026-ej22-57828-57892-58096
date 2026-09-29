document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById('specialities-table-body');
    const searchInput = document.getElementById('searchInput');
    const cardCantidad = document.querySelector('.dashboard-card .card__content-cant');

    let specialties = JSON.parse(localStorage.getItem('specialties')) || [];

    let currentPage = 1;
    const rowsPerPage = 5; 
    let currentData = [...specialties];

    function renderTable(data) {
        currentData = data; 
        tbody.innerHTML = ""; 

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="vacio">No hay especialidades registradas.</td></tr>`;
            if (cardCantidad) cardCantidad.textContent = 0;
            removerPaginacion();
            return;
        }

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(item => {
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

        renderPaginacion(data.length);
    }

    function renderPaginacion(totalItems) {
        let paginationDiv = document.getElementById('simple-pagination');
        const tableContainer = document.querySelector('.table-container');

        if (!paginationDiv && tableContainer) {
            paginationDiv = document.createElement('div');
            paginationDiv.id = 'simple-pagination';
            paginationDiv.className = 'paginacion';
            tableContainer.after(paginationDiv);
        }

        if (!paginationDiv) return;

        const totalPages = Math.ceil(totalItems / rowsPerPage);

        if (totalPages <= 1) {
            paginationDiv.innerHTML = '';
            return;
        }

        paginationDiv.innerHTML = `
            <button id="btn-prev" class="menu-btn" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
            <span class="paginacion-texto">Página ${currentPage} de ${totalPages}</span>
            <button id="btn-next" class="menu-btn" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente</button>
        `;

        document.getElementById('btn-prev').onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable(currentData);
            }
        };

        document.getElementById('btn-next').onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderTable(currentData);
            }
        };
    }

    function removerPaginacion() {
        const paginationDiv = document.getElementById('simple-pagination');
        if (paginationDiv) paginationDiv.innerHTML = '';
    }

    renderTable(specialties);

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const textoBusqueda = e.target.value.toLowerCase().trim();
            const filteredData = specialties.filter(item => 
                item.name.toLowerCase().includes(textoBusqueda) || 
                item.description.toLowerCase().includes(textoBusqueda)
            );
            currentPage = 1; 
            renderTable(filteredData);
        });
    }
});