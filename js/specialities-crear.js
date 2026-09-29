document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputNombre = document.getElementById('nombre');
    const inputDescripcion = document.getElementById('descripcion');
    const btnCancelar = document.querySelector('.btn-cancelar');

    function mostrarError(input, mensaje) {
        let errorDiv = input.parentElement.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('span');
            errorDiv.className = 'error-message';
            input.parentElement.appendChild(errorDiv);
        }
        errorDiv.textContent = mensaje;
    }

    function limpiarError(input) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.textContent = '';
        }
    }

    if (btnCancelar) {
        btnCancelar.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'specialities.html';
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            const nombreVal = inputNombre.value.trim();
            const descripcionVal = inputDescripcion.value.trim();

            if (!nombreVal) {
                mostrarError(inputNombre, 'El nombre de la especialidad es requerido.');
                isValid = false;
            } else if (nombreVal.length > 15) {
                mostrarError(inputNombre, 'El nombre no puede superar los 15 caracteres.');
                isValid = false; 
            } else {
                limpiarError(inputNombre);
            }

            if (!descripcionVal) {
                mostrarError(inputDescripcion, 'La descripción es requerida.');
                isValid = false;
            } else if (descripcionVal.length > 100) {
                mostrarError(inputDescripcion, 'La descripción no puede superar los 100 caracteres.');
                isValid = false;
            } else {
                limpiarError(inputDescripcion);
            }

            if (isValid) {
                let specialties = JSON.parse(localStorage.getItem('specialties')) || [];

                const nuevaEspecialidad = {
                    id: crypto.randomUUID(), 
                    name: nombreVal,
                    description: descripcionVal
                };

                console.log('Objeto de especialidad creado:', nuevaEspecialidad);

                specialties.push(nuevaEspecialidad);
                localStorage.setItem('specialties', JSON.stringify(specialties));

                alert('¡Especialidad creada con éxito!');
                
                form.reset();

                window.location.href = 'specialities.html';
            }
        });
    }
});