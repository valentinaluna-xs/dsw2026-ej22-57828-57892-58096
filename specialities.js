const tbody = document.getElementById('specialities-table-body');
const searchInput = document.getElementById('searchInput');

let filasEspecialidades = [];

fetch('specialties.json')
.then(respuesta => respuesta.json())
.then(data => {
    data.forEach(item => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>Active</td>
            <td>
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Eliminar</button>
            </td>`;
        tbody.appendChild(fila);
        
        filasEspecialidades.push({
            elemento: fila,
            texto: (item.name + " " + item.description).toLowerCase()
        });
    });
})
.catch(error => console.error('Error al cargar el JSON:', error));

searchInput.addEventListener('input', (e) => {
  
    const textoBusqueda = e.target.value.toLowerCase().trim();
    
    filasEspecialidades.forEach(item => {
        if (item.texto.includes(textoBusqueda)) {
            item.elemento.style.display = ''; 
        } else {
            item.elemento.style.display = 'none'; 
        }
    });
});