
const tbody = document.getElementById('Especialities-table-body');
 fetch('specialties.json')
 .then(respuesta => respuesta.json())
 .then(data => 
        {
         data.forEach(item => 
           {
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
                });
            
            })
                 
            .catch(error => console.error('Error al cargar el JSON:', error));
             
            