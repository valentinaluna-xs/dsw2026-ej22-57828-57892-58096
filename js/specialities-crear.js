document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('specialty-form');
    const inputNombre = document.getElementById('nombre');
    const inputDescripcion = document.getElementById('descripcion');
    
    const errorNombre = document.getElementById('error-nombre');
    const errorDescripcion = document.getElementById('error-descripcion');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            if (errorNombre) errorNombre.textContent = '';
            if (errorDescripcion) errorDescripcion.textContent = '';

            const nombreVal = inputNombre.value.trim();
            const descripcionVal = inputDescripcion.value.trim();

            if (!nombreVal) {
                if (errorNombre) errorNombre.textContent = 'El nombre de la especialidad es requerido.';
                isValid = false;
            } else if (nombreVal.length > 15) {
                if (errorNombre) errorNombre.textContent = 'El nombre no puede superar los 15 caracteres.';
                isValid = false;
            }

            if (!descripcionVal) {
                if (errorDescripcion) errorDescripcion.textContent = 'La descripción es requerida.';
                isValid = false;
            } else if (descripcionVal.length > 100) {
                if (errorDescripcion) errorDescripcion.textContent = 'La descripción no puede superar los 100 caracteres.';
                isValid = false;
            }

            if (isValid) {
                const nuevaEspecialidad = {
                    id: Date.now(), 
                    nombre: nombreVal,
                    descripcion: descripcionVal
                };

                console.log('Objeto de especialidad creado:', nuevaEspecialidad);
                alert('¡Especialidad creada con éxito! (Ver consola)');
                
                form.reset();
            }
        });
    }
});